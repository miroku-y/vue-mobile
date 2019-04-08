const path = require("path");
module.exports = {
  //...
  productionSourceMap: false, //生产环境是否生成sourceMap文件
  pages: {
    index: {
      entry: "./src/main.js"
    }
  },
  /**devServer的功能是用于提供HTTP服务，监听文件变化并实时刷新页面 */
  devServer: {
    disableHostCheck: true,
    port: "3000",
    // host:'localhost',
    // allowedHosts: ["www.caasdata.com"],
    proxy: {
      "/api": {
        //将www.exaple.com印射为/apis
        target: "http://127.0.0.1:4040", // 接口域名
        // secure: false, // 如果是https接口，需要配置这个参数
        changeOrigin: true //是否跨域
        // pathRewrite: {
        //   "^/api": "https://www.caasdata.com/" //需要rewrite的,
        // }
      }
    }
  },
  /**less loader的使用 */
  css: {
    loaderOptions: {
      less: {
        // globalVars:{
        // }
      }
    }
  },
  chainWebpack: config => {
    // 修复HMR
    config.resolve.symlinks(true);
  },
  /**装配webpack */
  configureWebpack: config => {
    config.externals = {
      vue: "Vue",
      "vue-router": "VueRouter",
      vuex: "Vuex"
    };
    // //将每个依赖打包成单独的js文件
    // let optimization = {
    //   runtimeChunk: "single",
    //   splitChunks: {
    //     chunks: "all",
    //     maxInitialRequests: Infinity,
    //     minSize: 20000,
    //     cacheGroups: {
    //       vendor: {
    //         test: /[\\/]node_modules[\\/]/,
    //         name(module) {
    //           const packageName = module.context.match(
    //             /[\\/]node_modules[\\/](.*?)([\\/]|$)/
    //           )[1];
    //           return `npm.${packageName.replace("@", "")}`;
    //         }
    //       }
    //     }
    //   }
    // };
    // Object.assign(config, {
    //   optimization
    // });
    //   if (process.env.NODE_ENV === "production") {
    //     config.module = "production";
    //   } else {
    //     config.module = "development";
    //   }
    //   Object.assign(config, {
    //     // 开发生产共同配置
    //     resolve: {
    //       alias: {
    //         "@": path.resolve(__dirname, "./src"),
    //         "@c": path.resolve(__dirname, "./src/components"),
    //         "@p": path.resolve(__dirname, "./src/pages")
    //       } // 别名配置
    //     }
    //   });
  }
};
