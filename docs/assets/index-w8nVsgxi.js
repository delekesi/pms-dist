import{r as o}from"./request-BuRTYroO.js";const P=(e,t,s,r,n,c,d,p,a)=>o.get(`/pms/indexProject/showAllProject?currentPage=${e}&projectName=${t}&startTimeStart=${s}&startTimeEnd=${r}
&endTimeStart=${n}&endTimeEnd=${c}&nowMilestone=${d}&projectType=${p}&projectStatus=${a}`),l=e=>o.get(`/pms/indexProject/showRoleAdmins?roleId=${e}`),j=(e,t)=>o.get(`/pms/indexProject/searchProInfo?proId=${e}&ifIsModify=${t}`),$=e=>o.get(`/pms/indexProject/showAllVersions?projectId=${e}`),w=(e,t)=>o.get(`/pms/indexProject/updateProVersion?proId=${e}&newProVersion=${t}`),x=(e,t)=>o.get(`/pms/indexProject/updateProMilestone?proId=${e}&newProMilestone=${t}`),g=(e,t)=>o.post(`/pms/indexProject/proCompleted?projectId=${e}&projectCompleteDesc=${t}`),u=()=>o.get("/pms/indexProject/createNewProCode"),h=()=>o.get("/pms/indexProject/showAllRoles"),A=()=>o.get("/pms/indexProject/showAllRoleAdmins"),I=()=>o.get("/pms/indexProject/showConstants"),T=async(e,t,s,r,n,c,d,p)=>await o.post("/pms/indexProject/createNewProject",{projectCode:e,projectType:t,startTime:s,endTime:r,projectName:n,projectDesc:c,projectAdminDTOS:d,indexVersionDTOS:p}),f=async(e,t,s,r,n,c,d,p,a)=>await o.post("/pms/indexProject/modify",{id:e,projectCode:t,projectType:s,startTime:r,endTime:n,projectName:c,projectDesc:d,projectAdminDTOS:p,indexVersionDTOS:a}),M=()=>o.get("/pms/indexProject/showNotEnd");export{x as a,h as b,M as c,I as d,j as e,T as f,f as g,g as h,l as i,u as n,P as r,A as s,w as u,$ as v};
