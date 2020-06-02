import { getOrgDetail, getOrgTree } from '@/api/system'

export default {
  namespaced: true,
  state: {
    filter: {}, // 查询条件
    treeData: {},
    detailData: {}
  },
  actions: {
    getInit({ state, commit }) {
      return new Promise((resolve, reject) => {
        getOrgTree()
          .then(response => {
            const result = response.result.map((item, index) => {
              return { ...item, key: index }
            })
            commit('save', result)
            resolve()
          })
          .catch(error => {
            reject(error)
          })
      })
    },
    getDetail({ commit }, params) {
      return new Promise((resolve, reject) => {
        getOrgDetail(params)
          .then(response => {
            const result = response.result
            commit('saveDetail', result)
            resolve()
          })
          .catch(error => {
            reject(error)
          })
      })
    }
  },
  mutations: {
    changeFilter: (state, { payload }) => {
      // const temp = payload.page_num ? payload : { ...payload, page_num: 1 };
      state.filter = {
        ...state.filter,
        ...payload
      }
    },
    save: (state, data) => {
      state.treeData = data
    },
    saveDetail: (state, data) => {
      state.detailData = data
    }
  }
}
