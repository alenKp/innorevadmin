(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0deb870b"],{1316:function(t,e,r){t.exports=r("9cd3")},"2dc0":function(t,e,r){t.exports=r("588c")},"471b":function(t,e,r){"use strict";var i=r("194a"),a=r("4fff"),s=r("faaa"),o=r("2616"),n=r("6725"),c=r("6c15"),l=r("0b7b");t.exports=function(t){var e,r,u,d,p,f=a(t),m="function"==typeof this?this:Array,g=arguments.length,h=g>1?arguments[1]:void 0,b=void 0!==h,v=0,y=l(f);if(b&&(h=i(h,g>2?arguments[2]:void 0,2)),void 0==y||m==Array&&o(y))for(e=n(f.length),r=new m(e);e>v;v++)c(r,v,b?h(f[v],v):f[v]);else for(d=y.call(f),p=d.next,r=new m;!(u=p.call(d)).done;v++)c(r,v,b?s(d,h,[u.value,v],!0):u.value);return r.length=v,r}},"484e":function(t,e,r){var i=r("a5eb"),a=r("471b"),s=r("7de7"),o=!s((function(t){Array.from(t)}));i({target:"Array",stat:!0,forced:o},{from:a})},"49e2":function(t,e,r){},"588c":function(t,e,r){r("5145"),r("3e47b"),t.exports=r("59d7")},"59d7":function(t,e,r){var i=r("8f95"),a=r("0363"),s=r("7463"),o=a("iterator");t.exports=function(t){var e=Object(t);return void 0!==e[o]||"@@iterator"in e||s.hasOwnProperty(i(e))}},"5ab9":function(t,e,r){r("e519");var i=r("764b");t.exports=i.Array.isArray},6220:function(t,e,r){var i=r("fc48");t.exports=Array.isArray||function(t){return"Array"==i(t)}},"67bd":function(t,e,r){"use strict";r.r(e);var i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("el-container",{staticClass:"layout"},[r("el-header",{staticClass:"layout-title-box",attrs:{height:"50px"}},[r("div",{staticClass:"titles"},[t._v(t._s(t.route.meta.title))])]),r("el-header",{staticClass:"layout-title-box layout-title-filter",staticStyle:{"min-height":"42px",height:"auto"}},[r("div",{staticClass:"filter"},[r("div",{staticClass:"filter-item"},[r("label",[t._v("买家账号")]),r("el-input",{staticStyle:{width:"210px"},attrs:{clearable:"",placeholder:"请输入账号搜索"},model:{value:t.filter.account,callback:function(e){t.$set(t.filter,"account",e)},expression:"filter.account"}})],1),r("div",{staticClass:"filter-item"},[r("label",[t._v("订单号")]),r("el-input",{staticStyle:{width:"210px"},attrs:{clearable:"",placeholder:"请输入订单号搜索"},model:{value:t.filter.id,callback:function(e){t.$set(t.filter,"id",e)},expression:"filter.id"}})],1),r("div",{staticClass:"filter-item"},[r("label",[t._v("订单状态")]),r("el-select",{staticStyle:{width:"140px"},attrs:{placeholder:"请选择"},model:{value:t.filter.status,callback:function(e){t.$set(t.filter,"status",e)},expression:"filter.status"}},t._l(t.goodsStatusList,(function(t){return r("el-option",{key:t.id,attrs:{title:t.name,label:t.name,value:t.id}})})),1)],1),r("div",{staticClass:"filter-item"},[r("label",[t._v("订单时间")]),r("el-date-picker",{staticStyle:{width:"250px"},attrs:{type:"daterange","unlink-panels":"","picker-options":t.pickerOptions,"value-format":"timestamp","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期"},model:{value:t.filter.orderTime,callback:function(e){t.$set(t.filter,"orderTime",e)},expression:"filter.orderTime"}})],1),r("div",{staticClass:"filter-item btnItem"},[r("el-button",{attrs:{type:"primary"},on:{click:t.filterData}},[t._v("查询")])],1),r("div",{staticClass:"filter-item btnItem"},[r("el-button",{attrs:{type:"info"},on:{click:t.restFilter}},[t._v("重置")])],1),r("div",{staticClass:"filter-item btnItem"},[r("el-button",{attrs:{type:"info",icon:"el-icon-download"},on:{click:t.exportOrderData}},[t._v("导出")])],1)])]),t.tableData.length?r("el-main",{staticClass:"layout-content"},[t._l(t.tableData,(function(e){return r("el-card",{key:e.id,attrs:{shadow:"never","body-style":"border: 0;"}},[r("div",{staticClass:"order-title"},[r("div",{staticClass:"items"},[t._v("订单类型： "+t._s(e.orderTypeName))]),r("div",{staticClass:"items"},[t._v("订单编号： "+t._s(e.id))]),r("div",{staticClass:"items"},[t._v("订单时间： "+t._s(t.dataFormat(e.createTime)))]),r("div",{staticClass:"items"},[t._v("收货人： "+t._s(e.receverName))])]),r("el-table",{staticStyle:{width:"100%"},attrs:{border:"","min-height":"500",data:e.goodsList.list,"span-method":t.objectSpanMethod,size:"medium"}},[r("el-table-column",{attrs:{prop:"name","show-overflow-tooltip":"",label:"商品名称"}}),r("el-table-column",{attrs:{"show-overflow-tooltip":"",label:"单价(￥)"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(t.regFenToYuan(e.row.costPrice))+" ")]}}],null,!0)}),r("el-table-column",{attrs:{prop:"number","show-overflow-tooltip":"",label:"数量"}}),r("el-table-column",{attrs:{prop:"orderStatusName","show-overflow-tooltip":"",label:"订单状态"}}),r("el-table-column",{attrs:{prop:"afterSaleStatusName","show-overflow-tooltip":"",label:"售后状态"}}),r("el-table-column",{attrs:{prop:"userAccount","show-overflow-tooltip":"",label:"买家账号"}}),r("el-table-column",{attrs:{prop:"totalPrice","show-overflow-tooltip":"",label:"实收金额(￥)"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(t.regFenToYuan(e.row.totalPrice))+" ")]}}],null,!0)}),r("el-table-column",{attrs:{label:"操作"},scopedSlots:t._u([{key:"default",fn:function(i){return[r("el-button",{attrs:{type:"text"},on:{click:function(r){return t.openLogisticsSet(e)}}},[t._v("编辑")]),7!==i.row.orderStatus?r("el-button",{attrs:{type:"text"},on:{click:function(r){return t.closeOrder(e)}}},[t._v("关闭")]):t._e(),r("el-button",{attrs:{type:"text"},on:{click:function(r){return t.showDetail(e)}}},[t._v("查看详情")])]}}],null,!0)})],1)],1)})),r("div",{staticClass:"content-pagination"},[r("el-pagination",{attrs:{background:"","current-page":t.page.currentPage,"page-sizes":t.pageSizes,"page-size":t.page.pageSize,layout:"total, sizes, prev, pager, next, jumper",total:t.page.total},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],1)],2):r("el-main",{staticClass:"layout-content empty"},[r("div",{staticClass:"empty"},[t._v(" 暂无订单记录 ")])]),r("el-dialog",{staticClass:"add-good-dialog",attrs:{title:"关闭订单",width:"600px ","destroy-on-close":"","close-on-click-modal":!1,visible:t.closeOrderVis},on:{"update:visible":function(e){t.closeOrderVis=e},close:t.closeFormSetData}},[r("el-form",{ref:"closeFormRule",attrs:{model:t.closeForm,"label-width":"100px",rules:t.closeFormRule}},[r("el-form-item",{attrs:{label:"关闭原因：",prop:"reason"}},[r("el-select",{attrs:{placeholder:"请选择关闭原因"},model:{value:t.closeForm.reason,callback:function(e){t.$set(t.closeForm,"reason",e)},expression:"closeForm.reason"}},t._l(t.closeOrderList,(function(t){return r("el-option",{key:t.id,attrs:{label:t.name,value:t.name}})})),1)],1),r("el-form-item",{attrs:{label:" 备注信息："}},[r("el-input",{staticStyle:{width:"400px"},attrs:{rows:"3",type:"textarea",maxlength:"200","show-word-limit":"",autocomplete:"off"},model:{value:t.closeForm.remark,callback:function(e){t.$set(t.closeForm,"remark",e)},expression:"closeForm.remark"}})],1)],1),r("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:function(e){t.closeOrderVis=!1}}},[t._v("取 消")]),r("el-button",{attrs:{type:"primary"},on:{click:t.setFormSetData}},[t._v("确 定")])],1)],1),r("el-dialog",{staticClass:"add-good-dialog",attrs:{title:"编辑物流信息",width:"600px ","destroy-on-close":"","close-on-click-modal":!1,visible:t.editLogistics},on:{close:t.closeLogistics,"update:visible":function(e){t.editLogistics=e}}},[r("el-form",{ref:"logisticsRule",attrs:{model:t.logisticsForm,"label-width":"100px",rules:t.logisticsRule}},[r("el-form-item",{attrs:{label:"快递公司：",prop:"company"}},[r("el-select",{attrs:{placeholder:"请选择快递公司"},model:{value:t.logisticsForm.company,callback:function(e){t.$set(t.logisticsForm,"company",e)},expression:"logisticsForm.company"}},t._l(t.exprressList,(function(t){return r("el-option",{key:t.id,attrs:{label:t.name,value:t.id}})})),1)],1),r("el-form-item",{attrs:{label:"物流单号：",prop:"trackingNumber"}},[r("el-input",{staticStyle:{width:"400px"},model:{value:t.logisticsForm.trackingNumber,callback:function(e){t.$set(t.logisticsForm,"trackingNumber",t._n(e))},expression:"logisticsForm.trackingNumber"}})],1),r("el-alert",{attrs:{title:"请确认修改的快递公司和快递单号正确后，再点击确认按钮",type:"warning","show-icon":""}})],1),r("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:function(e){t.editLogistics=!1}}},[t._v("取 消")]),r("el-button",{attrs:{loading:t.isLogistics,type:"primary"},on:{click:t.setLogisticsSetData}},[t._v("确 定")])],1)],1)],1)},a=[],s=(r("a4d3"),r("99af"),r("4de4"),r("4160"),r("0d03"),r("b0c0"),r("e439"),r("dbb4"),r("b64b"),r("d3b7"),r("e25e"),r("25f0"),r("3ca3"),r("159b"),r("ddb0"),r("2b3d"),r("96cf"),r("89ba")),o=r("1316"),n=r.n(o);function c(t){if(n()(t)){for(var e=0,r=new Array(t.length);e<t.length;e++)r[e]=t[e];return r}}var l=r("a06f"),u=r.n(l),d=r("2dc0"),p=r.n(d);function f(t){if(p()(Object(t))||"[object Arguments]"===Object.prototype.toString.call(t))return u()(t)}function m(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function g(t){return c(t)||f(t)||m()}var h=r("2fa7"),b=r("3828"),v=r("d1a0"),y=r.n(v),w=r("4279"),k=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(w["a"])("/api/mall/manager/order/list",{page:t.page,pageSize:t.pageSize,account:t.account,id:t.id,status:t.status,begin:t.begin,end:t.end},"POST")},x=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(w["a"])("/api/mall/manager/exprress/edit/trackingNumber",{orderId:t.orderId,trackingNumber:t.trackingNumber,companyId:t.companyId},"POST")},O=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(w["a"])("/api/mall/manager/goods/order/updateStatus",{id:t.id,reason:t.reason,status:t.status,remark:t.remark},"POST")},S=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(w["a"])("/api/mall/manager/export/order/list",{page:t.page,pageSize:t.pageSize,account:t.account,id:t.id,status:t.status,begin:t.begin,end:t.end},"POST",{responseType:"blob"})},F=r("2f62");function _(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,i)}return r}function L(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?_(r,!0).forEach((function(e){Object(h["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):_(r).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var j={name:"index",data:function(){return{isLogistics:!1,closeFormRule:{reason:[{required:!0,message:"请选择关闭原因",trigger:"change"}]},logisticsRule:{company:[{required:!0,message:"请选择快递公司",trigger:"change"}],trackingNumber:[{required:!0,message:"请输入快递单号",trigger:"blur"}]},closeForm:{reason:"",remark:""},logisticsForm:{company:"",trackingNumber:""},closeOrderList:JSON.parse('[{"name":"上架主动关闭订单","id":0},{"name":"买家拒签，上架发起退款","id":1},{"name":"用户联系上架关闭订单，商家发起退款","id":2}]'),closeOrderVis:!1,editLogistics:!1,pickerOptions:{shortcuts:[{text:"最近一周",onClick:function(t){var e=new Date,r=new Date;r.setTime(r.getTime()-6048e5),t.$emit("pick",[r,e])}},{text:"最近一个月",onClick:function(t){var e=new Date,r=new Date;r.setTime(r.getTime()-2592e6),t.$emit("pick",[r,e])}}]},pageSizes:JSON.parse("[10, 20, 50, 100]"),noImg:y.a,isLoading:!1,tableData:[],filter:{account:"",id:"",status:0,orderTime:[],begin:"",end:""},page:{currentPage:1,pageSize:10,total:0}}},computed:L({},Object(F["c"])(["exprressList"]),{goodsStatusList:function(){var t=[{id:0,name:"全部"}],e=JSON.parse('[{"name":"待付款","id":1},{"name":"待发货","id":2},{"name":"待收货","id":3},{"name":"待评价","id":4},{"name":"订单已完成","id":5},{"name":"订单已取消","id":6},{"name":"订单已关闭","id":7}]');return[].concat(t,g(e))},route:function(){return this.$route},statusList:function(){var t=[];return this.tableData.length&&this.tableData.forEach((function(e){0===t.filter((function(t){return t.text===e.statusName})).length&&t.push({text:e.statusName,value:e.statusName})})),t},setFontColor:function(){return function(t){switch(t){case"交易完成":return"#26AF61";case"草稿":return"#999";case"订单取消":return"#ff7736";default:return"#333"}}}}),methods:{showDetail:function(t){this.$router.push({name:"orderDetail",query:{title_:this.route.meta.title,path_:this.route.path,id:t.id}})},setLogisticsSetData:function(){var t=this;this.$refs["logisticsRule"].validate(function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(r){var i,a,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!r){e.next=13;break}return t.isLogistics=!0,e.next=4,x({orderId:t.logisticsForm.id,trackingNumber:t.logisticsForm.trackingNumber.toString(),companyId:t.logisticsForm.company});case 4:if(i=e.sent,a=i.code,s=i.msg,t.isLogistics=!1,a===b["a"].success){e.next=11;break}return Object(b["c"])(t,s),e.abrupt("return");case 11:Object(b["g"])(t,"编辑成功"),t.editLogistics=!1;case 13:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},openLogisticsSet:function(t){this.$set(this.logisticsForm,"id",t.id),this.editLogistics=!0},closeLogistics:function(){this.$set(this.logisticsForm,"id",void 0),this.$set(this.logisticsForm,"trackingNumber",""),this.$set(this.logisticsForm,"company",""),this.editLogistics=!1},setFormSetData:function(){var t=this;this.$refs["closeFormRule"].validate(function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(r){var i,a,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!r){e.next=12;break}return e.next=3,O({id:t.closeForm.id,reason:t.closeForm.reason,remark:t.closeForm.remark});case 3:if(i=e.sent,a=i.code,s=i.msg,a===b["a"].success){e.next=9;break}return Object(b["c"])(t,s),e.abrupt("return");case 9:Object(b["g"])(t,"操作成功"),t.getOrderList(),t.closeOrderVis=!1;case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},closeFormSetData:function(){this.$set(this.closeForm,"id",void 0),this.$set(this.closeForm,"reason",""),this.$set(this.closeForm,"remark","")},closeOrder:function(t){this.$set(this.closeForm,"id",t.id),this.closeOrderVis=!0},dataFormat:b["b"],regFenToYuan:b["e"],statusName:function(t){var e="-";return t&&this.goodsStatusList.forEach((function(r){r.id===t&&(e=r.name)})),e},objectSpanMethod:function(t){var e=t.row,r=(t.column,t.rowIndex),i=t.columnIndex;if(7===i||6===i||5===i)return r%e.goodsCount===0?{rowspan:e.goodsCount,colspan:1}:{rowspan:0,colspan:0}},downFile:function(t,e){if(window.navigator.msSaveOrOpenBlob)navigator.msSaveBlob(t,e);else{var r=document.createElement("a");r.href=window.URL.createObjectURL(t),r.download=e,r.click(),window.URL.revokeObjectURL(r.href)}},exportOrderData:function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(){var e,r,i,a,s,o,n=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e={page:this.page.currentPage,pageSize:10,account:this.filter.account||void 0,id:this.filter.id||void 0,status:this.filter.status,begin:this.filter.orderTime&&this.filter.orderTime[0]?parseInt(this.filter.orderTime[0]/1e3):void 0,end:this.filter.orderTime&&this.filter.orderTime[1]?parseInt(this.filter.orderTime[1]/1e3):void 0},t.next=3,S(e);case 3:if(r=t.sent,"application/octet-stream"===r.type){t.next=9;break}return i=new FileReader,i.onload=function(){var t=JSON.parse(i.result);Object(b["c"])(n,t.msg)},i.readAsText(r),t.abrupt("return");case 9:a=(new Date).getTime()+".xlsx",s=new Blob([r],{type:"application/octet-stream"}),o="商品订单列表_".concat(a),this.downFile(s,o),Object(b["g"])(this,"导出excel成功: 【".concat(o,"】"));case 13:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),getOrderList:function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(){var e,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(this.isLoading=!0,this.filter){t.next=3;break}return t.abrupt("return");case 3:return e={page:this.page.currentPage,pageSize:this.page.pageSize,account:this.filter.account||void 0,id:this.filter.id||void 0,status:this.filter.status,begin:this.filter.orderTime&&this.filter.orderTime[0]?parseInt(this.filter.orderTime[0]/1e3):void 0,end:this.filter.orderTime&&this.filter.orderTime[1]?parseInt(this.filter.orderTime[1]/1e3):void 0},t.next=6,k(e);case 6:if(r=t.sent,this.isLoading=!1,r.code===b["a"].success){t.next=11;break}return Object(b["c"])(this,r.msg),t.abrupt("return");case 11:this.tableData=Object(b["d"])(r.result.list),this.page.total=r.result.count,this.tableData.forEach((function(t){t.price=parseInt(t.price),t.createTime=parseInt(t.createTime),t.goodsList.list.forEach((function(e){e.afterSaleStatusName=t.afterSaleStatusName||"-",e.userAccount=t.userAccount,e.goodsCount=t.goodsList.list.length,e.orderStatusName=t.statusName,e.orderStatus=t.status}))}));case 14:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),filterData:function(){this.page.pageSize=10,this.page.currentPage=1,this.getOrderList()},restFilter:function(){this.filter={id:"",account:"",orderTime:[],status:0},this.page.pageSize=10,this.page.currentPage=1,this.getOrderList()},handleSizeChange:function(t){this.page.currentPage=1,this.page.pageSize=t,this.getOrderList()},handleCurrentChange:function(t){this.page.currentPage=t,this.getOrderList()}},created:function(){this.getOrderList()}},C=j,T=(r("c2fc"),r("a841"),r("2877")),D=Object(T["a"])(C,i,a,!1,null,"9f189fe8",null);e["default"]=D.exports},"6c15":function(t,e,r){"use strict";var i=r("7168"),a=r("4180"),s=r("2c6c");t.exports=function(t,e,r){var o=i(e);o in t?a.f(t,o,s(0,r)):t[o]=r}},"74e7":function(t,e,r){t.exports=r("bc59")},"9cd3":function(t,e,r){t.exports=r("5ab9")},a06f:function(t,e,r){t.exports=r("74e7")},a841:function(t,e,r){"use strict";var i=r("49e2"),a=r.n(i);a.a},bc59:function(t,e,r){r("3e47b"),r("484e");var i=r("764b");t.exports=i.Array.from},c2fc:function(t,e,r){"use strict";var i=r("ff77"),a=r.n(i);a.a},e519:function(t,e,r){var i=r("a5eb"),a=r("6220");i({target:"Array",stat:!0},{isArray:a})},ff77:function(t,e,r){}}]);
//# sourceMappingURL=chunk-0deb870b.production.1582706353542.js.map