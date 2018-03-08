import Vue from 'vue'
import Router from 'vue-router'
const defaultComponent = r => require.ensure([], () => r(require('../components/defaultComponent')), 'defaultComponent')
const baseTest = r => require.ensure([], () => r(require('../demoC/baseTest')), 'baseTest')
const otherTest = r => require.ensure([], () => r(require('../demoC/otherTest')), 'otherTest')
const baseTemplateSyntax = r => require.ensure([], () => r(require('../demoC/base-child/base-template-syntax')), 'baseTemplateSyntax')
const baseComputedWatch = r => require.ensure([], () => r(require('../demoC/base-child/base-computed-watch')), 'baseComputedWatch')
const baseClassStyle = r => require.ensure([], () => r(require('../demoC/base-child/base-class-style')), 'baseClassStyle')
const baseCondition = r => require.ensure([], () => r(require('../demoC/base-child/base-condition')), 'baseCondition')
const baseList = r => require.ensure([], () => r(require('../demoC/base-child/base-list')), 'baseList')
const baseEvent = r => require.ensure([], () => r(require('../demoC/base-child/base-event')), 'baseEvent')
const baseForms = r => require.ensure([], () => r(require('../demoC/base-child/base-forms')), 'baseForms')
const storeTest = r => require.ensure([], () => r(require('../demoC/storeTest')), 'storeTest')
const storeGetData = r => require.ensure([], () => r(require('../demoC/store-child/store-getData')), 'storeGetData')
const storeMutation = r => require.ensure([], () => r(require('../demoC/store-child/store-mutations')), 'storeMutation')
const storeAction = r => require.ensure([], () => r(require('../demoC/store-child/store-actions')), 'storeAction')
const transitionTest = r => require.ensure([], () => r(require('../demoC/transitionTest')), 'transitionTest')
const routerTest = r => require.ensure([], () => r(require('../demoC/routerTest')), 'routerTest')
const routerP1 = r => require.ensure([], () => r(require('../demoC/router-child/router-p1')), 'routerP1')
const routerP2 = r => require.ensure([], () => r(require('../demoC/router-child/router-p2')), 'routerP2')
const routerDefault = r => require.ensure([], () => r(require('../demoC/router-child/router-default')), 'routerDefault')
const routerDynamic = r => require.ensure([], () => r(require('../demoC/router-child/router-dynamic')), 'routerDynamic')
const routerProgramePush = r => require.ensure([], () => r(require('../demoC/router-child/router-programe-push')), 'routerProgramePush')
const routerProgrameReplace = r => require.ensure([], () => r(require('../demoC/router-child/router-programe-replace')), 'routerProgrameReplace')
const routerName = r => require.ensure([], () => r(require('../demoC/router-child/router-name')), 'routerName')
const routerSidebar = r => require.ensure([], () => r(require('../demoC/router-child/router-sidebar')), 'routerSidebar')
const routerMain = r => require.ensure([], () => r(require('../demoC/router-child/router-main')), 'routerMain')
const routerTop = r => require.ensure([], () => r(require('../demoC/router-child/router-top')), 'routerTop')
const routerProps = r => require.ensure([], () => r(require('../demoC/router-child/router-props')), 'routerProps')
const routerMeta = r => require.ensure([], () => r(require('../demoC/router-child/router-meta')), 'routerMeta')
const routerTransition = r => require.ensure([], () => r(require('../demoC/router-child/router-transition')), 'routerTransition')
const routerGetDataBefore = r => require.ensure([], () => r(require('../demoC/router-child/router-getData-before')), 'routerGetDataBefore')
const routerGetDataAfter = r => require.ensure([], () => r(require('../demoC/router-child/router-getData-after')), 'routerGetDataAfter')
const routerAttributeReplace = r => require.ensure([], () => r(require('../demoC/router-child/router-attribute-replace')), 'routerAttributeReplace')
const routerAttributeTag = r => require.ensure([], () => r(require('../demoC/router-child/router-attribute-tag')), 'routerAttributeTag')
const routerAttributeAC = r => require.ensure([], () => r(require('../demoC/router-child/router-attribute-ac')), 'routerAttributeAC')
const routerAttributeExact = r => require.ensure([], () => r(require('../demoC/router-child/router-attribute-exact')), 'routerAttributeExact')
const componentsTest = r => require.ensure([], () => r(require('../demoC/componentsTest')), 'componentsTest')
const componetsDataIsFun = r => require.ensure([], () => r(require('../demoC/components-child/c-data-is-fun')), 'componetsDataIsFun')
const componetsPropsEmit = r => require.ensure([], () => r(require('../demoC/components-child/c-props-emit')), 'componetsPropsEmit')
const componetsDynamicProp = r => require.ensure([], () => r(require('../demoC/components-child/c-dynamic-props')), 'componetsDynamicProp')
const componetsValidateProps = r => require.ensure([], () => r(require('../demoC/components-child/c-validate-props')), 'componetsValidateProps')
const componetsSlot = r => require.ensure([], () => r(require('../demoC/components-child/c-slot')), 'componetsSlot')
const componetsIs = r => require.ensure([], () => r(require('../demoC/components-child/c-is')), 'componetsIs')
const otherJquery = r => require.ensure([],()=>r(require('../demoC/other-child/other-jquery')),'otherJquery')
const otherSwiper = r => require.ensure([],()=>r(require('../demoC/other-child/other-swiper')),'otherSwiper')
const otherCustomDirective = r => require.ensure([],()=>r(require('../demoC/other-child/other-custom-directive')),'otherCustomDirective')


Vue.use(Router)

