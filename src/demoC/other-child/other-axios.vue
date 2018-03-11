<template>
  <div class="other-axios">
  	<div class="container">
  		<h3>{{title}}</h3>
  		<ul>
  			<li><strong>您所在城市天气</strong>
  				<ul>
  					<li v-for="(index,key) in weatherInfo">{{key}}：{{weatherInfo[key]}}</li>
  				</ul>
  			</li>
  			<li>
  				<strong>指定城市天气 </strong>
  				<ul>
  					<li><input type="text" v-model='city' @keyup.enter="xzWeatherFn" class="form-control" placeholder="请输入城市名称，回车 ，如'北京'，'beijing'"/></li>
  					<li v-if="!errorMsg" v-for="item in xzWeatherInfo">{{item}}</li>
  					<li v-if="errorMsg">{{errorMsg}}</li>
  					<li>数据来源：<img src="../../assets/logo-red-text-gray-4x.png" :style="{'width':'200px'}" /></li>
  				</ul>
  			</li>
  		</ul>
  	</div>
    
  </div>
</template>

<script>
	import $ from "jquery"
	import CryptoJS from "crypto-js"
	function foo(obj){
		return obj.results[0];
	}
export default {
  name: 'otherAxios',
  data () {
    return {
      title: "ajax插件axios",
      weatherInfo : "",
      xzWeatherInfo : "",
      city : "",
      errorMsg : ""
    }
  },
  methods : {
  	getData(){
  		var _this = this;
  		$.ajax({ 
				url : "//www.moguwang.net/api2.php?mod=weather", 
				dataType : "script",
				scriptCharset : "gbk",
				success : function(data) { 
					var _w = window.SWther.lives[0];
					_this.weatherInfo = _w;
				} 
			});
  	},
  	xzWeatherFn(){
  		var _this = this;
  		_this.errorMsg = "";
  		var UID = ""; // 测试用 用户ID，请更换成您自己的用户ID
		  var KEY = ""; // 测试用key，请更换成您自己的 Key
		  var API = "https://api.seniverse.com/v3/weather/now.json"; // 获取天气实况
		  var LOCATION = _this.city || "beijing"; // 除拼音外，还可以使用 v3 id、汉语等形式
		  // 获取当前时间戳
		  var ts = Math.floor((new Date()).getTime() / 1000);
		  // 构造验证参数字符串
		  var str = "ts=" + ts + "&uid=" + UID;
		  // 使用 HMAC-SHA1 方式，以 API 密钥（key）对上一步生成的参数字符串（raw）进行加密
		  // 并将加密结果用 base64 编码，并做一个 urlencode，得到签名 sig
		  var sig = CryptoJS.HmacSHA1(str, KEY).toString(CryptoJS.enc.Base64);
		  sig = encodeURIComponent(sig);
		  str = str + "&sig=" + sig;
		  // 构造最终请求的 url
		  var url = API + "?location=" + LOCATION + "&" + str + "&callback=jsonpCallback";
		  
		  var jsonpCallback = function(data) {
		    var weather = data.results[0];
		    var text = [];
		    text.push("位置：" + weather.location.path);
		    text.push("天气：" + weather.now.text);
		    text.push("温度：" + weather.now.temperature + "℃");
		    text.push("更新时间：" + weather.last_update);
		    return text;
		  }

		  // 直接发送请求进行调用，手动处理回调函数
		  $.ajax({
		  	url : url,
		  	dataType : "jsonp",
		  	jsonpCallback : "jsonpCallback",
		  	success : function(data){
		  		_this.xzWeatherInfo = jsonpCallback(data);
		  	},
		  	error : function(data){
		  		_this.errorMsg = data.statusText;
		  	}
		  });
  	}
  },
  mounted(){
  	this.getData();
  	this.xzWeatherFn();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
