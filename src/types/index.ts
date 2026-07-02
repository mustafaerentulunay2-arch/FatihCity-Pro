export type Role='Admin'|'Operator'|'DepartmentManager'|'FieldStaff'|'Citizen';
export type Status='Yeni'|'İnceleniyor'|'Müdürlüğe Atandı'|'İş Emri'|'Sahada'|'Tamamlandı'|'Reddedildi';
export type Priority='Düşük'|'Normal'|'Yüksek'|'Acil';
export interface User{ id:string; name:string; email:string; role:Role; department?:string; active:boolean; }
export interface Application{ id:string; title:string; description:string; category:string; status:Status; priority:Priority; neighborhood:string; address:string; lat:number; lng:number; citizen:string; department?:string; createdAt:string; }
export interface WorkOrder{ id:string; applicationId:string; title:string; department:string; assignee:string; status:'Atandı'|'Devam Ediyor'|'Onay Bekliyor'|'Tamamlandı'; priority:Priority; dueDate:string; }
export interface Audit{ id:string; user:string; action:string; entity:string; time:string; ip:string; }