export default new Router({
  routes: [
  	{
      path: '/',
      name: 'defaultComponent',
      component: defaultComponent
    },
    {
    	path : "/other-test",
    	name : "otherTest",
    	component : otherTest,
    	children : [
    		{
    			path : "",
    			component : otherJquery
    		},
    		{
    			path : "other-jquery",
    			component : otherJquery
    		},
    		{
    			path : "other-swiper",
    			name : "otherSwiper",
    			component : otherSwiper
    		},
    		{
    			path : "other-custom-directive",
    			name : "otherCustomDirective",
    			component : otherCustomDirective
    		}
    	]
    },
    {
      path: '/base-test',
      component: baseTest,
      children : [
	      {
      		path : "",
      		component : baseTemplateSyntax
	      },
      	{
      		path : "base-template-syntax",
      		name : "baseTemplateSyntax",
      		component : baseTemplateSyntax
      	},
      	{
      		path : "base-computed-watch",
      		name : "baseComputedWatch",
      		component : baseComputedWatch
      	},
      	{
      		path : "base-class-style",
      		name : "baseClassStyle",
      		component : baseClassStyle
      	},
      	{
      		path : "base-condition",
      		name : "baseCondition",
      		component : baseCondition
      	},
      	{
      		path : "base-list",
      		name : "baseList",
      		component : baseList
      	},
      	{
      		path : "base-event",
      		name : "baseEvent",
      		component : baseEvent
      	},
      	{
      		path : "base-forms",
      		name : "baseForms",
      		component : baseForms
      	}
      ]
    },
    {
      path: '/store-test',
      component: storeTest,
      children : [
      	{
      		path : "",
      		component : storeGetData
      	},
      	{
      		path : "store-getData",
      		name : "storeGetData",
      		component : storeGetData
      	},
      	{
      		path : "store-mutations",
      		name : "storeMutation",
      		component : storeMutation
      	},
      	{
      		path : "store-actions",
      		name : "storeAction",
      		component : storeAction
      	}
      ]
    },
    {
    	path : "/transition-test",
    	name : "transitionTest",
    	component : transitionTest
    },
    {
    	path : "/router-test",
    	component : routerTest,
    	beforeEnter : function(to,frome,next){
    		console.log("路由独享守卫");
    		next();
    	},
    	//用到children选项，意味着routerTest组件中用到了嵌套理由(因为入口组件app.vue中已经用到了router-view)
    	children : [
    		{
    			path : "",
    			name : routerDefault,
    			component : routerDefault
    		},
    		{
		    	path : "router-p1",
		    	name : "routerP1",
		    	component : routerP1
		    },
		    {
		    	path : "router-p2",
		    	name : "routerP2",
		    	component : routerP2
		    },
		    {
		    	path : "router-dynamic/:id",
		    	name : "routerDynamic",
		    	component : routerDynamic
		    },
		    {
		    	path : "router-dynamic/:id/post/:data",
		    	name : "routerDynamic",
		    	component : routerDynamic
		    },
		    {
		    	path : "router-programe-push",
		    	name : "routerProgramePush",
		    	component : routerProgramePush
		    },
		    {
		    	path : "router-programe-replace",
		    	name : "routerProgrameReplace",
		    	component : routerProgrameReplace
		    },
		    {
		    	path : "router-name",
		    	component : routerName,
		    	children : [
		    		{
		    			path : "",
		    			components : {
		    				default : routerTop,
				    		s : routerSidebar,
				    		m : routerMain
				    	}
		    		}
		    	]
		    },
		    {
		    	path : "router-props",
		    	name : "routerProps",
		    	component : routerProps,
		    },
		    {
		    	path : "router-props/:v",
		    	name : "routerProps",
		    	component : routerProps,
		    	props : true
		    },
		    {
		    	path : "router-meta",
		    	name : "routerMeta",
		    	component : routerMeta,
		    	meta : {
		    		isMeta : true,
		    		metaInfo : "metaInfo"
		    	}
		    },
		    {
		    	path : "router-transition",
		    	name : "routerTransition",
		    	component : routerTransition
		    },
		    {
		    	path : "router-getData-before",
		    	name : "routerGetDataBefore",
		    	component : routerGetDataBefore
		    },
		    {
		    	path : "router-getData-after",
		    	name : "routerGetDataAfter",
		    	component : routerGetDataAfter
		    },
		    {
		    	path : "router-attribute-replace",
		    	name : "routerAttributeReplace",
		    	component : routerAttributeReplace
		    },
		    {
		    	path : "router-attribute-tag",
		    	name : "routerAttributeTag",
		    	component : routerAttributeTag
		    },
		    {
		    	path : "router-attribute-active-class",
		    	name : "routerAttributeAC",
		    	component : routerAttributeAC
		    },
		    {
		    	path : "router-attribute-exact",
		    	name : "routerAttributeExact",
		    	component : routerAttributeExact
		    }
    	]
    },
    {
    	path : "/components-test",
    	component : componentsTest,
    	children : [
    		{
    			path : "",
    			component : componetsDataIsFun
    		},
    		{
    			path : "c-data-is-fun",
    			name : "componetsDataIsFun",
    			component : componetsDataIsFun
    		},
    		{
    			path : "c-props-emit",
    			name : "componetsPropsEmit",
    			component : componetsPropsEmit
    		},
    		{
    			path : "c-dynamic-props",
    			name : "componetsDynamicProp",
    			component : componetsDynamicProp
    		},
    		{
    			path : 'c-validate-props',
    			name : "componetsValidateProps",
    			component : componetsValidateProps
    		},
    		{
    			path : "c-slot",
    			name : "componetsSlot",
    			component : componetsSlot
    		},
    		{
    			path : "c-is",
    			name : "componetsIs",
    			component : componetsIs
    		}
    	]
    }
  ]
})
