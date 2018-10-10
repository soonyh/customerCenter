import { queryMenuClickData } from '@/services/log';

export default {
  namespace: 'log',

  state: {
    list: [],
  },

  effects: {
    // *fetch(_, { call, put }) {
    //   const response = yield call(queryMenuClickData);
    //   yield put({
    //     type: 'saveMenuClickData',
    //     payload: Array.isArray(response) ? response : [],
    //   });
    // },
    *fetch(_, { call, put }) {
        const response = yield call(queryMenuClickData);
        yield put({
          type: 'save',
          payload: Array.isArray(response.list) ? response.list : [],
        });
      },
  },

  reducers: {
    save(state, action) {
      return {
        ...state,
        list: action.payload,
      };
    }
  },
};
