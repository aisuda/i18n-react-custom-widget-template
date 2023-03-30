/*! For license information please see reactInfoCardPlugin.umd.js.LICENSE.txt */
!function(e,a){"object"==typeof exports&&"object"==typeof module?module.exports=a():"function"==typeof define&&define.amd?define([],a):"object"==typeof exports?exports.amisWidget=a():e.amisWidget=a()}(this,(function(){return function(){"use strict";var e={d:function(a,f){for(var c in f)e.o(f,c)&&!e.o(a,c)&&Object.defineProperty(a,c,{enumerable:!0,get:f[c]})},o:function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},r:function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},a={};e.r(a),e.d(a,{InfoCardPlugin:function(){return d},default:function(){return t}});var f=require("amis-widget"),c=require("i18n-runtime");(0,c.extendLocale)("en-US",{abc052102786d375f2b0d6f41fa13051:"Amis is a low code front-end framework that uses JSON configuration to generate pages, which can reduce page development workload and greatly improve efficiency.","52dfce669769762026d17a75a55a1577":"Lofta · Low code platform",b05c95f75e82f460c79f127094388f20:"review","742e6a42d39a711535da712320e90b90":"React component","687fbf4d0a505403a102f105b4a8eff3":"Information display card",f1d4ff50f3828f9b73412e7d94e6dd6e:"custom","224e2ccda861c2514faa683b3683c361":"to configure","74a3905ca8d767198bb95aeb8cf9d295":"Card title",f02e24e6526f93503052618562a22184:"Show Pictures","7798dfb863ef3e454cb56e5ac7a79796":"Number of pictures","26bad5124d362cb819866f643b38bac8":"Number of comments"}),(0,c.extendLocale)("zh-CN",{abc052102786d375f2b0d6f41fa13051:"amis 是一个低代码前端框架，它使用 JSON 配置来生成页面，可以减少页面开发工作量，极大提升效率。","52dfce669769762026d17a75a55a1577":"爱速搭 · 低代码平台",b05c95f75e82f460c79f127094388f20:"评","742e6a42d39a711535da712320e90b90":"react组件","687fbf4d0a505403a102f105b4a8eff3":"信息展示卡片",f1d4ff50f3828f9b73412e7d94e6dd6e:"自定义","224e2ccda861c2514faa683b3683c361":"配置","74a3905ca8d767198bb95aeb8cf9d295":"卡片title",f02e24e6526f93503052618562a22184:"展示图片","7798dfb863ef3e454cb56e5ac7a79796":"图片数量","26bad5124d362cb819866f643b38bac8":"评论数"}),(0,c.extendLocale)("ru-RU",{abc052102786d375f2b0d6f41fa13051:"Amis - это низкокодовая фронтальная фреймворка, которая использует конфигурацию JSON для создания страниц, что снижает нагрузку на разработку страниц и значительно повышает эффективность.","52dfce669769762026d17a75a55a1577":"Скачать: Платформа с низким кодом",b05c95f75e82f460c79f127094388f20:"А","742e6a42d39a711535da712320e90b90":"Компонент React","687fbf4d0a505403a102f105b4a8eff3":"Информационная карточка",f1d4ff50f3828f9b73412e7d94e6dd6e:"Настройка","224e2ccda861c2514faa683b3683c361":"Настройка","74a3905ca8d767198bb95aeb8cf9d295":"Карточка",f02e24e6526f93503052618562a22184:"Показать изображение","7798dfb863ef3e454cb56e5ac7a79796":"Количество фотографий","26bad5124d362cb819866f643b38bac8":"Количество замечаний"});var d=function(){this.rendererName="react-info-card",this.$schema="/schemas/UnkownSchema.json",this.name=(0,c.i18n)("742e6a42d39a711535da712320e90b90"),this.description=(0,c.i18n)("687fbf4d0a505403a102f105b4a8eff3"),this.tags=[(0,c.i18n)("f1d4ff50f3828f9b73412e7d94e6dd6e")],this.icon="fa fa-file-code-o",this.scaffold={type:"react-info-card",label:"react-info-card",name:"react-info-card"},this.previewSchema={type:"react-info-card",label:"react-info-card"},this.panelTitle=(0,c.i18n)("224e2ccda861c2514faa683b3683c361"),this.panelBodyCreator=function(e){return[(0,f.getSchemaTpl)("description",{name:"title",label:(0,c.i18n)("74a3905ca8d767198bb95aeb8cf9d295"),value:(0,c.i18n)("abc052102786d375f2b0d6f41fa13051")}),(0,f.getSchemaTpl)("label",{name:"backgroundImage",label:(0,c.i18n)("f02e24e6526f93503052618562a22184"),value:"https://search-operate.cdn.bcebos.com/64c279f23794a831f9a8e7a4e0b722dd.jpg"}),(0,f.getSchemaTpl)("maximum",{name:"img_count",label:(0,c.i18n)("7798dfb863ef3e454cb56e5ac7a79796"),value:3}),(0,f.getSchemaTpl)("maximum",{name:"comment_count",label:(0,c.i18n)("26bad5124d362cb819866f643b38bac8"),value:2021})]}};(0,f.registerAmisEditorPlugin)(d);var t=d;return a}()}));