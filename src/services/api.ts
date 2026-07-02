import {applications, workOrders, users, audits, departments, neighborhoods} from '../data/mock';
const wait=<T,>(data:T)=>new Promise<T>(r=>setTimeout(()=>r(data),200));
export const api={
 login:(email:string)=>wait(users.find(u=>u.email===email)||users[0]),
 applications:()=>wait(applications), application:(id:string)=>wait(applications.find(a=>a.id===id)),
 workOrders:()=>wait(workOrders), workOrder:(id:string)=>wait(workOrders.find(w=>w.id===id)),
 users:()=>wait(users), audits:()=>wait(audits), departments:()=>wait(departments), neighborhoods:()=>wait(neighborhoods),
 dashboard:()=>wait({total:applications.length,open:applications.filter(a=>a.status!=='Tamamlandı').length,done:workOrders.filter(w=>w.status==='Tamamlandı').length,sla:2})
};
