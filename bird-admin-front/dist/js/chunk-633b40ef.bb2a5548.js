(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-633b40ef"],{"6c35":function(t,e,s){"use strict";s.r(e);var o=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"p-grid crud-demo"},[s("div",{staticClass:"p-col-12"},[s("div",{staticClass:"card"},[s("Toast"),s("Toolbar",{staticClass:"p-mb-4"},[s("template",{slot:"left"},[s("Button",{staticClass:"p-button-success p-mr-2",attrs:{label:"New",icon:"pi pi-plus"},on:{click:t.openNew}}),s("Button",{staticClass:"p-button-danger",attrs:{label:"Delete",icon:"pi pi-trash",disabled:!t.selectedProducts||!t.selectedProducts.length},on:{click:t.confirmDeleteSelected}})],1),s("template",{slot:"right"},[s("FileUpload",{staticClass:"p-mr-2 p-d-inline-block",attrs:{mode:"basic",accept:"image/*",maxFileSize:1e6,label:"Import",chooseLabel:"Import"}}),s("Button",{staticClass:"p-button-help",attrs:{label:"Export",icon:"pi pi-upload"},on:{click:function(e){return t.exportCSV(e)}}})],1)],2),s("DataTable",{ref:"dt",attrs:{value:t.roles,selection:t.selectedProducts,dataKey:"id",paginator:!0,rows:10,filters:t.filters,paginatorTemplate:"FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown",rowsPerPageOptions:[5,10,25],currentPageReportTemplate:"Showing {first} to {last} of {totalRecords} products"},on:{"update:selection":function(e){t.selectedProducts=e}},scopedSlots:t._u([{key:"header",fn:function(){return[s("div",{staticClass:"table-header"},[s("h5",{staticClass:"p-m-0"},[t._v("Manage Roles")]),s("span",{staticClass:"p-input-icon-left"},[s("i",{staticClass:"pi pi-search"}),s("InputText",{attrs:{placeholder:"Search..."},model:{value:t.filters["global"],callback:function(e){t.$set(t.filters,"global",e)},expression:"filters['global']"}})],1)])]},proxy:!0}])},[s("Column",{attrs:{selectionMode:"multiple",headerStyle:"width: 3rem"}}),s("Column",{attrs:{field:"id",header:"id",sortable:""}}),s("Column",{attrs:{field:"name",header:"name",sortable:""}}),s("Column",{attrs:{field:"descption",header:"descption",sortable:""}}),s("Column",{attrs:{field:"dateAdd",header:"dateAdd",sortable:""}}),s("Column",{attrs:{field:"dateUpdate",header:"dateUpdate",sortable:""}}),s("Column",{attrs:{field:"permissions",header:"permissions",sortable:""}}),s("Column",{scopedSlots:t._u([{key:"body",fn:function(e){return[s("Button",{staticClass:"p-button-rounded p-button-success p-mr-2",attrs:{icon:"pi pi-pencil"},on:{click:function(s){return t.editRole(e.data)}}}),s("Button",{staticClass:"p-button-rounded p-button-warning",attrs:{icon:"pi pi-trash"},on:{click:function(s){return t.confirmDeleteProduct(e.data)}}})]}}])})],1),s("Dialog",{staticClass:"p-fluid",style:{width:"450px"},attrs:{visible:t.productDialog,header:"Product Details",modal:!0},on:{"update:visible":function(e){t.productDialog=e}},scopedSlots:t._u([{key:"footer",fn:function(){return[s("Button",{staticClass:"p-button-text",attrs:{label:"Cancel",icon:"pi pi-times"},on:{click:t.hideDialog}}),s("Button",{staticClass:"p-button-text",attrs:{label:"Save",icon:"pi pi-check"},on:{click:t.saveProduct}})]},proxy:!0}])},[t.role.image?s("img",{staticClass:"product-image",attrs:{src:"assets/layout/images/product/"+t.role.image,alt:t.role.image}}):t._e(),s("div",{staticClass:"p-field"},[s("label",{attrs:{for:"name"}},[t._v("Name")]),s("InputText",{class:{"p-invalid":t.submitted&&!t.role.name},attrs:{id:"name",required:"true",autofocus:""},model:{value:t.role.name,callback:function(e){t.$set(t.role,"name","string"===typeof e?e.trim():e)},expression:"role.name"}}),t.submitted&&!t.role.name?s("small",{staticClass:"p-invalid"},[t._v("Name is required.")]):t._e()],1),s("div",{staticClass:"p-field"},[s("label",{attrs:{for:"descption"}},[t._v("Description")]),s("Textarea",{attrs:{id:"descption",required:"true",rows:"3",cols:"20"},model:{value:t.role.descption,callback:function(e){t.$set(t.role,"descption",e)},expression:"role.descption"}})],1),s("div",{staticClass:"p-formgrid p-grid"},[s("div",{staticClass:"p-field p-col"},[s("label",{attrs:{for:"permissions"}},[t._v("permissions")]),s("Textarea",{attrs:{id:"permissions",required:"true",rows:"3",cols:"20"},model:{value:t.role.permissions,callback:function(e){t.$set(t.role,"permissions",e)},expression:"role.permissions"}})],1)])]),s("Dialog",{style:{width:"450px"},attrs:{visible:t.deleteProductDialog,header:"Confirm",modal:!0},on:{"update:visible":function(e){t.deleteProductDialog=e}},scopedSlots:t._u([{key:"footer",fn:function(){return[s("Button",{staticClass:"p-button-text",attrs:{label:"No",icon:"pi pi-times"},on:{click:function(e){t.deleteProductDialog=!1}}}),s("Button",{staticClass:"p-button-text",attrs:{label:"Yes",icon:"pi pi-check"},on:{click:t.deleteProduct}})]},proxy:!0}])},[s("div",{staticClass:"confirmation-content"},[s("i",{staticClass:"pi pi-exclamation-triangle p-mr-3",staticStyle:{"font-size":"2rem"}}),t.role?s("span",[t._v("Are you sure you want to delete "),s("b",[t._v(t._s(t.role.name))]),t._v("?")]):t._e()])]),s("Dialog",{style:{width:"450px"},attrs:{visible:t.deleteProductsDialog,header:"Confirm",modal:!0},on:{"update:visible":function(e){t.deleteProductsDialog=e}},scopedSlots:t._u([{key:"footer",fn:function(){return[s("Button",{staticClass:"p-button-text",attrs:{label:"No",icon:"pi pi-times"},on:{click:function(e){t.deleteProductsDialog=!1}}}),s("Button",{staticClass:"p-button-text",attrs:{label:"Yes",icon:"pi pi-check"},on:{click:t.deleteSelectedProducts}})]},proxy:!0}])},[s("div",{staticClass:"confirmation-content"},[s("i",{staticClass:"pi pi-exclamation-triangle p-mr-3",staticStyle:{"font-size":"2rem"}}),t.role?s("span",[t._v("Are you sure you want to delete the selected products?")]):t._e()])])],1)])])},l=[],i=(s("bc3a"),s("b775"));class a{getRoles(){return Object(i["a"])({url:"http://localhost:10000/role/all",method:"get"})}saveRole(t){return Object(i["a"])({url:"http://localhost:10000/role/save",method:"post",data:t})}deleteRole(t){return Object(i["a"])({url:"http://localhost:10000/role/delete",method:"post",data:t})}deleteRoleBatch(t){return Object(i["a"])({url:"http://localhost:10000/role/deleteBatch",method:"post",data:t})}}var r={data(){return{roles:null,productDialog:!1,deleteProductDialog:!1,deleteProductsDialog:!1,role:{},selectedProducts:null,filters:{},submitted:!1}},roleService:null,created(){this.roleService=new a},mounted(){this.roleService.getRoles().then(t=>this.roles=t.data.data)},methods:{openNew(){this.role={},this.submitted=!1,this.productDialog=!0},hideDialog(){this.productDialog=!1,this.submitted=!1},saveProduct(){this.submitted=!0,this.roleService.saveRole(this.role),this.$toast.add({severity:"success",summary:"Successful",detail:"Product Created",life:3e3}),this.productDialog=!1,this.role={},this.$router.go(0)},editRole(t){this.role={...t},this.productDialog=!0},confirmDeleteProduct(t){this.role=t,this.deleteProductDialog=!0},deleteProduct(){this.roles=this.roles.filter(t=>t.id!==this.role.id),this.roleService.deleteRole(this.role),this.deleteProductDialog=!1,this.role={},this.$toast.add({severity:"success",summary:"Successful",detail:"Product Deleted",life:3e3})},findIndexById(t){let e=-1;for(let s=0;s<this.roles.length;s++)if(this.roles[s].id===t){e=s;break}return e},exportCSV(){this.$refs.dt.exportCSV()},confirmDeleteSelected(){this.deleteProductsDialog=!0},deleteSelectedProducts(){this.roles=this.roles.filter(t=>!this.selectedProducts.includes(t)),this.roleService.deleteRoleBatch(this.selectedProducts),this.deleteProductsDialog=!1,this.selectedProducts=null,this.$toast.add({severity:"success",summary:"Successful",detail:"Products Deleted",life:3e3})}}},c=r,d=(s("d6d3"),s("2877")),n=Object(d["a"])(c,o,l,!1,null,"06d572b2",null);e["default"]=n.exports},b800:function(t,e,s){},d6d3:function(t,e,s){"use strict";var o=s("b800"),l=s.n(o);l.a}}]);
//# sourceMappingURL=chunk-633b40ef.bb2a5548.js.map