/*! For license information please see reactInfoCardPlugin.umd.js.LICENSE.txt */
!function(e,a){"object"==typeof exports&&"object"==typeof module?module.exports=a():"function"==typeof define&&define.amd?define([],a):"object"==typeof exports?exports.amisWidget=a():e.amisWidget=a()}(this,(function(){return function(){"use strict";var e={d:function(a,c){for(var f in c)e.o(c,f)&&!e.o(a,f)&&Object.defineProperty(a,f,{enumerable:!0,get:c[f]})},o:function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},r:function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},a={};e.r(a),e.d(a,{InfoCardPlugin:function(){return t},default:function(){return d}});var c=require("amis-widget"),f=require("i18n-runtime");(0,f.extendLocale)("zh-CN",{"37c6a9d4d2294b61e08025d2bfda22b2":"amis 是一个低代码前端框架，它使用 JSON 配置来生成页面，可以减少页面开发工作量，极大提升效率。",d6cce67cebd7f818e94b8ceb380a9e10:"爱速搭 · 低代码平台","2ee57f9c0bbd29ab90c57f7b020e3075":"评","6c9b0de22d92217b2154db7c453f24e5":"react组件",e04741723e4712bfd3e106ddf8a4ac9c:"信息展示卡片","9ef9feec3fa5372abaacce3c45eb02ab":"自定义","5ff3a329016d43bb9efac693a0923f5a":"配置","33fffce2ae5ecff65a344ea1b09831be":"卡片title","1c74c3d795663d30e7f39b37d962daf1":"展示图片","80fe75127e5504cecc3f24f49bc2b919":"图片数量",a64997e951d620cd7bc041a39d6c5ae2:"评论数"},!1),(0,f.extendLocale)("en-US",{"37c6a9d4d2294b61e08025d2bfda22b2":"Amis is a low code front-end framework that uses JSON configuration to generate pages, which can reduce page development workload and greatly improve efficiency.",d6cce67cebd7f818e94b8ceb380a9e10:"Aisuda · Low code platform","2ee57f9c0bbd29ab90c57f7b020e3075":"review","6c9b0de22d92217b2154db7c453f24e5":"React component",e04741723e4712bfd3e106ddf8a4ac9c:"Information display card","9ef9feec3fa5372abaacce3c45eb02ab":"custom","5ff3a329016d43bb9efac693a0923f5a":"to configure","33fffce2ae5ecff65a344ea1b09831be":"Card title","1c74c3d795663d30e7f39b37d962daf1":"Display images","80fe75127e5504cecc3f24f49bc2b919":"Number of images",a64997e951d620cd7bc041a39d6c5ae2:"Number of comments"},!1),(0,f.extendLocale)("ru-RU",{"37c6a9d4d2294b61e08025d2bfda22b2":"Amis - это низкокодовая фронтальная фреймворка, которая использует конфигурацию JSON для создания страниц, что снижает нагрузку на разработку страниц и значительно повышает эффективность.",d6cce67cebd7f818e94b8ceb380a9e10:"Скачать: Платформа с низким кодом","2ee57f9c0bbd29ab90c57f7b020e3075":"А","6c9b0de22d92217b2154db7c453f24e5":"Компонент React",e04741723e4712bfd3e106ddf8a4ac9c:"Информационная карточка","9ef9feec3fa5372abaacce3c45eb02ab":"Настройка","5ff3a329016d43bb9efac693a0923f5a":"Настройка","33fffce2ae5ecff65a344ea1b09831be":"Карточка","1c74c3d795663d30e7f39b37d962daf1":"Показать изображение","80fe75127e5504cecc3f24f49bc2b919":"Количество фотографий",a64997e951d620cd7bc041a39d6c5ae2:"Количество замечаний"},!1);var t=function(){this.rendererName="react-info-card",this.$schema="/schemas/UnkownSchema.json",this.name="react组件",this.description="信息展示卡片",this.tags=["自定义"],this.icon="fa fa-file-code-o",this.scaffold={type:"react-info-card",label:"react-info-card",name:"react-info-card"},this.previewSchema={type:"react-info-card",label:"react-info-card"},this.panelTitle="配置",this.panelBodyCreator=function(e){return[(0,c.getSchemaTpl)("description",{i18n:!0,name:"title",label:"卡片title",value:"amis 是一个低代码前端框架，它使用 JSON 配置来生成页面，可以减少页面开发工作量，极大提升效率。"}),(0,c.getSchemaTpl)("label",{name:"backgroundImage",label:"展示图片",value:"https://search-operate.cdn.bcebos.com/64c279f23794a831f9a8e7a4e0b722dd.jpg"}),(0,c.getSchemaTpl)("maximum",{name:"img_count",label:"图片数量",value:3}),(0,c.getSchemaTpl)("maximum",{name:"comment_count",label:"评论数",value:2021})]}};(0,c.registerAmisEditorPlugin)(t);var d=t;return a}()}));