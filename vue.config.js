const { defineConfig } = require('@vue/cli-service');
module.exports = defineConfig({
	transpileDependencies: true,
	css: {
		preprocessorOptions: {
			sass: {
				additionalData: '@import "@/assets/scss/global.scss"',
			},
		},
	},
});
