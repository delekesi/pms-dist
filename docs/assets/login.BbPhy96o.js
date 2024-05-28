import{W as b,d as z,e as y,v as w,i as S,o as j,c as U,a as t,z as r,B as p,V as c,a0 as I,F as V,az as B,aA as P}from"./@vue.EJA8iuET.js";import{u as R}from"./userInfo.BofwzseS.js";import{u as $}from"./vue-router.YovXuMw6.js";import{a as F}from"./axios.B4uVmeYG.js";import{a as L}from"./js-cookie.Cz0CWeBA.js";import{r as M}from"./index.BNRJ4AcE.js";import{a as v}from"./xye-plus.BI2_LukM.js";import{_ as q}from"./plugin-vueexport-helper.DlAUqK2U.js";import"./pinia.t1AAS9UK.js";import"./vue-demi.Dq6ymT-8.js";import"./pinia-plugin-persistedstate.RV7uh3T-.js";import"./element-plus.w4jB6sh9.js";import"./dayjs.CbdKYntM.js";import"./lodash.CcRmZ3Vn.js";import"./resize-observer-polyfill.B1PUzC5B.js";import"./normalize-wheel.Dp0Rs7Tz.js";import"./mitt.C1xD_ZTF.js";import"./@popperjs.BQBsAJpH.js";import"./async-validator.CmvJk4VL.js";import"./amfe-flexible.shRVqwqK.js";import"./@element-plus.B3kPFIU4.js";import"./lodash-es.DbpOrnEZ.js";import"./@vueuse.BmW6Kxw9.js";import"./@sxzz.D9SI2xQl.js";import"./@ctrl.r5W6hzzQ.js";import"./memoize-one.BdPwpGay.js";import"./escape-html.C9rgAMn3.js";import"./normalize-wheel-es.B6fDCfyv.js";import"./@floating-ui.B-WCBpf0.js";const D="/assets/logo.QR6HXn9S.png",h=F.create({baseURL:"http://192.168.6.162:8080",timeout:5e3,headers:{"Content-type":"application/json"}});h.interceptors.request.use(e=>e,e=>(console.log(e),Promise.reject()));h.interceptors.response.use(e=>{if(e.data.code===0){const i=e.data.data.token;return i?L.set("token",i):M.push("/login"),e}else v({type:"error",message:e.data.msg}),Promise.reject()},e=>(v({message:b("p",null,[b("span",null,`${e.message}`)]),duration:0,showClose:!0,customClass:"w1120 custom_var_error message_no_icon"}),Promise.reject()));const H=async e=>(await h.post("/pms/admin/login",e)).data,k=e=>(B("data-v-48375907"),e=e(),P(),e),K={class:"zt_html"},T={class:"zt_bg"},A={class:"zt_login"},E={class:"zt_block"},Q=k(()=>t("img",{src:D,alt:"",class:"zt_block-logo"},null,-1)),W=k(()=>t("h3",{class:"zt_block-title",id:"loginMsgBody"},"DDTS项目协同云工作平台",-1)),X={class:"form_ul"},G={class:"form_li clearFix"},J={class:"form_li clearFix"},O=k(()=>t("p",{class:"zt_err-info"},"Copyright © 2023 南京中图数码科技有限公司出品",-1)),Y=z({__name:"login",setup(e){let i=R();const x=$(),d=y(),s=w({loginname:"",password:""}),C=w({loginname:[{required:!0,message:"账号或者密码输入错误",trigger:"blur"}],password:[{required:!0,message:"账号或者密码输入错误",trigger:"blur"}]}),m=y(!1);S(()=>{localStorage.getItem("d04LoginName")&&(m.value=!0,s.loginname=localStorage.getItem("d04LoginName")||"")});const u=async _=>{_&&await _.validate(o=>{o&&(m.value?localStorage.setItem("d04LoginName",s.loginname):localStorage.removeItem("d04LoginName"),H(s).then(n=>{const a=n.data;if(n.code==0){let f={loginUserId:a.userid,userName:a.loginname,loginHeadImg:a.loginHeadImg||"",token:a.token,menujson:a.menujson,openPath:a.openPath||""};i.setUserInfo(f),x.push("/allProject")}else v({message:n.msg,type:"error",duration:3e4,showClose:!0,customClass:"msg_error",appendTo:"#loginMsgBody"})}))})};return(_,o)=>{const g=c("el-input"),n=c("el-form-item"),a=c("el-checkbox"),f=c("el-button"),N=c("el-form");return j(),U("div",K,[t("div",T,[t("div",A,[t("div",E,[Q,W,r(N,{model:s,"label-width":"0","label-position":"left",rules:C,ref_key:"loginFormRef",ref:d,class:"c_form"},{default:p(()=>[t("ul",X,[t("li",G,[r(n,{class:"fl pr",prop:"loginname","inline-message":"true"},{default:p(()=>[r(g,{type:"text",placeholder:"请输入账号",class:"el_form-limit form_block-name form_block-input",modelValue:s.loginname,"onUpdate:modelValue":o[0]||(o[0]=l=>s.loginname=l),onKeyup:o[1]||(o[1]=I(l=>u(d.value),["native","enter"]))},null,8,["modelValue"])]),_:1})]),t("li",J,[r(n,{class:"fl pr",prop:"password"},{default:p(()=>[r(g,{type:"password",placeholder:"请输入密码",class:"el_form-limit form_block-pass form_block-input",modelValue:s.password,"onUpdate:modelValue":o[2]||(o[2]=l=>s.password=l),onKeyup:o[3]||(o[3]=I(l=>u(d.value),["native","enter"]))},null,8,["modelValue"])]),_:1})])]),r(a,{modelValue:m.value,"onUpdate:modelValue":o[4]||(o[4]=l=>m.value=l),ref:"reme",checked:m.value,name:"saveName",class:"log_radio fl",id:"saveName"},{default:p(()=>[V("记住账号")]),_:1},8,["modelValue","checked"]),r(f,{class:"login_but",type:"primary",onClick:o[5]||(o[5]=l=>u(d.value))},{default:p(()=>[V("登录")]),_:1})]),_:1},8,["model","rules"]),O])])])])}}}),ze=q(Y,[["__scopeId","data-v-48375907"]]);export{ze as default};
