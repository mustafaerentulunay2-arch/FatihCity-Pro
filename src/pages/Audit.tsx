import {audits} from '../data/mock';import Table from '../components/Table';
export default function Audit(){return <><h1>Audit Log</h1><Table headers={['Kullanıcı','İşlem','Kayıt','Zaman','IP']}>{audits.map(a=><tr key={a.id}><td>{a.user}</td><td>{a.action}</td><td>{a.entity}</td><td>{a.time}</td><td>{a.ip}</td></tr>)}</Table></>}
