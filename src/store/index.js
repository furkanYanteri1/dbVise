import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    users:[],
    info:[],
    tableNames:[],
    tableToShow:"",
  },
  getters:{
    getUsersTable:state=>{
      return state.users
    },
    getInfoTable:state=>{
      return state.users
    },
    getTableNames:state=>{
      console.log(state.tableNames)
      return state.tableNames
    },
    getUsersCount:state=>{
      return state.users.length;
    },
    getInfoCount:state=>{
      return state.info.length;
    },
    getTableToShow:state=>{
      return state.tableToShow;

    },

  },
  mutations: {
    SET_TABLE_NAMES(state,data){
      state.tableNames=data
    },
    SET_USER_TABLE(state,data){
      state.users=data
    },
    SET_INFO_TABLE(state,data){
      state.info=data
    },
    SET_TABLE_TO_SHOW(state,data){
      state.tableToShow=data
    },

  },
  actions: {
    tablolariCek({commit}){
      axios
        .get('https://6074b53b066e7e0017e7a464.mockapi.io/users')
        .then(data=>{
          console.log(data.data)
          // let data=data.data
          commit('SET_USER_TABLE',data.data)
        })
        .catch(error=>{
          console.log(error)
        })

        axios
        .get('https://6074b53b066e7e0017e7a464.mockapi.io/info')
        .then(data=>{
          console.log(data.data)
          // let data=data.data
          commit('SET_INFO_TABLE',data.data)
        })
        .catch(error=>{
          console.log(error)
        })

        let names = [{id:1,name:"users"},{id:2,name:"info"}]
        commit('SET_TABLE_NAMES',names)
        // let names = ["users","info"]
        commit("SET_TABLE_TO_SHOW","users")
    },

  },
  modules: {
  }
})
