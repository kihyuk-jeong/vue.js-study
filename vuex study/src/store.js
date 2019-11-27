import Vue from 'vue'
import Vuex from 'vuex'
// vuex 크레에이트시 기본으로 있는 파일
Vue.use(Vuex)

export default new Vuex.Store({
  state: {// data의 역할
    allUsers: [
      {userId: 'hoza123', password: '123', name: '연희', address: 'Seoul', src:'https://goo.gl/oqLfJR'},
      {userId: 'max123', password: '456', name: '이기원', address: '도미니카공화국', src:'https://goo.gl/Ksk9B9'},
      {userId: 'lego123', password: '789', name: 'Lego', address: 'Busan', src:'https://goo.gl/x7SpCD'}
    ]
  },
getters: {
  allUsersCount: function(state) {
    return state.allUsers.length
  },
  countOfSeoul: state => {
    let count = 0
    state.allUsers.forEach(user => {
      if(user.address === 'Seoul') count++
    })
    return count
  },

  percentOfSeoul: (state, getters) => {
    return Math.round(getters.countOfSeoul / getters.allUsersCount *100)
  }
},

  mutations: {
    addUsers: (state, payload) => {
      state.allUsers.push(payload)
    }
  },
  actions: {
    addUsers: ({ commit }, payload) => { // = function({commit})
      //원래는 context 인데 간편화 하기 위해 { commit }
    commit('addUsers', payload)
    }

  }
})
