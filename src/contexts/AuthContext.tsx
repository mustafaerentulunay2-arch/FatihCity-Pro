import {createContext,useContext,useState,ReactNode} from 'react';import {User} from '../types';import {users} from '../data/mock';
const C=createContext<{user:User|null;login:(email:string)=>void;logout:()=>void}>({user:null,login:()=>{},logout:()=>{}});
export const AuthProvider=({children}:{children:ReactNode})=>{const [user,setUser]=useState<User|null>(()=>JSON.parse(localStorage.getItem('fc_user')||'null'));const login=(email:string)=>{const u=users.find(x=>x.email===email)||users[0];setUser(u);localStorage.setItem('fc_user',JSON.stringify(u));};const logout=()=>{setUser(null);localStorage.removeItem('fc_user')};return <C.Provider value={{user,login,logout}}>{children}</C.Provider>};
export const useAuth=()=>useContext(C);
