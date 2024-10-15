import { useEffect,useState } from 'react'
import { BackendCall } from './BackendCall';

export const useElectronic = (electronics) => {
    const [electronic, setElectronics] = useState(electronics);
    useEffect(()=>{
        electronic.map((item,index)=>{
            return(
                BackendCall(item,index,electronic,setElectronics)
            )
        })
    },[electronics]);
  return (
   electronic
  )
}
