# vue-mobile caas 

## Project setup
```
yarn install
```
### Compiles and hot-reloads for development
```
前端：npm run dev
后端：npm run server
```
### Compiles and minifies for production
```
npm run build
```
### Lints and fixes files
```
npm run lint
```
### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


### 概览
![](https://github.com/yangdongMC/vue-mobile/blob/master/src/assets/index.png) 
![](https://github.com/yangdongMC/vue-mobile/blob/master/src/assets/list.png)
![](https://github.com/yangdongMC/vue-mobile/blob/master/src/assets/video.png)
![](https://github.com/yangdongMC/vue-mobile/blob/master/src/assets/socket.png)

### 开发记录
1、全局安装了vue-cli
2、运行项目可以开到HelloWorld.vue页面
3、安装vue-router 
4、在src下面新建pages【login、register、home】、router【index】文件件夹
5、配置router下的index.js路由文件  
6、在main.js下导入router的配置文件，让它加载到改App应用上  
7、完善路由在,可定义路由类型history、hash,history需要在服务器端进过nginx设置一下，这边有个问题记录一下：
起初是写了一个VLink的路由跳转组件，但是修改热更新以后就消失了，href获取不到值了，这边后期还要研究一下，目前使用router-link标签实现页面跳转  
8、使用vuex来进行状态管理 可参看https://segmentfault.com/a/1190000015782272
  --在src目录下创建一个store文件夹，里面新建一个index.js文件，用于引入导出store  
  --接下来在main.js中引入store,然后在全局注入一下，就可以在任何一个组件中使用this.$store了  
  --进行了前面的前奏之后，就开始使用state的用法了,去store下的index.js文件去定义全局访问的对象state  
  --完成以上3步后，可以在任意组件中使用this.$store.state.default的初始化值了，但是官方不建议这样使用，官方api提供了一个getters，和vue的computed一样，来实时监听state的值的变化(最新状态)，并把它放到Vuex.Store里面  
  --只定义了getters还不完整，要能改变state里面的值，接着使用mutations来进行修改,完成了mutations的定义后，就可以使用this.$store.commit('infoDefault')来进行修改state里面的default的值了，但是官方觉得这不是最理想的改变state值的方式，因为mutations里面的方法是同步事物  
  --针对上面的同步修改存在的问题，现在添加action来异步修改
----------------------------以上是在store下的index.js文件中进行的状态管理，但是状态管理不是一中需求，他实际是对应多方面的需求，所以就要进行模块化拆分---------------------------------------------------  
9、在vuex中使用modules模块化，以及组件中引入mapGetters、mapActions、mapStates
  --在store文件夹下新建modules文件夹，并在改文件夹下建立需要管理状态的js文件，既然要把不同部分的状态分开管理，那么就要把它们分成独立的状态文件了  
10、使用axios进行异步请求，在vue中有2中使用方法，1是定义原型，2是配合vuex进行axios封装请求进行使用，经测试在页面里面直接使用封装的request也是可以完成请求的  
11、编写底部导航栏，完成后放在App.vue下面

### 编译
1、未优化的编译(这里没有使用第三方UI框架，所有不需要处理)
File                                 Size               Gzipped

  dist/js/chunk-vendors.075a3d58.js    334.08 KiB         106.87 KiB
  dist/js/index.afc3556c.js            14.55 KiB          4.07 KiB
  dist/css/index.9f103c8c.css          4.14 KiB           1.18 KiB

2、第一步处理路由懒加载
vue-router官方推荐syntax-dynamic-import插件，不过它要求同时安装@bable/core^7.0.0，如果你安装了babel-core6，是会有版本冲突的。我的做法如下

npm install babel-plugin-syntax-dynamic-import --save-dev(^6.18.0)
使用路由懒加载后，index.js拆分为多个
File                                    Size              Gzipped

  dist/js/chunk-vendors.075a3d58.js       334.08 KiB        106.87 KiB
  dist/js/index.d81eb9ad.js               9.86 KiB          3.52 KiB
  dist/js/chunk-5fa24367.1c3ba678.js      3.78 KiB          1.17 KiB
  dist/js/chunk-4b3b43e1.bb9d057c.js      1.76 KiB          0.87 KiB
  dist/js/chunk-2fb1ec80.b40e87a9.js      1.51 KiB          0.62 KiB
  dist/js/chunk-2d0c4873.492d3017.js      0.47 KiB          0.38 KiB
  dist/js/chunk-2d2178fa.31a368e4.js      0.47 KiB          0.38 KiB
  dist/js/chunk-2d207ed8.b8444b2d.js      0.40 KiB          0.33 KiB
  dist/css/chunk-5fa24367.0561b7f2.css    1.91 KiB          0.66 KiB
  dist/css/chunk-2fb1ec80.7e8f4e6e.css    0.89 KiB          0.40 KiB
  dist/css/chunk-4b3b43e1.c1c048a1.css    0.79 KiB          0.38 KiB
  dist/css/index.d060f4f2.css             0.55 KiB          0.34 KiB

3、第二步，可以看出chunk-vendors.js还是很大，懒加载并没有对它进行拆分，原因是webpack将所有的依赖都压缩到这个文件里面，这时我们需要将其拆分，将所有的依赖都打包成单独的js.
有问题，还没有成功

4、将vendor.js中的部分依赖走cdn,如vue,vue-router,设置config.externals.
File                                    Size              Gzipped
dist/js/chunk-vendors.0d574823.js       235.97 KiB        71.92 KiB

###优化总结：
1、在未做任何优化时编译后会生成vendor.js,index.js,css
        |__vue.js,vue-router,vuex
        |__core.js,vconsole.js,axios.js
vendor--|__babel-polyfill.js
        |__runtime.js
以上第三方包都会默认打包到vendor.js中，可以把vue,vue-router,vuex通过cdn进行引入，减小vendor的包体积
2、拆分index.js,通过plugin-syntax-dynamic-import路由懒加载，让对应的路由页面加载对应的js文件
3、vue-cli3默认已经使用了UglifyJsPlugin，对代码进行压缩，但是.map文件还是会生成的，所以开放环境这边要设置一下