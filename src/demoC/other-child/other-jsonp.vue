<template>
  <div class="other-jsonp">
  	<div class="container">
  		<h3>{{title}}</h3>
  		<ul>
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
	import jsonp from "jsonp"
	import CryptoJS from "crypto-js"
export default {
  name: 'otherJsonp',
  data () {
    return {
      title: "jsonp",
      weatherInfo : "",
      xzWeatherInfo : "",
      city : "",
      errorMsg : ""
    }
  },
  methods : {
  	xzWeatherFn(){
  		var _this = this;
  		_this.errorMsg = "";
  		var UID = "UD306F401D"; // 测试用 用户ID，请更换成您自己的用户ID
		  var KEY = "ykx5uzbe0jhyslld"; // 测试用key，请更换成您自己的 Key
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
		  
		  window.jsonpCallback = function(data) {
		    var weather = data.results[0];
		    var text = [];
		    text.push("位置：" + weather.location.path);
		    text.push("天气：" + weather.now.text);
		    text.push("温度：" + weather.now.temperature + "℃");
		    text.push("更新时间：" + weather.last_update);
		    return text;
		  }

			var param = {
				param : "jsonpCallback"
			}
			
			jsonp(url, param , function (err, data) {
				console.log(data);
			  if (err) {
			    console.error(err.message);
			  } else {
			  	
			    _this.xzWeatherInfo = jsonpCallback(data);
			  }
			});
				
  	}
  },
  mounted(){
  	this.xzWeatherFn();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
