(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-57ca465a"],{2797:function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"p-grid p-fluid dashboard"},[e("div",{staticClass:"p-col-12 p-lg-3"},[e("div",{staticClass:"card summary"},[e("span",{staticClass:"detail",staticStyle:{"align-content":"center","text-align":"center",display:"block"}},[t._v("Uptime")]),e("span",{staticClass:"title",staticStyle:{"align-content":"center","text-align":"center",display:"block",color:"red"}},[t._v(" "+t._s(this.jvmInfo.upTime)+" ")])])]),e("div",{staticClass:"p-col-12 p-lg-3"},[e("div",{staticClass:"card summary"},[e("span",{staticClass:"detail",staticStyle:{"align-content":"center","text-align":"center",display:"block"}},[t._v("Start time")]),e("span",{staticClass:"title",staticStyle:{"align-content":"center","text-align":"center",display:"block",color:"red"}},[t._v(" "+t._s(this.jvmInfo.startTime)+" ")])])]),e("div",{staticClass:"p-col-12 p-lg-3"},[e("div",{staticClass:"card summary"},[e("span",{staticClass:"detail",staticStyle:{"align-content":"center","text-align":"center",display:"block"}},[t._v("Heap used")]),e("span",{staticClass:"title",staticStyle:{"align-content":"center","text-align":"center",display:"block",color:"green"}},[t._v(" "+t._s(this.jvmInfo.heapUsed)+" ")])])]),e("div",{staticClass:"p-col-12 p-lg-3"},[e("div",{staticClass:"card summary"},[e("span",{staticClass:"detail",staticStyle:{"align-content":"center","text-align":"center",display:"block"}},[t._v("SystemLoadAverage")]),e("span",{staticClass:"title",staticStyle:{"align-content":"center","text-align":"center",display:"block",color:"green"}},[t._v(" "+t._s(this.jvmInfo.systemLoadAverage)+" ")])])]),e("div",{staticClass:"card",staticStyle:{width:"100%"}},[e("h1",{staticStyle:{"font-size":"16px"}},[t._v("JVM Memory")]),e("Chart",{attrs:{type:"line",data:this.jvmInfo.jvmMemoryChart}})],1),e("div",{staticClass:"card",staticStyle:{width:"100%"}},[e("h1",{staticStyle:{"font-size":"16px"}},[t._v("JVM Thread")]),e("Chart",{attrs:{type:"line",data:this.jvmInfo.jvmThreadChart}})],1),e("div",{staticClass:"card",staticStyle:{width:"100%"}},[e("h1",{staticStyle:{"font-size":"16px"}},[t._v("Garbage Collection Time")]),e("Chart",{attrs:{type:"line",data:this.jvmInfo.jvmGCChart}})],1),e("div",{staticClass:"card",staticStyle:{width:"100%"}},[e("h1",{staticStyle:{"font-size":"16px"}},[t._v("Disk")]),e("Chart",{attrs:{type:"line",data:this.jvmInfo.diskChart}})],1)])},i=[],l=(e("bc3a"),e("b775"));class n{getJvm(){return Object(l["a"])({url:"http://localhost:10000/monitor",method:"get"})}}var c={data(){return{jvmInfo:null}},jvmInfoService:null,created(){this.jvmInfoService=new n},mounted(){this.jvmInfoService.getJvm().then(t=>this.jvmInfo=t.data.data),setInterval(this.get,6e4)},methods:{get(){this.jvmInfoService.getJvm().then(t=>this.jvmInfo=t.data.data)}}},r=c,o=(e("f459"),e("2877")),d=Object(o["a"])(r,s,i,!1,null,"65e07b86",null);a["default"]=d.exports},"3be5":function(t,a,e){},f459:function(t,a,e){"use strict";var s=e("3be5"),i=e.n(s);i.a}}]);
//# sourceMappingURL=chunk-57ca465a.b06489e2.js.map