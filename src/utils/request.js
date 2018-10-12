// import fetch from 'dva/fetch';
import { Message, notification } from 'antd';
import defaultSettings from '@/defaultSettings';
import router from 'umi/router';
import hash from 'hash.js';
import { isAntdPro } from './utils';
// import superagent from 'superagent';
// require('es6-promise').polyfill();
// require('isomorphic-fetch');
const checkStatus = response => {
    if (response.status >= 200 && response.status < 300) {
        return response;
    }
    const errortext = codeMessage[response.status] || response.statusText;
    notification.error({
        message: `请求错误 ${response.status}: ${response.url}`,
        description: errortext,
    });
    const error = new Error(errortext);
    error.name = response.status;
    error.response = response;
    throw error;
};
const cachedSave = (response, hashcode) => {
    /**
     * Clone a response data and store it in sessionStorage
     * Does not support data other than json, Cache only json
     */
    const contentType = response.headers.get('Content-Type');
    if (contentType && contentType.match(/application\/json/i)) {
        // All data is saved as text
        response.clone().text().then(content => {
            sessionStorage.setItem(hashcode, content);
            sessionStorage.setItem(`${hashcode}:timestamp`, Date.now());
        });
    }
    return response;
};
/**
 * fish封装的ajax方法,提供默认的遮罩和错误提示，局部遮罩可自行实现。
 * @method ajax
 * @param {Object} options fish.ajax支持原生的所有ajax参数及回调方法
 *
 * fish扩展了以下几个参数：
 *
 * @param {Function} [options.beforeSend] function(xhr,status){//在发送请求之前要做的事情...}
 * @param {Function} [options.complete] function(xhr,status){//加载完成之后要做的事情...}
 * @param {Function} [options.error] function(xhr){//出现异常的时候要做的事情...}
 * @param {Boolean/Object} [options.showMask=false] 是否采用遮罩, 为true时, 使用全局遮罩; 为jQuery对象时, 使用该对象的局部遮罩
 * @param {Boolean} [options.showError=true] 采用默认的错误提示。
 * @return {Object} 返回原生ajax对象,支持promise等方式调用
 */
//框架使用代理模式,避免用户直接覆盖beforeSend,complete,error
let startTimer;
let _active = 0; //计数器,保证任意多个ajax请求页面上只有一个全局遮罩
let latencyThreshold = 2000;
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
export default function request(url, options) {
    options = $.extend({url:url},{
        showMask: false, //是否采用默认的全局遮罩
        showError: true, //是否采用默认的错误提示
        type: "post",
        timeout:defaultSettings.timeout,
        dataType: "json"
    }, options);
    let deferred  = $.Deferred();
    let styleOptions = {
        blockMsgClass: 'blocking',
        message: "加载中...",
        css: {
            border: 'none',
            padding: '5px 5px 5px 25px',
            left: '50%',
            top: '50%',
            marginLeft: '-60px',
            marginTop: '-18px',
            backgroundColor: '#646464',
            width: "120px",
            fontSize: '16px',
            color: '#fff'
        },
        overlayCSS: {
            opacity: 0.5,
        },
    };
    var oldBeforeSend = options.beforeSend;
    options.beforeSend = function (xhr, status) {
        var context = options.context || this;
        if (oldBeforeSend && oldBeforeSend.apply(context, [xhr, status]) === false) return false;
        if (options.showMask) {
            if (options.showMask instanceof $) {
                $.fn.blockUI && options.showMask.blockUI();
            } else if (_active++ === 0) {
                if (latencyThreshold > 0) {
                    $.blockUI && $.blockUI(styleOptions);
                    startTimer = setTimeout(function () {
                        $('.blockUI.blocking').removeClass('blocking');
                    }, latencyThreshold);
                } else {
                    $.blockUI && $.blockUI(styleOptions);
                }
            }
        }
    };
    options.complete = function (xhr) {
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
    if (options.showError) {
        options.error = [function (jqXHR, status, error) {
            const errortext = codeMessage[jqXHR.status] || jqXHR.statusText;
            notification.error({
                message: `[${jqXHR.status}]请求错误：${url}`,
                description: errortext,
                placement:'bottomRight'
            });
            deferred.reject();

        }, options.error]
    }
    return $.ajax(options).done(function (data, textStatus,jqXHR) {
        // {
        //     status:"ok|error",
        //     message:"",
        //     result:{}
        // }
            // 当 status 为 'ok' 时，表示result有按约定的返回，
            // 其它值表示错误代码（通常status = error 表示错误，即没按约定的返回）
            if (data.status.toLocaleUpperCase() == 'OK') {
                // 正常返回数据的情况
                deferred.resolve(data);
            } else {
                if (data.message) {
                    // 如果服务器返回了消息，那么向用户呈现消息                        
                    notification.error({
                        message: '返回错误',
                        description: data.message,
                    });
                    // resolve(null)，表示不需要后续进行业务处理
                    deferred.resolve();
                } else {
                    // 如果服务器没返回消息，那么把 data 丢给外面的业务处理
                    deferred.reject(data);
                }
            }
  
    });
};
