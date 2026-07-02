import {Application, WorkOrder, User, Audit} from '../types';
export const neighborhoods=['Aksaray','Balat','Karagümrük','Kocamustafapaşa','Yedikule','Topkapı','Sultanahmet','Süleymaniye'];
export const departments=['Fen İşleri Müdürlüğü','Temizlik İşleri Müdürlüğü','Park ve Bahçeler Müdürlüğü','Zabıta Müdürlüğü','Bilgi İşlem Müdürlüğü','Afet İşleri Müdürlüğü'];
export const users:User[]=[
{id:'1',name:'Admin Kullanıcı',email:'admin@fatih.bel.tr',role:'Admin',active:true},
{id:'2',name:'Operatör Ayşe',email:'operator@fatih.bel.tr',role:'Operator',active:true},
{id:'3',name:'Fen Müdürü Mehmet',email:'fen@fatih.bel.tr',role:'DepartmentManager',department:'Fen İşleri Müdürlüğü',active:true},
{id:'4',name:'Saha Personeli Ali',email:'saha@fatih.bel.tr',role:'FieldStaff',department:'Fen İşleri Müdürlüğü',active:true},
{id:'5',name:'Vatandaş Mustafa',email:'vatandas@mail.com',role:'Citizen',active:true}
];
export const applications:Application[]=[
{id:'FAT-001',title:'Aksaray’da kaldırım taşı kırık',description:'Yaya yolu tehlikeli durumda.',category:'Yol/Kaldırım',status:'Yeni',priority:'Yüksek',neighborhood:'Aksaray',address:'Küçük Langa Cd.',lat:41.009,lng:28.952,citizen:'Mustafa Eren',createdAt:'2026-07-02'},
{id:'FAT-002',title:'Balat’ta çöp konteyneri taşmış',description:'Koku ve görüntü kirliliği var.',category:'Temizlik',status:'Müdürlüğe Atandı',priority:'Normal',neighborhood:'Balat',address:'Vodina Cd.',lat:41.030,lng:28.948,citizen:'Ayhan K.',department:'Temizlik İşleri Müdürlüğü',createdAt:'2026-07-02'},
{id:'FAT-003',title:'Karagümrük’te sokak lambası arızalı',description:'Sokak gece karanlık kalıyor.',category:'Aydınlatma',status:'İş Emri',priority:'Acil',neighborhood:'Karagümrük',address:'Fevzi Paşa Cd.',lat:41.023,lng:28.936,citizen:'Selin D.',department:'Fen İşleri Müdürlüğü',createdAt:'2026-07-01'},
{id:'FAT-004',title:'Yedikule’de parkta bank kırık',description:'Park ekipmanı hasarlı.',category:'Park',status:'Sahada',priority:'Normal',neighborhood:'Yedikule',address:'Yedikule Mah.',lat:41.004,lng:28.922,citizen:'Emre T.',department:'Park ve Bahçeler Müdürlüğü',createdAt:'2026-07-01'},
{id:'FAT-005',title:'Sultanahmet’te gürültü şikâyeti',description:'Gece yüksek ses bildirimi.',category:'Zabıta',status:'Tamamlandı',priority:'Düşük',neighborhood:'Sultanahmet',address:'Divanyolu Cd.',lat:41.008,lng:28.978,citizen:'Zeynep A.',department:'Zabıta Müdürlüğü',createdAt:'2026-06-30'}
];
export const workOrders:WorkOrder[]=[
{id:'WO-001',applicationId:'FAT-003',title:'Sokak lambası onarımı',department:'Fen İşleri Müdürlüğü',assignee:'Saha Personeli Ali',status:'Atandı',priority:'Acil',dueDate:'2026-07-03'},
{id:'WO-002',applicationId:'FAT-004',title:'Park bankı değişimi',department:'Park ve Bahçeler Müdürlüğü',assignee:'Veli Usta',status:'Devam Ediyor',priority:'Normal',dueDate:'2026-07-04'},
{id:'WO-003',applicationId:'FAT-002',title:'Konteyner boşaltma',department:'Temizlik İşleri Müdürlüğü',assignee:'Temizlik Ekibi 2',status:'Tamamlandı',priority:'Normal',dueDate:'2026-07-02'}
];
export const audits:Audit[]=[
{id:'A1',user:'Operatör Ayşe',action:'Başvuru müdürlüğe atandı',entity:'FAT-002',time:'2026-07-02 14:12',ip:'192.168.1.25'},
{id:'A2',user:'Fen Müdürü Mehmet',action:'İş emri oluşturuldu',entity:'WO-001',time:'2026-07-02 14:18',ip:'192.168.1.31'},
{id:'A3',user:'Admin Kullanıcı',action:'Kullanıcı rolü güncellendi',entity:'User',time:'2026-07-02 13:40',ip:'192.168.1.10'}
];
