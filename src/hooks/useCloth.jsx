import { useEffect,useState } from 'react'
import { BackendCall } from './BackendCall';

export const useCloth = (clothes) => {
    const [cloth, setCloth] = useState(clothes);
    useEffect(()=>{
        cloth.map((item,index)=>{
            return(
                BackendCall(item,index,cloth,setCloth)
            )
        })
    },[clothes]);
  return (cloth)
}
