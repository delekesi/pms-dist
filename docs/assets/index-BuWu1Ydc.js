import{_ as w}from"./request-BuRTYroO.js";import{d as De,u as je,a as n,o as ze,c as u,e as b,g as l,w as s,f as d,F as V,q as N,y as g,i as c,k as i,x as O,s as P,v as C,t as Me,H as Be,p as Fe,l as He}from"./index-CWhCjLB-.js";import{d as $e,f as Ae,g as Ue,h as qe,i as Le,j as Re,k as Ge,s as Oe}from"./index-BVJgSX3-.js";import{_ as Ee}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./axios-B4uVmeYG.js";const H=$=>(Fe("data-v-97457a0b"),$=$(),He(),$),Je={key:0},We={key:1},Ye=H(()=>d("span",{class:"margin010"},"小时",-1)),Ke=H(()=>d("span",{class:"margin010"},"分钟",-1)),Qe={class:"dialog-footer"},Xe={class:"common-top"},Ze={class:"common-top-List"},ea=H(()=>d("span",{class:"common-top-text"},"项目：",-1)),aa=H(()=>d("span",{class:"common-top-text"},"数据：",-1)),la=H(()=>d("span",{class:"common-top-text"},"处理人：",-1)),ta={class:"el-dropdown-link"},sa={class:"bgf4"},oa={class:"common-contain"},na={class:"common-contain-item"},ra={class:"common-contain-item"},ua={class:"common-contain-item"},da={class:"el-dropdown-link"},ia={class:"page"},ca={class:"list-pnoSpan"},pa={class:"list-pagesize"},ma=De({__name:"index",setup($){const U=je(),j=n("");let E=n([]);const J=n(),W=n(),S=n(""),Y=n(),K=n(),z=n(""),M=n(""),Q=n(),X=localStorage.getItem("userInfo"),q=n();if(X){const t=JSON.parse(X);q.value=t.loginUserId}const h=n({currentPage:1,pageSize:0,totalPage:0,totalResult:0}),Z=n(),ue=()=>{G(),U.push({path:"/addTask",query:{id:"create",taskid:L,activeIndex:"/allTask"}})},x=n([]),B=n([]),F=n([]);ze(()=>{if((localStorage.getItem("originFlag")?localStorage.getItem("originFlag"):"")==="1"){const a=JSON.parse(localStorage.getItem("localDate")||"");h.value.currentPage=a.currentPage,j.value=a.projectName,z.value=a.dataData,B.value=a.userIds,M.value=a.Prostatus,localStorage.removeItem("localDate"),localStorage.removeItem("originFlag")}p()});const de=t=>{const a={userid:Number(t.userid),truename:String(t.truename)};x.value.some(o=>o.userid===a.userid)||x.value.push(a),B.value=x.value.map(o=>String(o.userid)),F.value=x.value.map(o=>String(o.truename))},ie=t=>{const a=x.value.findIndex(o=>o.userid===t);a!==-1&&(x.value.splice(a,1),B.value=x.value.map(o=>String(o.userid)),F.value.splice(a,1))},ce=()=>F.value&&F.value.length===0?"请选择":F.value,f=n(!1),L=n(0),T=n(0),ee=n(0);let r=n({projectName:"",progressDsec:"",feedHour:"",feedMin:"",resetFields:function(){}});const ae=n(0),pe=n([{text:"所有",class:"bgGray_fontBlack",status:""},{text:"未开始",class:"bgGray_fontBlack",status:"0"},{text:"进行中",class:"bgGray_fontBlack",status:"1"},{text:"已完成",class:"bgGray_fontBlack",status:"2"},{text:"已逾期",class:"bgGray_fontBlack",status:"3"}]),me=t=>{console.log(`${t} items per page`)},ve=()=>{p()},R=(t,a,o,m,_,v)=>{switch(t){case"delete":f.value=!0,S.value="移除任务成员确认",T.value=o;break;case"finish":f.value=!0,S.value="任务完成确认",T.value=o;break;case"feedback":if(q.value!=m)w({type:"error",message:"该任务不属于你，不允许反馈"});else if(v==0||v==2||v==4)w({type:"error",message:"该状态下的任务不允许反馈"});else{f.value=!0,S.value="任务反馈",L.value=a,T.value=o,ee.value=m,r.value.projectName=_;break}}},G=()=>{const t={currentPage:h.value.currentPage,projectName:j.value,dataData:z.value,userIds:B.value,Prostatus:M.value};localStorage.setItem("localDate",JSON.stringify(t))},ge=()=>{switch(S.value){case"移除任务成员确认":we(),A();break;case"任务完成确认":Ce(),A();break;case"任务反馈":xe(),A();break}},A=()=>{f.value=!1,r.value={projectName:"",progressDsec:"",feedHour:"",feedMin:"",resetFields:function(){}},r.value.resetFields()},fe=t=>{M.value=t,p()},p=async()=>{let t=await $e(h.value.currentPage,j.value,z.value,B.value,M.value);t.code==0&&(E.value=t.list,h.value=t.pageInfo,Z.value=Object.keys(t.data||{}).map(m=>({value:Number(m),label:t.data[m]})));let a=await Ae();a.code==0&&(Q.value=a.projectNames);let o=await Ue();o.code==0&&(J.value=o.roleList)},le=(t,a)=>{var o=new Date(t),m=o.getFullYear(),_=o.getMonth()+1,v=o.getDate();return o.getHours(),o.getMinutes(),o.getSeconds(),t?m+"-"+(_.toString().length>1?_:"0"+_)+"-"+(v.toString().length>1?v:"0"+v):""},_e=t=>{switch(t){case 0:return"red";case 1:return"orange";case 2:return"green";case 3:return"purple";case 4:return"orange"}},ke=t=>{switch(t){case 0:return"未开始";case 1:return"进行中";case 2:return"已完成";case 3:return"已逾期";case 4:return"待审核"}},be=async t=>{let a=await qe(t);a&&(W.value=a.adminList)},he=t=>{G(),U.push({path:"/addTask",query:{id:"read",taskid:t,activeIndex:"/allTask"}})},ye=t=>{G(),U.push({path:"/addTask",query:{id:"edit",taskid:t,activeIndex:"/allTask"}})},we=async()=>{let t=await Le(T.value);t.code==0?(f.value=!1,p(),w({type:"success",message:"删除任务成功"})):(f.value=!1,p(),w({type:"error",message:t.errMsg}))},Ce=async()=>{let t=await Re(T.value);t.code==0?(f.value=!1,p(),w({type:"success",message:"完成任务成功"})):(f.value=!1,w({type:"error",message:t.errMsg}))},Se={progressDsec:[{required:!0}],feedHour:[{required:!0}],feedMin:[{required:!0}]},xe=async()=>{ae.value=Number(r.value.feedHour)*60+Number(r.value.feedMin);let t=await Ge(T.value,L.value,r.value.progressDsec,ee.value,ae.value);t.code==0?(f.value=!1,p(),w({type:"success",message:"反馈成功"})):(f.value=!1,p(),w({type:"error",message:t.errMsg}))},Ie=async t=>{let a=await Oe(t);a.code==0?(w({type:"success",message:"任务已开始"}),p()):w({type:"error",message:a.errMsg})};return(t,a)=>{const o=c("el-input"),m=c("el-form-item"),_=c("el-option"),v=c("el-select"),te=c("el-row"),se=c("el-form"),I=c("el-button"),Ve=c("el-dialog"),oe=c("arrow-down"),ne=c("el-icon"),re=c("el-dropdown"),y=c("el-table-column"),D=c("el-dropdown-item"),Ne=c("el-dropdown-menu"),Pe=c("el-table"),Te=c("el-pagination");return u(),b("div",null,[l(Ve,{modelValue:f.value,"onUpdate:modelValue":a[4]||(a[4]=e=>f.value=e),title:S.value,width:"800",center:""},{footer:s(()=>[d("div",Qe,[l(I,{type:"borBlue_fontBlue",onClick:A},{default:s(()=>[i("取消")]),_:1}),l(I,{type:"primary",onClick:ge},{default:s(()=>[i(" 确定 ")]),_:1})])]),default:s(()=>[S.value==="移除任务成员确认"?(u(),b("div",Je," 确认移除此任务成员？ ")):S.value==="任务完成确认"?(u(),b("div",We," 确认完成此任务？ ")):O("",!0),S.value==="任务反馈"?(u(),P(se,{key:2,model:g(r),rules:Se},{default:s(()=>[l(m,{label:"任务名称：","label-width":"100",prop:g(r).projectName},{default:s(()=>[l(o,{class:"marginBottom10",disabled:"",modelValue:g(r).projectName,"onUpdate:modelValue":a[0]||(a[0]=e=>g(r).projectName=e)},null,8,["modelValue"])]),_:1},8,["prop"]),l(m,{label:"进度描述：","label-width":"100",prop:g(r).progressDsec},{default:s(()=>[l(o,{class:"marginBottom10",type:"textarea",modelValue:g(r).progressDsec,"onUpdate:modelValue":a[1]||(a[1]=e=>g(r).progressDsec=e)},null,8,["modelValue"])]),_:1},8,["prop"]),l(te,{align:"middle"},{default:s(()=>[l(m,{label:"用时","label-width":"100",prop:g(r).feedHour},{default:s(()=>[l(v,{width:"50px",class:"width100",modelValue:g(r).feedHour,"onUpdate:modelValue":a[2]||(a[2]=e=>g(r).feedHour=e)},{default:s(()=>[(u(),b(V,null,N(30,e=>l(_,{key:e,label:e,value:e},null,8,["label","value"])),64))]),_:1},8,["modelValue"]),Ye]),_:1},8,["prop"]),l(m,{prop:g(r).feedMin},{default:s(()=>[l(v,{width:"50px",class:"width100",modelValue:g(r).feedMin,"onUpdate:modelValue":a[3]||(a[3]=e=>g(r).feedMin=e)},{default:s(()=>[(u(),b(V,null,N(60,e=>l(_,{key:e,label:e,value:e},null,8,["label","value"])),64))]),_:1},8,["modelValue"]),Ke]),_:1},8,["prop"])]),_:1})]),_:1},8,["model"])):O("",!0)]),_:1},8,["modelValue","title"]),d("div",Xe,[d("div",Ze,[ea,l(v,{class:"width180",modelValue:j.value,"onUpdate:modelValue":a[6]||(a[6]=e=>j.value=e),clearable:"",onClear:a[7]||(a[7]=e=>p())},{default:s(()=>[(u(!0),b(V,null,N(Q.value,e=>(u(),P(_,{key:e.id,label:e.projectName,value:e.projectName,onClick:a[5]||(a[5]=k=>p())},null,8,["label","value"]))),128))]),_:1},8,["modelValue"]),aa,l(v,{class:"width180",modelValue:z.value,"onUpdate:modelValue":a[9]||(a[9]=e=>z.value=e),clearable:"",onClear:a[10]||(a[10]=e=>p())},{default:s(()=>[(u(!0),b(V,null,N(Z.value,e=>(u(),P(_,{key:e.value,label:e.label,value:e.value,onClick:a[8]||(a[8]=k=>p())},null,8,["label","value"]))),128))]),_:1},8,["modelValue"]),la,l(re,{trigger:"click"},{dropdown:s(()=>[l(se,{"label-width":"120px",class:"margin20 paddingbottom200"},{default:s(()=>[l(te,null,{default:s(()=>[l(m,{label:"角色：",class:"marginBottom20"},{default:s(()=>[l(v,{class:"width180",modelValue:Y.value,"onUpdate:modelValue":a[11]||(a[11]=e=>Y.value=e),teleported:!1,clearable:""},{default:s(()=>[(u(!0),b(V,null,N(J.value,e=>(u(),P(_,{onClick:k=>be(e.roleid),key:e.roleid,label:e.rolename,value:e.roleid},null,8,["onClick","label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),l(m,{label:"账号："},{default:s(()=>[l(v,{class:"width180",modelValue:K.value,"onUpdate:modelValue":a[12]||(a[12]=e=>K.value=e),teleported:!1,clearable:""},{default:s(()=>[(u(!0),b(V,null,N(W.value,e=>(u(),P(_,{key:e.userid,label:e.truename,value:e.userid,onClick:k=>(de(e),p())},null,8,["label","value","onClick"]))),128))]),_:1},8,["modelValue"])]),_:1})]),_:1}),l(m,{label:"已选人员：",class:"marginTop15px"},{default:s(()=>[(u(!0),b(V,null,N(x.value,e=>(u(),b("div",{key:e.userid},[d("span",sa,[i(C(e.truename)+" ",1),l(I,{onClick:k=>(ie(e.userid),p()),size:"small",circle:"",round:"",type:"primary",icon:"Minus"},null,8,["onClick"])])]))),128))]),_:1})]),_:1})]),default:s(()=>[d("span",ta,[l(I,{class:"borGray_fontBlack width120",size:"small"},{default:s(()=>[i(C(ce())+" ",1),l(ne,{class:"el-icon--right"},{default:s(()=>[l(oe)]),_:1})]),_:1})])]),_:1})])]),d("div",oa,[d("div",na,[l(I,{class:"bgBlue_fontWhite",size:"small",onClick:ue},{default:s(()=>[i("+创建任务")]),_:1})]),d("div",ra,[(u(!0),b(V,null,N(pe.value,(e,k)=>(u(),P(I,{type:"default",key:k,class:Me(e.class+(e.status===M.value?" status-default":"")),size:"small",onClick:va=>fe(e.status)},{default:s(()=>[i(C(e.text),1)]),_:2},1032,["class","onClick"]))),128))]),d("div",ua,[l(Pe,{data:g(E),"header-row-class-name":"table-header"},{default:s(()=>[l(y,{label:"序号",type:"index",width:"120",align:"center"}),l(y,{prop:"projectName",label:"项目名称",width:"120",align:"center"}),l(y,{prop:"taskName",label:"任务名称",width:"180",align:"center"}),l(y,{prop:"handlePeople",label:"处理人",width:"120",align:"center"}),l(y,{prop:"createPeople",label:"创建人",width:"120",align:"center"}),l(y,{prop:"performanceHours",label:"绩效工时",width:"120",align:"center"}),l(y,{prop:"endTime",label:"结束日期",width:"180",align:"center"},{default:s(({row:e})=>[i(C(le(e.endTime,"a")),1)]),_:1}),l(y,{prop:"realTaskHours",label:"实际工时",width:"120",align:"center"},{default:s(({row:e})=>[i(C(e.realTaskHours?(e.realTaskHours/60).toFixed(1):0),1)]),_:1}),l(y,{prop:"realEndtime",label:"实际结束日期",width:"180",align:"center"},{default:s(({row:e})=>[i(C(le(e.realEndtime,"a")),1)]),_:1}),l(y,{prop:"taskStatus",label:"任务状态",width:"120",align:"center"},{default:s(({row:e})=>[d("div",{style:Be({background:_e(e.taskStatus),color:"white",padding:"5px",borderRadius:"20px"})},C(ke(e.taskStatus)),5)]),_:1}),l(y,{label:"操作",align:"center"},{default:s(({row:e})=>[l(re,null,{dropdown:s(()=>[l(Ne,null,{default:s(()=>[l(D,{onClick:k=>he(e.taskid)},{default:s(()=>[i("查看")]),_:2},1032,["onClick"]),q.value==e.createPeopleId?(u(),P(D,{key:0,onClick:k=>ye(e.taskid)},{default:s(()=>[i("编辑")]),_:2},1032,["onClick"])):O("",!0),l(D,{onClick:k=>R("delete","",e.taskAdminId)},{default:s(()=>[i("删除")]),_:2},1032,["onClick"]),l(D,{onClick:k=>Ie(e.taskAdminId)},{default:s(()=>[i("开始")]),_:2},1032,["onClick"]),l(D,{onClick:k=>R("finish","",e.taskAdminId)},{default:s(()=>[i("完成")]),_:2},1032,["onClick"]),l(D,{onClick:k=>R("feedback",e.taskid,e.taskAdminId,e.handlePeopleId,e.projectName,e.taskStatus)},{default:s(()=>[i("反馈")]),_:2},1032,["onClick"])]),_:2},1024)]),default:s(()=>[d("span",da,[l(I,{class:"width120",size:"small"},{default:s(()=>[i("更多 "),l(ne,{class:"el-icon--right"},{default:s(()=>[l(oe)]),_:1})]),_:1})])]),_:2},1024)]),_:1})]),_:1},8,["data"])]),d("div",ia,[l(Te,{"current-page":h.value.currentPage,"onUpdate:currentPage":a[13]||(a[13]=e=>h.value.currentPage=e),"page-size":h.value.pageSize,"onUpdate:pageSize":a[14]||(a[14]=e=>h.value.pageSize=e),layout:"prev,next,slot,jumper",total:h.value.totalResult,onSizeChange:me,onCurrentChange:ve},{default:s(()=>[d("span",ca,[d("span",pa,"第"+C(h.value.currentPage)+" / "+C(h.value.totalPage)+"页",1)])]),_:1},8,["current-page","page-size","total"]),l(I,{size:"small",class:"list-pagepno"},{default:s(()=>[i("跳转")]),_:1})])])])}}}),ha=Ee(ma,[["__scopeId","data-v-97457a0b"]]);export{ha as default};
