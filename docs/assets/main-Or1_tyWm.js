import{m as z,d as F,n as B,b as R,a as X,o as q,i,c as o,e as a,g as l,w as s,F as k,q as O,s as L,f as e,t as C,k as D,v as p,x,y as w,r as Y,p as V,l as y,T as P,z as T}from"./index-Bye8D5cU.js";import{u as G}from"./userInfo-CIq9BZFA.js";import{_ as M}from"./_plugin-vue_export-helper-DlAUqK2U.js";const S=z("leftTopStatus",{state:()=>({defaultActive:"",firstPageUrl:"",swiperList:[]}),actions:{setDefaultActive(c){this.defaultActive=c},setFirstPageUrl(c){this.firstPageUrl=c},setSwiperList(c){this.swiperList=c}},persist:{storage:localStorage,paths:[]}}),J={id:"commonLeft",class:"com_left-box"},Z={key:0,class:"menu_block"},W={key:0,slot:"title"},E=!0,K=!0,Q=F({__name:"commonAside",setup(c){let f=S(),h=G();const{proxy:t}=B(),_=R([{name:"我的任务",url:"/myTask",show:!0,iconClass:"icon_class1",childList:[],code:1002},{name:"反馈看板",url:"/feedbackDashboard",show:!0,iconClass:"icon_class1",childList:[],code:1002},{name:"所有项目",url:"/allProject",show:!0,iconClass:"icon_class1",childList:[],code:1002},{name:"任务池",url:"/allTask",show:!0,iconClass:"icon_class1",childList:[],code:1002}]);let v=X(""),m=X();q(()=>{if(t!=null&&t.$getUrlData(t==null?void 0:t.$route.fullPath).activeIndex){m.value=t==null?void 0:t.$getUrlData(t==null?void 0:t.$route.fullPath).activeIndex;const d=decodeURIComponent(t==null?void 0:t.$getUrlData(t==null?void 0:t.$route.fullPath).activeIndex);f.setDefaultActive(d),g()}else m.value=t==null?void 0:t.$route.path});function g(d){N(_,h.menujson);let A=_.find(u=>u.show);A&&(v.value=A.url,f.setSwiperList(_),f.setFirstPageUrl(v.value))}function N(d,A){d.forEach(u=>{A.indexOf(u.code)!=-1&&(u.show=!0)})}function j(d){f.setDefaultActive(d),m.value=d}return(d,A)=>{const u=i("el-menu-item"),H=i("el-menu-item-group"),U=i("el-sub-menu"),b=i("el-menu");return o(),a("div",J,[l(b,{"default-active":w(m),class:"com_swiper-ul","text-color":"#6A7682","active-text-color":`#008ff4
            `,"unique-opened":E,router:K},{default:s(()=>[(o(!0),a(k,null,O(_,n=>(o(),a(k,null,[n.show?(o(),a("div",Z,[n.childList&&n.childList.length>0?(o(),L(U,{key:0,index:n.url},{title:s(()=>[e("b",{class:C("icon_left "+n.iconClass)},null,2),D(p(n.name),1)]),default:s(()=>[n.childList.length>0?(o(),L(H,{key:0},{default:s(()=>[(o(!0),a(k,null,O(n.childList,r=>(o(),a(k,null,[r.show?(o(),L(u,{index:r.url,onClick:jt=>j(r.url),key:r.name},{default:s(()=>[D(p(r.name),1)]),_:2},1032,["index","onClick"])):x("",!0)],64))),256))]),_:2},1024)):x("",!0)]),_:2},1032,["index"])):(o(),L(u,{key:1,index:n.url,onClick:r=>j(n.url)},{default:s(()=>[n.show?(o(),a("span",W,[e("b",{class:C("icon_left "+n.iconClass)},null,2),D(p(n.name),1)])):x("",!0)]),_:2},1032,["index","onClick"]))])):x("",!0)],64))),256))]),_:1},8,["default-active"])])}}}),$=M(Q,[["__scopeId","data-v-2df03c62"]]),tt="data:image/png;base64,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",et="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAACDklEQVR4Xs2YPUscURiFVyws7OIfUBBSCWksBLGx1B8gki6tvUW6QLqUFu7HuOwKImtls2n8AVZpUtgHBEkThAgWwnq2fbh3d2bnfefeB57ynnNmd/az1TJmOByudjqdp3a7PYl4wDNZoYFbgdGzfGVGcvQM/AsMLesF85Kgi3gLjKvk9FZkbqNoxBlHLaou5pT5jcExdWV+I6j4gUMMvGOPO4ERJrLHHQ6wkj2uqPAHBxh6zD43AuVm6t3rL/vcYLm17HODxdayzw0WW8s+N1hsLftc6PV6myy2ttvtbrDXHJZ6yV5zWOgle81hoZfsNUf372eWOvidvS5Y/JiaJftcUeELB9R1+gCxx53BYLDGIXXt9/vr7GkEDqkr8xtDt8IRx9Qw7f9dGnASGFVJfVvYY24SiqLY4biyjsfjFeYlhQPLypzkcGBJfzMnOXrh/w8MnedP5iQnMLKUzEnKZDJZ4sCyMispHFdV5jWORlxz1KLqNTZkvivT930VP3OIpfqA3GevCQrfZVlT6vfPF+6pjIK+MjiVuvVuuK8UDMpF7pyJrv6WAbmobVfcG4WHc5N7o/BgbnJvFB7MTe6NwoO5yb1ReDA3uTcKD+Ym90bhwdzk3ig8mJvcG0UfOo88nIva9ol756JvoR90+JJhDXtfFMVHbjNjNBot69E5lOcq+xMYUNZf8ptyttlRhXd148WUgNH/XwAAAABJRU5ErkJggg==",I=c=>(V("data-v-4ef96803"),c=c(),y(),c),st={id:"commonTop",class:"page_top"},ot={class:"top_box"},nt=I(()=>e("h2",null,"DDTS项目协同云工作平台",-1)),lt=I(()=>e("h2",null,"Alliance Collaboration Platform",-1)),ct=[nt,lt],at={class:"top_r"},it={class:"top_r-icon top_r-msg"},dt={key:0,class:"btn-com_tip btn-msg_tip"},ut=I(()=>e("div",{class:"t-msg"},[e("span",{class:"msg_title"},"消息列表")],-1)),rt={class:"t_msg-list"},_t={class:"msg_list-p"},mt=I(()=>e("i",null,"[",-1)),pt=I(()=>e("i",null,"]",-1)),ft={class:"msg_list-time"},ht={class:"align_center"},vt=["src"],At={key:1,src:et,alt:"",class:"top_head-img"},gt={class:"top_r-name"},Ut=I(()=>e("span",{class:"drop_pad"},"退出登录",-1)),wt=F({__name:"commonTop",setup(c){let f=S(),h=G();const{proxy:t}=B(),_=h.userName;_||Y.push("/login");const v=h.count,m=h.loginHeadImg,g=()=>{t==null||t.$router.push(f.defaultActive)},N=()=>{const u={token:""};h.setUserInfo(u),t==null||t.$router.push("/login")},j=[],d=()=>{},A=()=>{};return(u,H)=>{const U=i("el-dropdown-item"),b=i("el-dropdown-menu"),n=i("el-dropdown");return o(),a("div",st,[e("div",ot,[e("img",{src:tt,onClick:g,alt:"",class:"top_logo"}),e("div",{class:"top_middle",onClick:g},ct),e("div",at,[l(n,{class:"drop_msg"},{dropdown:s(()=>[l(b,{class:"drop_solt",slot:"dropdown"},{default:s(()=>[l(U,null,{default:s(()=>[ut]),_:1}),l(U,null,{default:s(()=>[e("ul",rt,[(o(),a(k,null,O(j,r=>e("li",null,[e("p",_t,[mt,D(p(r.msgStatus?"已读":"未读"),1),pt,D(p(r.message),1)]),e("span",ft,p(r.dateInsert),1)])),64))])]),_:1}),l(U,null,{default:s(()=>[e("a",{onClick:d,class:"msg_look-but"},"查看全部")]),_:1})]),_:1})]),default:s(()=>[e("i",it,[w(v)>0?(o(),a("b",dt,p(w(v)),1)):x("",!0)])]),_:1}),e("i",{class:"top_r-icon point top_r-set",onClick:A}),l(n,{onCommand:N},{dropdown:s(()=>[l(b,null,{default:s(()=>[l(U,null,{default:s(()=>[Ut]),_:1})]),_:1})]),default:s(()=>[e("div",ht,[w(m)?(o(),a("img",{key:0,src:w(m),class:"top_head-img",alt:""},null,8,vt)):(o(),a("img",At)),e("span",gt,p(w(_)||"未登录"),1)])]),_:1})])])])}}}),Lt=M(wt,[["__scopeId","data-v-4ef96803"]]),It={class:"com-body"},kt={class:"com_swiper"},xt={class:"com_page"},Dt=F({__name:"main",setup(c){return(f,h)=>{const t=i("el-aside"),_=i("el-main"),v=i("router-view"),m=i("el-container");return o(),L(m,{class:"com_box"},{default:s(()=>[l(Lt),e("div",It,[e("div",kt,[l(_,null,{default:s(()=>[l(t,null,{default:s(()=>[l($)]),_:1})]),_:1})]),e("div",xt,[l(v,null,{default:s(({Component:g})=>[l(P,null,{default:s(()=>[e("div",null,[(o(),L(T(g)))])]),_:2},1024)]),_:1})])])]),_:1})}}}),Ft=M(Dt,[["__scopeId","data-v-0fbf8f7d"]]);export{Ft as default};
