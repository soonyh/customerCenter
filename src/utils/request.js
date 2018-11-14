import { notification } from 'antd-x';
import hash from 'hash.js';
import defaultSettings from '@/defaultSettings';

//内部方法：保存数据到sessionStorage
const cachedSave = (response, hashCode) => {
  sessionStorage.setItem(hashCode, JSON.stringify(response));
  sessionStorage.setItem(`${hashCode}:timestamp`, Date.now());
};

//内部方法：校验options中是否存在expiry且为有效值(即>0的数字)
const validExpiry = expiry => {
  return expiry && $.isNumeric(+expiry) && +expiry !== 0 ? true : false;
};

//错误编码翻译表
const codeMessage = {
  0: '请求超时',
  200: '服务器成功返回请求的数据。',
  201: '新建或修改数据成功。',
  202: '一个请求已经进入后台排队（异步任务）。',
  204: '删除数据成功。',
  400: '发出的请求有错误，服务器没有进行新建或修改数据的操作。',
  401: '用户没有权限（令牌、用户名、密码错误）。',
  403: '用户得到授权，但是访问是被禁止的。',
  404: '发出的请求针对的是不存在的记录，服务器没有进行操作。',
  406: '请求的格式不可得。',
  410: '请求的资源被永久删除，且不会再得到的。',
  422: '当创建一个对象时，发生一个验证错误。',
  500: '服务器发生错误，请检查服务器。',
  502: '网关错误。',
  503: '服务不可用，服务器暂时过载或维护。',
  504: '网关超时。',
};

let startTimer;
let _active = 0; //计数器,保证任意多个ajax请求页面上只有一个全局遮罩
let latencyThreshold = 2000;



/**
 * 基于$.ajax的二次封装，封装内容如下：
 *
 * 1、基于约定的回参格式，当resultCode="0"表示resultObject值按约定返回;
 * 其他值均表示错误。此时如果resultMsg有值，那么向用户呈现消息且不进行后续业务操作，否则返回全部数据
 * {
 *   resultCode:"0",
 *   resultMsg:"成功返归约定数据",
 *   resultObject:{}
 * }
 *
 * 2、options中扩展了3个属性，居然描述如下
 * 
 * @param {String} url [必填]请求地址
 * @param {Object} options [选填] 与jquery.ajax的[settings](http://www.css88.com/jqapi-1.9/jQuery.ajax/)用法一致
 *                 同时扩展了3个属性
 *                 [options.showMask=false] 是否采用遮罩, 为true时, 使用全局遮罩; 为jQuery对象时, 使用该对象的局部遮罩
 *                 [options.showError=true] 是否采用默认的错误提示。比如：'/api/currentUser'请求500错误
 *                 [options.expiry=1000*60] 缓存请求结果多少毫秒，单位毫秒
 * @return {Object} 返回原生ajax对象,支持promise等方式调用
 */
export default function request(url, options) {
  let deferred = $.Deferred();

  options = $.extend(
    {
      url: url,
      showMask: false,
      showError: true,
      method: 'post',
      timeout: defaultSettings.timeout,
      dataType: 'json',
    },
    options
  );
  const fingerprint = url + (options.data ? JSON.stringify(options.data) : '');
  const hashCode = hash
    .sha256()
    .update(fingerprint)
    .digest('hex');

  //1、是否配置了有效的options.expiry，如果'有',则进一步判断
  //2、如果sessionStorage中有值且没过期，直接返回sessionStorage中缓存的值
  //3、如果有值但已过期，则从sessionStorage删除缓存
  if (validExpiry(options.expiry)) {
    const expiry = +options.expiry;
    const cached = sessionStorage.getItem(hashCode);
    const whenCached = sessionStorage.getItem(`${hashCode}:timestamp`);
    if (cached !== null && whenCached !== null) {
      const age = Date.now() - whenCached;
      if (age < expiry) {
        return deferred.resolve(JSON.parse(cached));
      }
      sessionStorage.removeItem(hashCode);
      sessionStorage.removeItem(`${hashCode}:timestamp`);
    }
  }

  let maskOptions = {
    blockMsgClass: 'blocking',
    message: '加载中...',
    css: {
      border: 'none',
      padding: '5px 5px 5px 25px',
      left: '50%',
      top: '50%',
      marginLeft: '-60px',
      marginTop: '-18px',
      backgroundColor: '#646464',
      width: '120px',
      fontSize: '16px',
      color: '#fff',
    },
    overlayCSS: {
      opacity: 0.5,
    },
  };

  let defaultBeforeSend = function(xhr, status) {
    if (options.showMask) {
      if (options.showMask instanceof $) {
        $.fn.blockUI && options.showMask.blockUI();
      } else if (_active++ === 0) {
        if (latencyThreshold > 0) {
          $.blockUI && $.blockUI(maskOptions);
          startTimer = setTimeout(function() {
            $('.blockUI.blocking').removeClass('blocking');
          }, latencyThreshold);
        } else {
          $.blockUI && $.blockUI(maskOptions);
        }
      }
    }
  };

  let defaultComplete = function(xhr) {
    if (options.showMask) {
      if (options.showMask instanceof $) {
        $.fn.unblockUI && options.showMask.unblockUI();
      } else if (--_active === 0) {
        if (latencyThreshold > 0) {
          clearTimeout(startTimer);
        }
        $.unblockUI && $.unblockUI();
      }
    }
  };

  let defaultError = function(jqXHR, status, error) {
    if (options.showError) {
      const errortext = codeMessage[jqXHR.status] || jqXHR.statusText;
      notification.error({
        message: `[${jqXHR.status}]错误：${url}`,
        description: errortext,
        placement: 'bottomRight',
      });
      deferred.reject();
    }
  };

  let defaultSuccess = function(data, textStatus, jqXHR) {
    // 当 resultCode 为 '0' 时，表示resultObject有按约定的返回，
    // 其它值表示错误代码（即没按约定的返回）
    if (data.resultCode + '' == '0') {
      // 正常返回数据的情况
      deferred.resolve(data);
      //需要缓存且只会缓存json格式的数据
      validExpiry(options.expiry) &&
        options.dataType.toLocaleLowerCase() == 'json' &&
        cachedSave(data, hashCode);
    } else {
      if (data.resultMsg) {
        // 如果服务器返回了消息，那么向用户呈现消息
        notification.error({
          message: '服务器返回错误消息',
          description: data.resultMsg,
          placement: 'bottomRight',
        });
        // resolve(null)，表示不需要后续进行业务处理
        deferred.resolve();
      } else {
        // 如果服务器没返回消息，那么把 data 丢给外面的业务处理
        deferred.reject(data);
      }
    }
  };

  options.beforeSend = $.isFunction(options.beforeSend)
    ? [defaultBeforeSend, options.beforeSend]
    : defaultBeforeSend;

  options.complete = $.isFunction(options.complete)
    ? [defaultComplete, options.complete]
    : defaultComplete;

  options.error = $.isFunction(options.error) ? [defaultError, options.error] : defaultError;

  options.success = $.isFunction(options.success)
    ? [defaultSuccess, options.success]
    : defaultSuccess;

  $.ajax(options);
  return deferred.promise();
}
