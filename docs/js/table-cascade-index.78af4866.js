(function(){"use strict";var e={1669:function(e,o,t){var n=t(8735),r=t(4241),i=(t(4415),t(6349)),p=t(7072),a=t(6010);const c={type:"object",properties:{hideFirstColumn:{type:"boolean",title:"隐藏A2","x-decorator":"FormItem","x-component":"Switch"},array:{type:"array","x-decorator":"FormItem","x-component":"ArrayTable",items:{type:"object",properties:{column1:{type:"void","x-component":"ArrayTable.Column","x-component-props":{width:80,title:"Index",align:"center"},properties:{index:{type:"void","x-component":"ArrayTable.Index"}}},column2:{type:"void","x-component":"ArrayTable.Column","x-component-props":{width:100,title:"显隐->A2"},properties:{a1:{type:"boolean","x-decorator":"FormItem","x-component":"Switch"}}},column3:{type:"void","x-component":"ArrayTable.Column","x-component-props":{width:200,title:"A2"},properties:{a2:{type:"string","x-decorator":"FormItem","x-component":"Input"}}},column4:{type:"void","x-component":"ArrayTable.Column","x-component-props":{title:"A3"},properties:{a3:{type:"string","x-decorator":"FormItem","x-component":"Input"}}},column5:{type:"void","x-component":"ArrayTable.Column","x-component-props":{title:"Operations",prop:"operations",width:200,fixed:"right"},properties:{item:{type:"void","x-component":"FormItem",properties:{remove:{type:"void","x-component":"ArrayTable.Remove"},moveDown:{type:"void","x-component":"ArrayTable.MoveDown"},moveUp:{type:"void","x-component":"ArrayTable.MoveUp"}}}}}}},properties:{add:{type:"void","x-component":"ArrayTable.Addition",title:"添加条目"}}}}};var u=c;const l=(0,n.Uk)("提交");var m={setup(e){const{SchemaField:o}=(0,p.cA)({components:{FormItem:a.xJ,ArrayTable:a.hf,Input:a.II,Editable:a.CX,Switch:a.rs}}),t=(0,i.Np)({effects:()=>{(0,i.KQ)("hideFirstColumn",["value"],(e=>{e.query("array.column3").take((o=>{o.visible=!e.value})),e.query("array.*.a2").take((o=>{o.visible=!e.value}))})),(0,i.lC)("array.*.a2",(e=>{e.visible=!e.query(".a1").get("value")}))}}),r=(...e)=>{console.log(...e)};return(e,i)=>((0,n.wg)(),(0,n.j4)((0,n.SU)(p.RV),{form:(0,n.SU)(t)},{default:(0,n.w5)((()=>[(0,n.Wm)((0,n.SU)(o),{schema:(0,n.SU)(u)},null,8,["schema"]),(0,n.Wm)((0,n.SU)(a.k4),{onSubmit:r},{default:(0,n.w5)((()=>[l])),_:1})])),_:1},8,["form"]))}};const s=m;var f=s;(0,n.ri)(f).use(r.Z,{zIndex:3e3}).mount("#app")}},o={};function t(n){var r=o[n];if(void 0!==r)return r.exports;var i=o[n]={exports:{}};return e[n].call(i.exports,i,i.exports,t),i.exports}t.m=e,function(){var e=[];t.O=function(o,n,r,i){if(!n){var p=1/0;for(l=0;l<e.length;l++){n=e[l][0],r=e[l][1],i=e[l][2];for(var a=!0,c=0;c<n.length;c++)(!1&i||p>=i)&&Object.keys(t.O).every((function(e){return t.O[e](n[c])}))?n.splice(c--,1):(a=!1,i<p&&(p=i));if(a){e.splice(l--,1);var u=r();void 0!==u&&(o=u)}}return o}i=i||0;for(var l=e.length;l>0&&e[l-1][2]>i;l--)e[l]=e[l-1];e[l]=[n,r,i]}}(),function(){t.n=function(e){var o=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(o,{a:o}),o}}(),function(){t.d=function(e,o){for(var n in o)t.o(o,n)&&!t.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:o[n]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,o){return Object.prototype.hasOwnProperty.call(e,o)}}(),function(){t.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){t.j=238}(),function(){var e={238:0};t.O.j=function(o){return 0===e[o]};var o=function(o,n){var r,i,p=n[0],a=n[1],c=n[2],u=0;if(p.some((function(o){return 0!==e[o]}))){for(r in a)t.o(a,r)&&(t.m[r]=a[r]);if(c)var l=c(t)}for(o&&o(n);u<p.length;u++)i=p[u],t.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return t.O(l)},n=self["webpackChunktpl_mpa_vuecli5_vue3"]=self["webpackChunktpl_mpa_vuecli5_vue3"]||[];n.forEach(o.bind(null,0)),n.push=o.bind(null,n.push.bind(n))}();var n=t.O(void 0,[998],(function(){return t(1669)}));n=t.O(n)})();
//# sourceMappingURL=table-cascade-index.78af4866.js.map