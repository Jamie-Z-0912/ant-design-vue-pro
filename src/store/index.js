import Vue from 'vue';
import Vuex from 'vuex';

import app from './modules/app';
import user from './modules/user';
// default router permission control
import permission from './modules/permission';
import getters from './getters';

import main from './main';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    app,
    permission,
    user,
    ...main
  },
  state: {},
  mutations: {},
  actions: {},
  getters
});
