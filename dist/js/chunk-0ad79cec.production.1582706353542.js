(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0ad79cec"],{"0c4e":function(t,e,r){},1621:function(t,e,r){"use strict";r.r(e);var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("el-container",{staticClass:"layout"},[r("el-header",{staticClass:"goods-created-layout",attrs:{height:"31px"}},[t.routeData.query.path_?r("el-breadcrumb",[r("el-breadcrumb-item",{attrs:{to:{path:t.routeData.query.path_}}},[t._v(" "+t._s(t.routeData.query.title_)+" ")]),r("el-breadcrumb-item",[t._v(t._s(t.routeData.meta.title))])],1):t._e()],1),r("el-main",[r("el-form",{directives:[{name:"loading",rawName:"v-loading",value:t.isLoading,expression:"isLoading"}],ref:"goodsForm",staticClass:"from-layout",attrs:{rules:t.rules,size:"medium","label-position":"left",model:t.form}},[r("el-card",{staticClass:"box-card",attrs:{shadow:"never","body-style":"border: 0;"}},[r("div",{staticClass:"from-layout-title",attrs:{slot:"header"},slot:"header"},[r("div",[t._v("基本信息")]),r("el-button",{attrs:{type:"text",size:"mini"},on:{click:function(e){t.show1=!t.show1}}},[t._v(" "+t._s(t.show1?"收起":"展开")+" "),r("i",{class:[t.show1?"el-icon-arrow-up":"el-icon-arrow-down"],staticStyle:{"font-weight":"bolder"}})])],1),r("el-collapse-transition",[r("el-main",{directives:[{name:"show",rawName:"v-show",value:t.show1,expression:"show1"}],staticClass:"card-content"},[r("el-form-item",{attrs:{label:"内容分类",prop:"type"}},[r("el-select",{attrs:{filterable:"",placeholder:"请选择内容分类"},model:{value:t.form.type,callback:function(e){t.$set(t.form,"type",e)},expression:"form.type"}},t._l(t.contentTypeList,(function(t){return r("el-option",{key:t.id,staticStyle:{width:"217px"},attrs:{label:t.name,title:t.name,value:t.id}})})),1)],1),r("el-form-item",{attrs:{label:"内容标题",prop:"title"}},[r("el-input",{staticStyle:{width:"350px"},attrs:{clearable:"",placeholder:"请输入内容标题"},model:{value:t.form.title,callback:function(e){t.$set(t.form,"title",e)},expression:"form.title"}})],1),r("el-form-item",{attrs:{label:"内容描述",prop:"describe"}},[r("el-input",{staticStyle:{width:"750px"},attrs:{type:"textarea",maxlength:"200","show-word-limit":"",clearable:"",placeholder:"请输入内容描述"},model:{value:t.form.describe,callback:function(e){t.$set(t.form,"describe",e)},expression:"form.describe"}})],1),r("el-form-item",[r("template",{slot:"label"},[r("font",{attrs:{color:"#F56C6C"}},[t._v("*")]),t._v(" 视频封面 ")],1),r("image-upload",{attrs:{image:t.form.cover,size:{width:430,height:240}},on:{"update:image":function(e){return t.$set(t.form,"cover",e)}}})],2),r("el-form-item",{attrs:{prop:"video"}},[r("template",{slot:"label"},[r("font",{attrs:{color:"#F56C6C"}},[t._v("*")]),t._v(" 商品视频 ")],1),r("video-upload",{attrs:{video:t.form.video},on:{"update:video":function(e){return t.$set(t.form,"video",e)}}})],2)],1)],1)],1),r("el-card",{staticClass:"box-card",attrs:{shadow:"never","body-style":"border: 0;"}},[r("div",{staticClass:"from-layout-title",attrs:{slot:"header"},slot:"header"},[r("div",[t._v("内容详情")]),r("el-button",{attrs:{type:"text",size:"mini"},on:{click:function(e){t.show3=!t.show3}}},[t._v(" "+t._s(t.show3?"收起":"展开")+" "),r("i",{class:[t.show3?"el-icon-arrow-up":"el-icon-arrow-down"],staticStyle:{"font-weight":"bolder"}})])],1),r("el-collapse-transition",[r("el-main",{directives:[{name:"show",rawName:"v-show",value:t.show3,expression:"show3"}],staticClass:"card-content"},[r("div",{staticClass:"form-titles"},[r("font",{attrs:{color:"#F56C6C"}},[t._v("*")]),t._v(" 内容正文 ")],1),r("editor",{attrs:{content:t.form.details,layout:t.editLayout},on:{"update:content":function(e){return t.$set(t.form,"details",e)}}})],1)],1)],1),r("el-form-item",{staticClass:"from-operation"},[r("el-button",{attrs:{type:"primary",disabled:t.isRelease,loading:t.isRelease},on:{click:function(e){return t.save("goodsForm")}}},[t._v("保存")])],1)],1)],1),r("el-dialog",{staticClass:"goodsInfoView-box",attrs:{title:"内容详情预览",fullscreen:"",visible:t.dialogVisible,width:"50%"},on:{"update:visible":function(e){t.dialogVisible=e}}},[r("div",{staticClass:"goodsInfoView-content",domProps:{innerHTML:t._s(t.form.goodsInfo)}})])],1)},i=[],o=(r("a4d3"),r("4de4"),r("4160"),r("e439"),r("dbb4"),r("b64b"),r("ac1f"),r("5319"),r("498a"),r("159b"),r("96cf"),r("89ba")),s=r("2fa7"),n=r("2f62"),c=r("3828"),l=(r("b0c0"),r("4279")),u=function(t){return Object(l["a"])("/api/mall/manager/content/info/put",t,"POST")},d=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(l["a"])("/api/mall/manager/content/info/get",{id:t.id},"POST")},p=r("5488"),f=r.n(p),m=r("156b"),b=r("b8ea"),h=r("f828"),v=r("9b97");function g(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function w(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?g(r,!0).forEach((function(e){Object(s["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):g(r).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var y={name:"CreateGoods",data:function(){return{contentTypeList:b["a"],show1:!0,show2:!0,show3:!0,progress:{count:0,status:""},form:{type:"",describe:"",title:"",cover:"",tags:[],video:"",details:""},loading:!1,faceList:[],editorContent:"",FILE_TYPE_AVATAR:"1",SUCC_CODE:"0",ERR_TOKEN_CODE:"4",rules:{title:[{required:!0,message:"请输入内容名称",trigger:["change"]},{min:2,max:50,message:"长度在 2 到 50 个字符",trigger:"change"}],describe:[{required:!0,message:"请输入内容描述",trigger:["change"]}],type:[{required:!0,message:"请选择内容分类",trigger:"change"}]},isDraft:!1,isRelease:!1,goodsInfoOrigin:{},tagsList:[],dialogVisible:!1,isLoading:!1,editLayout:{width:"100%",height:"400px"}}},components:{CollapseTransition:f.a,editor:m["a"],imageUpload:h["a"],videoUpload:v["a"]},created:function(){this.getContentInfoData()},computed:w({},Object(n["c"])(["user","aliyunOss"]),{isEdit:function(){return Boolean(this.routeData.query.goodsId)},routeData:function(){return this.$route}}),methods:{getContentInfoData:function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(){var e,r,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e=this.routeData.query,e.contentId){t.next=3;break}return t.abrupt("return");case 3:return this.isLoading=!0,t.next=6,d({id:e.contentId});case 6:if(r=t.sent,r.code===c["a"].success){t.next=10;break}return Object(c["c"])(this,r.msg),t.abrupt("return");case 10:this.goodsInfoOrigin=Object(c["d"])(r.result.content),a=r.result.content,this.form={type:a.type,describe:a.describe,title:a.title,video:a.video,cover:a.cover},this.$set(this.form,"details",a.details),this.$set(this.form,"status",a.status),this.$set(this.form,"id",this.routeData.query.contentId),this.isLoading=!1;case 17:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),save:function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(e){var r,a=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:r=Object(c["d"])(this.form),this.$refs[e].validate(function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(e){var i,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e){t.next=2;break}return t.abrupt("return",!1);case 2:if(a.form.cover){t.next=5;break}return Object(c["j"])(a,"请上传内容主图"),t.abrupt("return",!1);case 5:if(r.details.trim()){t.next=8;break}return Object(c["j"])(a,"请填写内容详情"),t.abrupt("return",!1);case 8:return i={content:{id:r.id||void 0,title:r.title,cover:r.cover,details:r.details,status:r.status,type:r.type,video:r.video,describe:r.describe}},t.next=11,u(i);case 11:if(o=t.sent,setTimeout((function(){a.isDraft=!1,a.isRelease=!1}),500),o.code===c["a"].success){t.next=16;break}return Object(c["c"])(a,o.msg),t.abrupt("return");case 16:return Object(c["g"])(a,"".concat(r.id?"编辑成功":"创建成功")),t.next=19,a.$router.replace(a.routeData.query.path_);case 19:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}());case 2:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}()}},O=y,j=O,x=(r("bcbd"),r("6578"),r("2877")),C=Object(x["a"])(j,a,i,!1,null,"659010c3",null);e["default"]=C.exports},6578:function(t,e,r){"use strict";var a=r("0c4e"),i=r.n(a);i.a},"682a":function(t,e,r){},"98fc":function(t,e,r){},"9b97":function(t,e,r){"use strict";var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"videoUpload"},[r("el-upload",{staticClass:"avatar-uploader",attrs:{action:"","auto-upload":!1,accept:".mp4,.mkv,.avi","on-change":t.videoSelect,"show-file-list":!1}},[r("div",{staticClass:"el-upload--picture-card",attrs:{title:"点击上传视频"}},[t.videoUrl?r("video",{ref:"video",attrs:{width:"100%",height:"224px",controls:"controls"}},[r("source",{attrs:{src:t.videoUrl,type:"video/mp4"}})]):t.isUpload?t._e():r("div",{staticClass:"upload-tip"},[r("i",{staticClass:"el-icon-plus avatar-uploader-icon"})]),t.isUpload?r("div",{staticClass:"upload-tip progress"},[r("el-progress",{attrs:{color:t.customColor,"text-inside":!0,"stroke-width":13,status:t.exception,percentage:t.progress}}),r("i",{staticClass:"el-icon-error",staticStyle:{"font-size":"16px",color:"#ff7736"},attrs:{title:"取消上传"},on:{click:function(e){return e.stopPropagation(),t.cancelUpload(e)}}})],1):t._e()])]),r("div",{staticClass:"tip-text"},[t._v(" 仅限上传不超过50M的视频文件 ")])],1)},i=[],o=(r("a4d3"),r("4de4"),r("4160"),r("b0c0"),r("e439"),r("dbb4"),r("b64b"),r("e25e"),r("159b"),r("96cf"),r("89ba")),s=r("2fa7"),n=r("3828"),c=r("989c"),l=r("2f62");function u(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function d(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?u(r,!0).forEach((function(e){Object(s["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):u(r).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var p={name:"videoUpload",data:function(){return{client:null,progress:0,customColor:"26AF61",isUpload:!1,videoUrl:"",exception:"success"}},props:{video:{type:String,default:""}},watch:{video:{handler:function(t){this.videoUrl=t},immediate:!0}},computed:d({},Object(l["c"])(["user","aliyunOss"])),methods:{cancelUpload:function(){var t=this;this.client&&(this.client.cancel(),setTimeout((function(){t.isUpload=!1,t.progress=0}),200))},videoSelect:function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(e){var r,a,i,o=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!this.client){t.next=3;break}return Object(n["j"])(this,"视频正在上传请不要重复上传！"),t.abrupt("return");case 3:return r=e.size/1024/1024<50,r||this.$message.error("视频文件大小不能超过 50MB!"),a=e.raw,this.isUpload=!0,this.customColor="#26AF61",this.videoUrl&&this.$refs.video.load(),t.next=11,Object(c["b"])("video");case 11:this.client=t.sent,i=this.aliyunOss.vdoPath+"/"+Object(n["i"])(),this.client.multipartUpload(i,a,{progress:function(t){o.progress=parseInt(100*t)}}).then((function(t){o.videoUrl=o.aliyunOss.vdoHost+t.name,o.$emit("update:video",o.aliyunOss.vdoHost+t.name),o.$nextTick((function(){o.$refs.video.load()})),o.$forceUpdate(),o.isUpload=!1,o.progress=0,o.client=null})).catch((function(t){0===t.status&&"cancel"===t.name?Object(n["j"])(o,"已取消上传"):Object(n["c"])(o,t),o.isUpload=!1,o.customColor="#f56c6c",o.client=null}));case 14:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}()}},f=p,m=(r("a780"),r("2877")),b=Object(m["a"])(f,a,i,!1,null,"268eca8e",null);e["a"]=b.exports},a780:function(t,e,r){"use strict";var a=r("682a"),i=r.n(a);i.a},b8ea:function(t,e,r){"use strict";r.d(e,"b",(function(){return i})),r.d(e,"a",(function(){return o})),r.d(e,"c",(function(){return s}));var a=r("4279"),i=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(a["a"])("/api/mall/manager/goods/content/list",{page:t.page,pageSize:t.pageSize,keyword:t.keyword,status:t.status,type:t.id},"POST")},o=[{name:"所有",id:0},{name:"公司新闻",id:1},{name:"行业新闻",id:2},{name:"产品评测",id:3},{name:"术语解释",id:4}],s=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(a["a"])("/api/mall/manager/content/updateStatus",{id:t.id,status:t.status},"POST")}},bcbd:function(t,e,r){"use strict";var a=r("98fc"),i=r.n(a);i.a}}]);
//# sourceMappingURL=chunk-0ad79cec.production.1582706353542.js.map