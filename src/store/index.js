import Vue from "vue"
import Vuex from "vuex"
import mutations from "./mutations"
import actions from "./actions"
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

const state = {
	title : "store demo",
	maxSize : 1000,
	account : "szssp",
	noteList : [
		{
			title : "仿有道云笔记",
			author : "wl-z",
			dateStamp : new Date(),
			isDone : false
		},
		{
			title : "仿百词斩",
			author : "百词",
			dateStamp : new Date(),
			isDone : false
		},
		{
			title : "背单词 ",
			author : "zwl",
			dateStamp : new Date(),
			isDone : false
		},
		{
			title : "学vue",
			author : "vue",
			dateStamp : new Date(),
			isDone : true
		},
		{
			title : "找工作",
			author : "job",
			dateStamp : new Date(),
			isDone : true
		}
	]
	
}

//利用getters从state中派生出一下状态
const getters = {
	todoList : state=>{
		return state.noteList.filter(todo=>todo.isDone);
	},
	noteListSize : state=>{
		return state.noteList.length;
	}
}

//Vuex插件就是一个函数
const myPlugin = store => {
  // 当 store 初始化后调用
  store.subscribe((mutation, state) => {
    // 每次 mutation 之后调用
    // mutation 的格式为 { type, payload }
  })
}

export default new Vuex.Store({
	state,
	mutations,
	actions,
	getters,
	//使用了状态持久化插件，刷新不会丢失数据，https://github.com/robinvdvleuten/vuex-persistedstate
	plugins: [myPlugin,createPersistedState()]
})
