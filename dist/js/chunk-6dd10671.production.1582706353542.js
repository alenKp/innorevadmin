(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6dd10671"],{4097:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-container",{staticClass:"layout"},[a("el-header",{staticClass:"layout-title-box",attrs:{height:"50px"}},[a("div",{staticClass:"titles"},[t._v(t._s(t.route.meta.title))])]),a("el-header",{staticClass:"layout-title-box layout-title-filter",staticStyle:{"min-height":"42px",height:"auto"}},[a("div",{staticClass:"filter"},[a("div",{staticClass:"filter-item"},[a("label",[t._v("关键字")]),a("el-input",{staticStyle:{width:"210px"},attrs:{clearable:"",placeholder:"请输入标题或创建人搜索"},model:{value:t.filter.keyword,callback:function(e){t.$set(t.filter,"keyword",e)},expression:"filter.keyword"}})],1),a("div",{staticClass:"filter-item"},[a("label",[t._v("内容分类")]),a("el-select",{staticStyle:{width:"150px"},attrs:{placeholder:"请选择"},model:{value:t.filter.type,callback:function(e){t.$set(t.filter,"type",e)},expression:"filter.type"}},t._l(t.contentTypeList,(function(t){return a("el-option",{key:t.id,attrs:{title:t.name,label:t.name,value:t.id}})})),1)],1),a("div",{staticClass:"filter-item"},[a("label",[t._v("状态")]),a("el-select",{staticStyle:{width:"150px"},attrs:{placeholder:"请选择"},model:{value:t.filter.status,callback:function(e){t.$set(t.filter,"status",e)},expression:"filter.status"}},t._l(t.statusList,(function(t){return a("el-option",{key:t.id,attrs:{title:t.name,label:t.name,value:t.id}})})),1)],1),a("div",{staticClass:"filter-item btnItem"},[a("el-button",{attrs:{type:"primary"},on:{click:t.filterData}},[t._v("查询")])],1),a("div",{staticClass:"filter-item btnItem"},[a("el-button",{attrs:{type:"info"},on:{click:t.restFilter}},[t._v("重置")])],1)]),a("div",{staticClass:"operation"},[a("el-button",{attrs:{size:"medium",type:"primary",icon:"el-icon-refresh"},on:{click:t.getGoodsList}},[t._v(" 刷新表格 ")]),a("el-button",{attrs:{size:"medium",type:"primary",icon:"el-icon-plus"},on:{click:t.createArticle}},[t._v(" 新增内容 ")])],1)]),a("el-main",{staticClass:"layout-content"},[a("el-card",{attrs:{shadow:"never","body-style":"border: 0;"}},[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.isLoading,expression:"isLoading"}],staticStyle:{width:"100%"},attrs:{"min-height":"500","header-row-class-name":"goodsTable",data:t.tableData,size:"medium"}},[a("el-table-column",{attrs:{prop:"title",label:"标题"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("div",{staticClass:"tooltip",attrs:{title:e.row.title}},[t._v(" "+t._s(e.row.title)+" ")])]}}])}),a("el-table-column",{attrs:{align:"center",prop:"typeName",label:"分类"}}),a("el-table-column",{attrs:{align:"center",label:"描述"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("div",{staticClass:"goods-group-box",attrs:{title:e.row.describe}},[t._v(" "+t._s(e.row.describe)+" ")])]}}])}),a("el-table-column",{attrs:{prop:"date",align:"center",label:"封面图"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[a("el-image",{staticStyle:{width:"40px",height:"40px","vertical-align":"middle"},attrs:{src:e.row.cover,title:"点击预览",fit:"cover","preview-src-list":[e.row.cover]}},[a("div",{staticClass:"image-slot",attrs:{slot:"error",title:"暂无内容主图"},slot:"error"},[a("img",{attrs:{src:t.noImg,width:"40"}})]),a("div",{staticClass:"image-slot",attrs:{slot:"placeholder"},slot:"placeholder"},[a("font",{attrs:{size:"1"}},[t._v("load")]),a("span",{staticClass:"el-icon-loading"})],1)])],1)]}}])}),a("el-table-column",{attrs:{"column-key":"createTime",align:"center",label:"创建时间"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(t.setPulishTime(e.row.createTime))+" ")]}}])}),a("el-table-column",{attrs:{align:"center",label:"状态"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",{style:{color:t.setFontColor(e.row.statusName)}},[t._v(t._s(e.row.statusName))])]}}])}),a("el-table-column",{attrs:{prop:"address",label:"操作",width:"100"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{type:"text"},on:{click:function(a){return t.edit(e.row)}}},[t._v("编辑")]),1===e.row.status?a("el-button",{attrs:{type:"text"},on:{click:function(a){return t.setStatus(e.row,"下架")}}},[t._v("下架")]):a("el-button",{attrs:{type:"text"},on:{click:function(a){return t.setStatus(e.row,"上架")}}},[t._v("上架")])]}}])})],1)],1),a("div",{staticClass:"content-pagination"},[a("el-pagination",{attrs:{background:"","current-page":t.page.currentPage,"page-sizes":t.pageSizes,"page-size":t.page.pageSize,layout:"total, sizes, prev, pager, next, jumper",total:t.page.total},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],1)],1)],1)},n=[],r=(a("99af"),a("4de4"),a("e25e"),a("96cf"),a("89ba")),s=a("3828"),A=a("d1a0"),l=a.n(A),o=a("b8ea"),c={name:"index",data:function(){return{pageSizes:JSON.parse("[10, 20, 50, 100]"),noImg:l.a,isLoading:!1,tableData:[],filter:{keyword:"",status:0,type:0},page:{currentPage:1,pageSize:10,total:0},statusList:[{name:"全部",id:0},{name:"上架",id:1},{name:"下架",id:2}],contentTypeList:o["a"]}},computed:{route:function(){return this.$route},setFontColor:function(){return function(t){switch(t){case"已上架":return"#26AF61";case"已下架":return"#999";default:return"#333"}}}},methods:{filterData:function(){this.page.currentPage=1,this.page.pageSize=10,this.getGoodsList()},setShowPrice:function(t){return Object(s["e"])(t)},setPulishTime:function(t){return t&&parseInt(t)?Object(s["b"])(t):"-"},restFilter:function(){this.filter.keyword="",this.filter.type=0,this.page.currentPage=1,this.page.pageSize=10,this.getGoodsList()},getGoodsList:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(){var e,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.isLoading=!0,e={keyword:this.filter.keyword?this.filter.keyword:void 0,status:0!==this.filter.status?this.filter.status:void 0,type:0!==this.filter.type?this.filter.type:void 0,page:this.page.currentPage,pageSize:this.page.pageSize},t.next=4,Object(o["b"])(e);case 4:if(a=t.sent,this.isLoading=!1,a.code===s["a"].success){t.next=9;break}return Object(s["c"])(this,a.msg),t.abrupt("return");case 9:this.tableData=Object(s["d"])(a.result.list),this.page.total=a.result.count;case 11:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),handleCurrentChange:function(t){this.page.currentPage=t,this.getGoodsList()},handleSizeChange:function(t){this.page.currentPage=1,this.page.pageSize=t,this.getGoodsList()},createArticle:function(){this.$router.push({path:"/ArticleManage/CreateArticle",query:{title_:this.route.meta.title,path_:this.route.path}})},edit:function(t){this.$router.push({name:"CreateArticle",query:{title_:this.route.meta.title,path_:this.route.path,contentId:t.id}})},setStatus:function(t,e){var a=this;this.$confirm("确定要".concat(e,"内容【").concat(t.title,"】？"),"提示",{confirmButtonText:"确定",cancelButtonText:"取消"}).then((function(){a.isLoading=!0,a.interceptorFn(Object(r["a"])(regeneratorRuntime.mark((function i(){var n;return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:return i.next=2,Object(o["c"])({id:parseInt(t.id),status:"下架"===e?2:1});case 2:if(n=i.sent,a.isLoading=!1,n.code===s["a"].success){i.next=7;break}return Object(s["c"])(a,n.msg),i.abrupt("return");case 7:Object(s["g"])(a,"操作成功"),a.getGoodsList();case 9:case"end":return i.stop()}}),i)}))))})).catch((function(){}))}},created:function(){this.getGoodsList()}},u=c,d=(a("6aa8"),a("2877")),p=Object(d["a"])(u,i,n,!1,null,"c45b31bc",null);e["default"]=p.exports},"4de4":function(t,e,a){"use strict";var i=a("23e7"),n=a("b727").filter,r=a("1dde");i({target:"Array",proto:!0,forced:!r("filter")},{filter:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}})},"6aa8":function(t,e,a){"use strict";var i=a("cdd9"),n=a.n(i);n.a},b8ea:function(t,e,a){"use strict";a.d(e,"b",(function(){return n})),a.d(e,"a",(function(){return r})),a.d(e,"c",(function(){return s}));var i=a("4279"),n=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(i["a"])("/api/mall/manager/goods/content/list",{page:t.page,pageSize:t.pageSize,keyword:t.keyword,status:t.status,type:t.id},"POST")},r=[{name:"所有",id:0},{name:"公司新闻",id:1},{name:"行业新闻",id:2},{name:"产品评测",id:3},{name:"术语解释",id:4}],s=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(i["a"])("/api/mall/manager/content/updateStatus",{id:t.id,status:t.status},"POST")}},cdd9:function(t,e,a){},d1a0:function(t,e){t.exports="data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAABkAAD/4QMvaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzE0NSA3OS4xNjM0OTksIDIwMTgvMDgvMTMtMTY6NDA6MjIgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo4RjM0QTRBNDBGNkIxMUVBQTMwNEY5ODFCMTE5RjBFQyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo4RjM0QTRBNTBGNkIxMUVBQTMwNEY5ODFCMTE5RjBFQyI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjhGMzRBNEEyMEY2QjExRUFBMzA0Rjk4MUIxMTlGMEVDIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjhGMzRBNEEzMEY2QjExRUFBMzA0Rjk4MUIxMTlGMEVDIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+/+4AJkFkb2JlAGTAAAAAAQMAFQQDBgoNAAAFVAAABcIAAAZYAAAHEP/bAIQAAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQICAgICAgICAgICAwMDAwMDAwMDAwEBAQEBAQECAQECAgIBAgIDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMD/8IAEQgAJAAkAwERAAIRAQMRAf/EALUAAAEFAQEAAAAAAAAAAAAAAAEDBAUGBwIJAQEBAQAAAAAAAAAAAAAAAAAAAQIQAAEDAwMFAAAAAAAAAAAAAAEAAwQQEQJAEhMhMRQFFREAAQEGAQcNAAAAAAAAAAAAAQIAEBESAzMhUWFx0TLSEzFBsSJCUmKSoiODk8MSAQAAAAAAAAAAAAAAAAAAAEATAQABAwMDAwQDAAAAAAAAAAERACExEFFhMEFxIKHB8JGx4UCB8f/aAAwDAQACEQMRAAAB91yPAjxXA1MkZJfFn1BnDMiq5b16M5Z5LGtoVUbAFRc//9oACAEBAAEFAiVzsrmZQNleh74nblBkF4Ui4u5PfPIjeqoRZGDKv4EpQGHWVt6GuNqf/9oACAECAAEFAtT/AP/aAAgBAwABBQLU/wD/2gAIAQICBj8CT//aAAgBAwIGPwJP/9oACAEBAQY/Amu0/sTra7T86dbouOlgrIQWWCLcsMY7U3RK88KAMFRUREBJZSjeHWh4R2dJGLV/i/R59rn79Pea166e+1XiJlmkhik8k8dknK2dsX53f//aAAgBAQMBPyGOxn8UyMz95loMgOtgHV4ovhtUI2ae4fmrZTaMTDMTUDwumSMGC1E2jtoPOElzwZEbrYpy1olkJZss/cINUmcdqsyRK/NzpW++974gxr5H6qEbKY7Y0/0fGn//2gAIAQIDAT8h/k//2gAIAQMDAT8h6B6Tqf/aAAwDAQACEQMRAAAQgskWwD2Eb0gAH//aAAgBAQMBPxD3+fpmiAcqAARhEZiNJmgQgYADVWkMz3L42a7thPPjzSqq5WWvru6uSlWCwGJjMNLliJBzLxjLDGAqWXKY5xoRdgwRRRUAXV2mhyVFhbnJXMiWAd50FE3XXx5KcwIoBEVCAoJuDoxm1QMzOWcO5E1K/wDo4+Ue9XdnlvxzVxv2Tn20uk+Fkftp/9oACAECAwE/EOg+l6n/2gAIAQMDAT8QqSpOiJ7VFufQhqGgj1//2Q=="}}]);
//# sourceMappingURL=chunk-6dd10671.production.1582706353542.js.map