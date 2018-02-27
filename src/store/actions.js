import * as types from "./mutation-type"

export default{
	add(context,item){
		context.commit(types.ADD_NOTEITEM,item);
	},
	del(context,index){
		context.commit(types.DEL_NOTEITEM,index);
	},
	addMaxSize(context){
		context.commit(types.ADD_MAXSIZE);
	}
}
