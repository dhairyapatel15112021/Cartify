import { useEffect, useState } from 'react'
import { BackendCall } from './BackendCall';

export const useMakeUp = (makeup) => {
    const [makeUp, setMakeUp] = useState(makeup);
    useEffect(() => {
        makeUp.map((item, index) => {
            return (
                BackendCall(item, index, makeUp, setMakeUp)
            )
        });
    },[makeup]);
    return (
        makeUp
    )
}
