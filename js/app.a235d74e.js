(function(e){function t(t){for(var r,n,o=t[0],l=t[1],c=t[2],d=0,p=[];d<o.length;d++)n=o[d],s[n]&&p.push(s[n][0]),s[n]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);u&&u(t);while(p.length)p.shift()();return i.push.apply(i,c||[]),a()}function a(){for(var e,t=0;t<i.length;t++){for(var a=i[t],r=!0,o=1;o<a.length;o++){var l=a[o];0!==s[l]&&(r=!1)}r&&(i.splice(t--,1),e=n(n.s=a[0]))}return e}var r={},s={app:0},i=[];function n(t){if(r[t])return r[t].exports;var a=r[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=r,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(a,r,function(t){return e[t]}.bind(null,r));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=t,o=o.slice();for(var c=0;c<o.length;c++)t(o[c]);var u=l;i.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},4678:function(e,t,a){var r={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-SG":"cdab","./en-SG.js":"cdab","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-nz":"6f50","./en-nz.js":"6f50","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-tw":"90ea","./zh-tw.js":"90ea"};function s(e){var t=i(e);return a(t)}function i(e){var t=r[e];if(!(t+1)){var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}return t}s.keys=function(){return Object.keys(r)},s.resolve=i,e.exports=s,s.id="4678"},"56d7":function(e,t,a){"use strict";a.r(t);a("cadf"),a("551c"),a("f751"),a("097d");var r=a("2b0e"),s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("NigeriaDataView")],1)},i=[],n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-container",[r("v-layout",{attrs:{row:"","align-center":"","justify-center":""}},[r("v-flex",{attrs:{xs9:""}},[r("v-card",[r("v-card-text",[r("div",{staticClass:"text-xs-center display-3"},[e._v("Nigeria")]),r("div",{staticClass:"text-xs-center subheading"},[e._v("Joseph Shetaye and Robert Holzman")]),r("v-container",[r("v-layout",{attrs:{row:"","align-center":"","justify-space-between":""}},[r("v-flex",[r("div",{staticClass:"text-xs-center display-2"},[e._v("Population")])])],1),r("v-layout",{attrs:{row:"","align-center":"","justify-space-between":"","py-5":""}},[r("number",{attrs:{number:e.population_size,description:"Population"}}),r("number",{attrs:{number:e.population_growth+"%",description:"Population growth"}})],1),r("v-layout",{attrs:{row:"","align-center":"","justify-space-between":"","py-5":""}},[r("number",{attrs:{number:e.immigration,description:"Immigration rate"}}),r("number",{attrs:{number:e.emmigration,description:"Emmigration rate"}})],1),r("v-layout",{attrs:{row:"","align-center":"","justify-space-between":""}},[r("v-flex",[r("div",{staticClass:"text-xs-center display-1"},[e._v("Age")])])],1),r("v-layout",{attrs:{row:"","align-center":"","justify-space-between":""}},[r("v-flex",{attrs:{xs5:""}},[r("v-img",{attrs:{src:a("d2f2"),"max-width":"500","max-height":"500"}})],1),r("pie-graph",{attrs:{name:"age_groups",labels:e.age_pie_labels,data:e.age_pie_data,description:"Age groups"}})],1),r("v-layout",{attrs:{row:"","align-center":"","justify-space-between":""}},[r("v-flex",[r("div",{staticClass:"text-xs-center display-1"},[e._v("Poverty")])])],1),r("v-layout",{attrs:{column:"","align-center":"","justify-space-between":"","pt-5":"","pb-2":""}},[r("number-big",{attrs:{number:e.below_poverty_line+"%",description:"of the country is below the poverty line,"}})],1),r("v-layout",{attrs:{column:"","align-center":"","justify-space-between":"","pb-5":"","pt-2":""}},[r("number-big",{attrs:{number:e.lifespan,description_top:"and people on average live",description:"years."}})],1),r("v-layout",{attrs:{row:"","align-center":"","justify-space-between":"","py-5":""}},[r("number",{attrs:{number:e.below_poverty_line+"%",description_top:"On average the literacy rate is"}}),r("number",{attrs:{number:e.education_years,description_top:"People receive",description:"years of schooling"}})],1),r("v-layout",{attrs:{row:"","align-center":"","justify-space-between":"","py-5":""}},[r("number",{attrs:{number:e.hdi,description:"HDI"}}),r("number",{attrs:{number:e.hdi_ranking+"th",description:"HDI Ranking"}})],1),r("v-layout",{attrs:{row:"","align-center":"","justify-space-between":""}},[r("v-flex",[r("div",{staticClass:"text-xs-center display-2"},[e._v("Economics")])])],1),r("v-layout",{attrs:{row:"","align-center":"","justify-space-between":"","py-5":""}},[r("numberBig",{attrs:{number:"$"+e.ppp_gdp,description:"GDP adjusted for PPP"}}),r("pie-graph",{attrs:{name:"sector_gdp_share",labels:e.sector_gdp_pie_labels,data:e.sector_gdp_pie_data,description:"Each sector's share of the GDP"}})],1),r("v-layout",{attrs:{row:"","align-center":"","justify-space-between":"","py-5":""}},[r("pie-graph",{attrs:{name:"sector_worker_share",labels:e.sector_worker_pie_labels,data:e.sector_worker_pie_data,description:"Each sector's share of the worker population"}}),r("v-flex",[r("div",{staticClass:"subheading text-xs-center"},[e._v("\n                  Major Industries:\n                  "),r("ul",{staticStyle:{"list-style-type":"none"}},e._l(e.major_industries,function(t,a){return r("li",{key:a},[e._v("\n                      "+e._s(t)+"\n                    ")])}),0)])])],1),r("v-layout",{attrs:{column:"","align-center":"","justify-space-between":"","pb-5":"","pt-2":""}},[r("pie-graph",{attrs:{name:"agricultural_land_use",labels:e.agricultural_use_pie_labels,data:e.agricultural_use_pie_data,description:"Agricultural land use."}})],1),r("v-layout",{attrs:{row:"","align-center":"","justify-space-between":""}},[r("v-flex",[r("div",{staticClass:"text-xs-center display-1"},[e._v("Inequality")])])],1),r("v-layout",{attrs:{row:"","align-center":"","justify-space-between":"","py-5":""}},[r("number",{attrs:{number:e.gini_index,description:"Gini Index"}}),r("number",{attrs:{number:e.gini_rating,description:"Gini Index Rating"}})],1),r("v-layout",{attrs:{column:"","align-center":"","justify-space-between":"","pb-5":"","pt-2":""}},[r("bar-graph",{attrs:{name:"household_income",label:"Household Income Distribution - Top and Bottom 10%",labels:e.household_bar_labels,data:e.household_bar_data,description:""}})],1),r("v-layout",{attrs:{row:"","align-center":"","justify-space-between":""}},[r("v-flex",[r("div",{staticClass:"text-xs-center display-2"},[e._v("Politics")])])],1),r("v-layout",{attrs:{row:"","align-center":"","justify-space-between":"","py-5":""}},[r("number",{attrs:{number:e.freedom_level,description:"Level of Freedom"}}),r("number",{attrs:{number:e.democracy_level,description_top:"",description:"Democracy Level"}})],1),r("v-layout",{attrs:{row:"","align-center":"","justify-space-between":"","py-5":""}},[r("number",{attrs:{number:e.political_rights,description:"Political Rights"}}),r("number",{attrs:{number:e.civil_liberties,description:"Civil Liberties"}})],1),r("v-layout",{attrs:{row:"","align-center":"","justify-space-between":"","py-5":""}},[r("v-flex",{attrs:{xs5:""}},[r("v-img",{attrs:{src:a("b6c2"),"max-width":"500","max-height":"500"}})],1),r("number",{attrs:{number:e.transparency,description:"Transparency Rating (Corruption)"}})],1),r("v-layout",{attrs:{column:"","align-center":"","justify-space-between":"","pb-5":"","pt-2":""}},[r("v-flex",{attrs:{xs5:""}},[r("div",{staticClass:"display-1"},[e._v("Suffrage:")]),r("div",{staticClass:"display-1"},[r("b",[e._v("18 Years Old, Universal")])])])],1),r("v-layout",{attrs:{row:"","align-center":"","justify-space-between":""}},[r("v-flex",[r("div",{staticClass:"text-xs-center display-1"},[e._v("Women")])])],1),r("v-layout",{attrs:{column:"","align-center":"","justify-space-between":"","py-5":""}},[r("numberBig",{attrs:{number:e.women_legislature+"/"+e.legislature_size,description:"Women in legislature"}})],1),r("v-layout",{attrs:{column:"","align-center":"","justify-space-between":"","py-5":""}},[r("numberBig",{attrs:{number:e.women_suffrage,description:"Year women gained suffrage."}})],1),r("v-layout",{attrs:{row:"","align-center":"","justify-space-between":""}},[r("v-flex",[r("div",{staticClass:"text-xs-center display-1"},[e._v("Cleavages")])])],1),r("v-layout",{attrs:{row:"","align-center":"","justify-space-between":"","py-5":""}},[r("v-flex",{attrs:{xs5:""}},[r("v-img",{attrs:{src:a("b6c2"),"max-width":"500","max-height":"500"}})],1),r("pie-graph",{attrs:{name:"ethnic_groups",labels:e.ethnic_groups_pie_labels,data:e.ethnic_groups_pie_data,description:"Ethnic groups"}})],1),r("v-layout",{attrs:{row:"","align-center":"","justify-space-between":"","py-5":""}},[r("pie-graph",{attrs:{name:"religious_groups",labels:e.religious_groups_pie_labels,data:e.religious_groups_pie_data,description:"Religious groups"}}),r("v-flex",{attrs:{xs5:""}},[r("v-img",{attrs:{src:a("b6c2"),"max-width":"500","max-height":"500"}})],1)],1),r("v-layout",{attrs:{row:"","align-center":"","justify-space-between":""}},[r("v-flex",[r("div",{staticClass:"text-xs-center display-1"},[e._v("Other Data")])])],1),r("v-layout",{attrs:{row:"","align-center":"","justify-space-between":"","py-5":""}},[r("number",{attrs:{number:e.oil_export_ratio+"%",description_top:"Oil makes up",description:"of Nigerian exports."}}),r("number",{attrs:{number:e.oil_refinery_ratio+"%",description_top:"Nigeria has enough refineries to process",description:"of the oil it makes"}})],1)],1)],1)],1)],1)],1)],1)},o=[],l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-flex",{attrs:{xs5:""}},[e.description_top?a("div",{staticClass:"text-xs-center subheading"},[e._v(e._s(e.description_top))]):e._e(),a("div",{staticClass:"text-xs-center display-2"},[e._v(e._s(e.number))]),a("div",{staticClass:"text-xs-center subheading"},[e._v(e._s(e.description))])])},c=[],u={name:"Number",props:{number:String,description:String,description_top:String}},d=u,p=a("2877"),b=Object(p["a"])(d,l,c,!1,null,"85b9772c",null),f=b.exports,g=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-flex",{attrs:{xs5:""}},[e.description_top?a("div",{staticClass:"text-xs-center subheading"},[e._v(e._s(e.description_top))]):e._e(),a("div",{staticClass:"text-xs-center display-4"},[e._v(e._s(e.number))]),a("div",{staticClass:"text-xs-center subheading"},[e._v(e._s(e.description))])])},_=[],m={name:"NumberBig",props:{number:String,description:String,description_top:String}},j=m,y=Object(p["a"])(j,g,_,!1,null,"11384a6e",null),v=y.exports,h=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-flex",{attrs:{xs5:""}},[a("canvas",{ref:e.name,attrs:{width:"400",height:"400"}}),a("div",{staticClass:"text-xs-center subheading py-5"},[e._v(e._s(e.description))])])},x=[],w=(a("7f7f"),a("30ef")),k=a.n(w),C={name:"PieGraph",data:function(){return{chart:null}},props:{name:String,data:Array,labels:Array,description:String},mounted:function(){var e=this.$refs[this.name].getContext("2d");this.chart=new k.a(e,{type:"pie",data:{labels:this.labels,datasets:[{data:this.data,backgroundColor:["rgba(255, 99, 132, 0.2)","rgba(54, 162, 235, 0.2)","rgba(255, 206, 86, 0.2)","rgba(75, 192, 192, 0.2)","rgba(153, 102, 255, 0.2)","rgba(255, 159, 64, 0.2)"],borderColor:["rgba(255, 99, 132, 1)","rgba(54, 162, 235, 1)","rgba(255, 206, 86, 1)","rgba(75, 192, 192, 1)","rgba(153, 102, 255, 1)","rgba(255, 159, 64, 1)"],borderWidth:0}]}})}},z=C,P=Object(p["a"])(z,h,x,!1,null,"ee3493ba",null),O=P.exports,S=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-flex",{attrs:{xs5:""}},[a("canvas",{ref:e.name,attrs:{width:"400",height:"400"}}),a("div",{staticClass:"text-xs-center subheading py-5"},[e._v(e._s(e.description))])])},E=[],I={name:"BarGraph",data:function(){return{chart:null}},props:{name:String,data:Array,labels:Array,label:String,description:String},mounted:function(){var e=this.$refs[this.name].getContext("2d");this.chart=new k.a(e,{type:"bar",data:{labels:this.labels,datasets:[{label:this.label,data:this.data,backgroundColor:["rgba(255, 99, 132, 0.2)","rgba(54, 162, 235, 0.2)","rgba(255, 206, 86, 0.2)","rgba(75, 192, 192, 0.2)","rgba(153, 102, 255, 0.2)","rgba(255, 159, 64, 0.2)"],borderColor:["rgba(255, 99, 132, 1)","rgba(54, 162, 235, 1)","rgba(255, 206, 86, 1)","rgba(75, 192, 192, 1)","rgba(153, 102, 255, 1)","rgba(255, 159, 64, 1)"],borderWidth:0}]},options:{scales:{yAxes:[{ticks:{beginAtZero:!0}}]}}})}},D=I,N=Object(p["a"])(D,S,E,!1,null,"717e5bfe",null),A=N.exports,G={name:"NigeriaDataView",data:function(){return{population_size:"203,452,505",population_growth:2.54,immigration:0,emmigration:0,age_pie_labels:["0-14 Years","15-24 Years","25-54 Years","55-64 Years","65 Years and Older"],age_pie_data:[42.45,19.81,30.44,4.04,3.26],below_poverty_line:70,lifespan:59.3,education_years:9,hdi:.532,hdi_ranking:157,ppp_gdp:5933.3,sector_gdp_pie_labels:["Primary","Secondary","Tertiary"],sector_gdp_pie_data:[21.1,19.4,59.5],sector_worker_pie_labels:["Primary","Secondary","Tertiary"],sector_worker_pie_data:[70,10,20],major_industries:["crude oil","coal","tin","columbite","rubber products","wood","hides and skins","textiles","cement and other construction materials","food products","footwear","chemicals","fertilizer","printing","ceramics","steel"],agricultural_use_pie_labels:["Arable Land","Permanent Crops","Permanent Pasture"],agricultural_use_pie_data:[37.3,7.4,33.3],gini_index:48.8,gini_rating:21,household_bar_labels:["Lowest 10%","Highest 10%"],household_bar_data:[1.8,38.2],freedom_level:"Partly Freed",democracy_level:4.5,political_rights:4,civil_liberties:4,transparency:27,women_legislature:6,legislature_size:469,women_suffrage:1958,ethnic_groups_pie_labels:["Hausa","Igbo(Ibo)","Yoruba","Fulani","Tiv","Ibibio","Ijaw/Izon","Kanuri/Beriberi","Igala","other","unspecified"],ethnic_groups_pie_data:[27.4,14.1,13.9,6.3,2.2,2.2,2,1.7,1,28.9,.2],religious_groups_pie_labels:["Muslim","Roman Catholic","other Christian","traditionalist","unspecified"],religious_groups_pie_data:[51.6,11.2,35.7,.9,.5],oil_export_ratio:Math.round(82.70565552699229),oil_refinery_ratio:Math.round(446e3/1535e3*100)}},components:{Number:f,PieGraph:O,NumberBig:v,BarGraph:A}},$=G,B=Object(p["a"])($,n,o,!1,null,"03b4625b",null),M=B.exports,T={name:"app",components:{NigeriaDataView:M}},Y=T,R=Object(p["a"])(Y,s,i,!1,null,null,null),H=R.exports,L=a("ce5b"),F=a.n(L);a("bf40");r["default"].use(F.a,{theme:{primary:"#9E9E9E",secondary:"#616161",primary_text:"#212121",secondary_text:"#757575",accent:"#4CAF50"},iconfont:"md"}),r["default"].config.productionTip=!1,new r["default"]({render:function(e){return e(H)}}).$mount("#app")},b6c2:function(e,t,a){e.exports=a.p+"img/political_divisions.ef49fbd8.jpg"},d2f2:function(e,t,a){e.exports=a.p+"img/population_pyramid.66d83dfb.jpg"}});
//# sourceMappingURL=app.a235d74e.js.map