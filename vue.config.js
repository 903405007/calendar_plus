module.exports = {
	devServer: {
		overlay: {
			warning: false,
			errors: false
		},
		proxy:{
			'/api':{
				target:'http://v.juhe.cn/',
				changeOrigin:true, // 需要改变请求源
				ws:true, // web socket 开启
				secure:false, // https检查
				pathRewrite:{
					'^/api':''
				}
			}
		}
	},
	// 关闭eslint的检查
	// 同时package.json设置:
	// "eslintConfig": {
	// 	"root": false,
	// 	"env": {
	// 		"node": false
	// 	}
	// }
	lintOnSave: false
}
