import * as types from "./mutation-type"


export default{
	[types.ADD_NOTEITEM](state,item){
		state.noteList.push(item);
	},
	[types.DEL_NOTEITEM](state,index){
		state.noteList.splice(index);
	},
	[types.ADD_MAXSIZE](state){
		state.maxSize++;
	}
}
