import{r as S,E as w,h as x,d as z,u as B,a as b,b as j,o as D,c as F,e as N,f as i,g as f,w as _,i as v,j as U,k as V,p as P,l as $}from"./index-CWhCjLB-.js";import{u as E}from"./userInfo-BMR7ko0V.js";import{a as L}from"./axios-B4uVmeYG.js";import{_ as M}from"./_plugin-vue_export-helper-DlAUqK2U.js";const T="/assets/logo-QR6HXn9S.png";/*! js-cookie v3.0.5 | MIT */function h(e){for(var s=1;s<arguments.length;s++){var u=arguments[s];for(var l in u)e[l]=u[l]}return e}var q={read:function(e){return e[0]==='"'&&(e=e.slice(1,-1)),e.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent)},write:function(e){return encodeURIComponent(e).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,decodeURIComponent)}};function C(e,s){function u(o,c,t){if(!(typeof document>"u")){t=h({},s,t),typeof t.expires=="number"&&(t.expires=new Date(Date.now()+t.expires*864e5)),t.expires&&(t.expires=t.expires.toUTCString()),o=encodeURIComponent(o).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape);var r="";for(var a in t)t[a]&&(r+="; "+a,t[a]!==!0&&(r+="="+t[a].split(";")[0]));return document.cookie=o+"="+e.write(c,o)+r}}function l(o){if(!(typeof document>"u"||arguments.length&&!o)){for(var c=document.cookie?document.cookie.split("; "):[],t={},r=0;r<c.length;r++){var a=c[r].split("="),n=a.slice(1).join("=");try{var p=decodeURIComponent(a[0]);if(t[p]=e.read(n,p),o===p)break}catch{}}return o?t[o]:t}}return Object.create({set:u,get:l,remove:function(o,c){u(o,"",h({},c,{expires:-1}))},withAttributes:function(o){return C(this.converter,h({},this.attributes,o))},withConverter:function(o){return C(h({},this.converter,o),this.attributes)}},{attributes:{value:Object.freeze(s)},converter:{value:Object.freeze(e)}})}var A=C(q,{path:"/"});const I=L.create({timeout:5e3,headers:{"Content-type":"application/json"}});I.interceptors.request.use(e=>e,e=>(console.log(e),Promise.reject()));I.interceptors.response.use(e=>{if(e.data.code===0){const s=e.data.data.token;return s?A.set("token",s):S.push("/login"),e}else w({type:"error",message:e.data.msg}),Promise.reject()},e=>(w({message:x("p",null,[x("span",null,`${e.message}`)]),duration:0,showClose:!0,customClass:"w1120 custom_var_error message_no_icon"}),Promise.reject()));const H=async e=>(await I.post("/pms/admin/login",e)).data,y=e=>(P("data-v-48375907"),e=e(),$(),e),K={class:"zt_html"},O={class:"zt_bg"},Q={class:"zt_login"},X={class:"zt_block"},G=y(()=>i("img",{src:T,alt:"",class:"zt_block-logo"},null,-1)),J=y(()=>i("h3",{class:"zt_block-title",id:"loginMsgBody"},"DDTS项目协同云工作平台",-1)),W={class:"form_ul"},Y={class:"form_li clearFix"},Z={class:"form_li clearFix"},ee=y(()=>i("p",{class:"zt_err-info"},"Copyright © 2023 南京中图数码科技有限公司出品",-1)),oe=z({__name:"login",setup(e){let s=E();const u=B(),l=b(),o=j({loginname:"",password:""}),c=j({loginname:[{required:!0,message:"账号或者密码输入错误",trigger:"blur"}],password:[{required:!0,message:"账号或者密码输入错误",trigger:"blur"}]}),t=b(!1);D(()=>{localStorage.getItem("d04LoginName")&&(t.value=!0,o.loginname=localStorage.getItem("d04LoginName")||"")});const r=async a=>{a&&await a.validate(n=>{n&&(t.value?localStorage.setItem("d04LoginName",o.loginname):localStorage.removeItem("d04LoginName"),H(o).then(g=>{const d=g.data;if(g.code==0){let k={loginUserId:d.userid,userName:d.loginname,loginHeadImg:d.loginHeadImg||"",token:d.token,menujson:d.menujson,openPath:d.openPath||""};s.setUserInfo(k),u.push("/allProject")}else w({message:g.msg,type:"error",duration:3e4,showClose:!0,customClass:"msg_error",appendTo:"#loginMsgBody"})}))})};return(a,n)=>{const p=v("el-input"),g=v("el-form-item"),d=v("el-checkbox"),k=v("el-button"),R=v("el-form");return F(),N("div",K,[i("div",O,[i("div",Q,[i("div",X,[G,J,f(R,{model:o,"label-width":"0","label-position":"left",rules:c,ref_key:"loginFormRef",ref:l,class:"c_form"},{default:_(()=>[i("ul",W,[i("li",Y,[f(g,{class:"fl pr",prop:"loginname","inline-message":"true"},{default:_(()=>[f(p,{type:"text",placeholder:"请输入账号",class:"el_form-limit form_block-name form_block-input",modelValue:o.loginname,"onUpdate:modelValue":n[0]||(n[0]=m=>o.loginname=m),onKeyup:n[1]||(n[1]=U(m=>r(l.value),["native","enter"]))},null,8,["modelValue"])]),_:1})]),i("li",Z,[f(g,{class:"fl pr",prop:"password"},{default:_(()=>[f(p,{type:"password",placeholder:"请输入密码",class:"el_form-limit form_block-pass form_block-input",modelValue:o.password,"onUpdate:modelValue":n[2]||(n[2]=m=>o.password=m),onKeyup:n[3]||(n[3]=U(m=>r(l.value),["native","enter"]))},null,8,["modelValue"])]),_:1})])]),f(d,{modelValue:t.value,"onUpdate:modelValue":n[4]||(n[4]=m=>t.value=m),ref:"reme",checked:t.value,name:"saveName",class:"log_radio fl",id:"saveName"},{default:_(()=>[V("记住账号")]),_:1},8,["modelValue","checked"]),f(k,{class:"login_but",type:"primary",onClick:n[5]||(n[5]=m=>r(l.value))},{default:_(()=>[V("登录")]),_:1})]),_:1},8,["model","rules"]),ee])])])])}}}),ae=M(oe,[["__scopeId","data-v-48375907"]]);export{ae as default};
