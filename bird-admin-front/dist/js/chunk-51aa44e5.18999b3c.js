(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-51aa44e5"],{"1f38":function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return i}));var o=function(){return"undefined"!==typeof window?window:e},i=function(){var e=o();return e&&e.tinymce?e.tinymce:null}}).call(this,n("c8ba"))},"3daf":function(e,t,n){"use strict";n.r(t);var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"app-container"},[n("editor",{attrs:{init:e.editorInit},model:{value:e.article,callback:function(t){e.article=t},expression:"article"}}),n("el-button",{attrs:{type:"primary"},on:{click:e.submit}},[e._v("提交")])],1)},i=[],r=["onActivate","onAddUndo","onBeforeAddUndo","onBeforeExecCommand","onBeforeGetContent","onBeforeRenderUI","onBeforeSetContent","onBeforePaste","onBlur","onChange","onClearUndos","onClick","onContextMenu","onCopy","onCut","onDblclick","onDeactivate","onDirty","onDrag","onDragDrop","onDragEnd","onDragGesture","onDragOver","onDrop","onExecCommand","onFocus","onFocusIn","onFocusOut","onGetContent","onHide","onInit","onKeyDown","onKeyPress","onKeyUp","onLoadContent","onMouseDown","onMouseEnter","onMouseLeave","onMouseMove","onMouseOut","onMouseOver","onMouseUp","onNodeChange","onObjectResizeStart","onObjectResized","onObjectSelected","onPaste","onPostProcess","onPostRender","onPreProcess","onProgressState","onRedo","onRemove","onReset","onSaveContent","onSelectionChange","onSetAttrib","onSetContent","onShow","onSubmit","onUndo","onVisualAid"],s=function(e){return-1!==r.indexOf(e)},a=function(e,t,n){Object.keys(t).filter(s).forEach((function(o){var i=t[o];"function"===typeof i&&("onInit"===o?i(e,n):n.on(o.substring(2),(function(e){return i(e,n)})))}))},c=function(e,t){var n,o=e.$props.modelEvents?e.$props.modelEvents:null,i=Array.isArray(o)?o.join(" "):o;e.$watch("value",(function(e,o){t&&"string"===typeof e&&e!==n&&e!==o&&(t.setContent(e),n=e)})),t.on(i||"change keyup undo redo",(function(){n=t.getContent(),e.$emit("input",n)}))},l=function(e,t,n){var o=t.$props.value?t.$props.value:"",i=t.$props.initialValue?t.$props.initialValue:"";n.setContent(o||i),t.$listeners.input&&c(t,n),a(e,t.$listeners,n)},u=0,p=function(e){var t=new Date,n=t.getTime(),o=Math.floor(1e9*Math.random());return u++,e+"_"+o+u+String(n)},d=function(e){return null!==e&&"textarea"===e.tagName.toLowerCase()},f=function(e){return"undefined"===typeof e||""===e?[]:Array.isArray(e)?e:e.split(" ")},h=function(e,t){return f(e).concat(f(t))},m=function(e,t,n,o){var i=t.createElement("script");i.type="application/javascript",i.id=e,i.addEventListener("load",o),i.src=n,t.head.appendChild(i)},g=function(){return{listeners:[],scriptId:p("tiny-script"),scriptLoaded:!1}},b=function(e,t,n,o){e.scriptLoaded?o():(e.listeners.push(o),t.getElementById(e.scriptId)||m(e.scriptId,t,n,(function(){e.listeners.forEach((function(e){return e()})),e.scriptLoaded=!0})))},y=n("1f38"),v={apiKey:String,cloudChannel:String,id:String,init:Object,initialValue:String,inline:Boolean,modelEvents:[String,Array],plugins:[String,Array],tagName:String,toolbar:[String,Array],value:String,disabled:Boolean},$=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++)for(var i in t=arguments[n],t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},C=g(),k=function(e,t,n){return e(n||"div",{attrs:{id:t}})},w=function(e,t){return e("textarea",{attrs:{id:t},style:{visibility:"hidden"}})},S=function(e){return function(){var t=$({},e.$props.init,{readonly:e.$props.disabled,selector:"#"+e.elementId,plugins:h(e.$props.init&&e.$props.init.plugins,e.$props.plugins),toolbar:e.$props.toolbar||e.$props.init&&e.$props.init.toolbar,inline:e.inlineEditor,setup:function(t){e.editor=t,t.on("init",(function(n){return l(n,e,t)})),e.$props.init&&"function"===typeof e.$props.init.setup&&e.$props.init.setup(t)}});d(e.element)&&(e.element.style.visibility=""),Object(y["a"])().init(t)}},E={props:v,created:function(){this.elementId=this.$props.id||p("tiny-vue"),this.inlineEditor=this.$props.init&&this.$props.init.inline||this.$props.inline},watch:{disabled:function(){this.editor.setMode(this.disabled?"readonly":"design")}},mounted:function(){if(this.element=this.$el,null!==Object(y["a"])())S(this)();else if(this.element){var e=this.element.ownerDocument,t=this.$props.cloudChannel?this.$props.cloudChannel:"stable",n=this.$props.apiKey?this.$props.apiKey:"",o="https://cloud.tinymce.com/"+t+"/tinymce.min.js?apiKey="+n;b(C,e,o,S(this))}},beforeDestroy:function(){null!==Object(y["a"])()&&Object(y["a"])().remove(this.editor)},render:function(e){return this.inlineEditor?k(e,this.elementId,this.$props.tagName):w(e,this.elementId)}},O=E,j=n("5c96"),x={components:{Editor:O},data(){return{article:{},editorInit:{language:"zh_CN",convert_urls:!1,plugins:["advlist anchor autolink autosave code codesample colorpicker colorpicker contextmenu directionality emoticons fullscreen hr image imagetools importcss insertdatetime link lists media nonbreaking noneditable pagebreak paste preview print save searchreplace spellchecker tabfocus table template textcolor textpattern visualblocks visualchars wordcount"],toolbar:["searchreplace bold italic underline strikethrough alignleft aligncenter alignright outdent indent  blockquote undo redo removeformat subscript superscript code codesample","hr bullist numlist link image charmap preview anchor pagebreak insertdatetime media table emoticons forecolor backcolor fullscreen"],images_upload_handler:function(e,t,n){const o=new FormData;o.append("file",e.blob()),j["MessageBox"].alert("数据："+JSON.stringify(o),"data",{confirmButtonText:"确定",type:"error"}),t("https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1072501717,2659666174&fm=26&gp=0.jpg")}}}},computed:{},created(){},methods:{submit:function(){this.$notify.success({title:"成功",message:"修改成功"}),console.log(tinyMCE.activeEditor.getContent()),j["MessageBox"].alert("数据："+JSON.stringify(tinyMCE.activeEditor.getContent()),"data",{confirmButtonText:"确定",type:"error"})}}},D=x,M=n("2877"),B=Object(M["a"])(D,o,i,!1,null,null,null);t["default"]=B.exports}}]);
//# sourceMappingURL=chunk-51aa44e5.18999b3c.js.map