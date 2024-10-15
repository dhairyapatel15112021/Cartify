import { useEffect,useState } from 'react'
import { BackendCall } from './BackendCall';

export const useWatch = (watches) => {
    const [watch, setWatches] = useState(watches);
    useEffect(()=>{
        watch.map((item, index) => {
            return (
                BackendCall(item, index, watch, setWatches)
            )
        });
    },[watches]);
  return (watch)
}
