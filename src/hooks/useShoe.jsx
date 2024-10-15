import { useEffect,useState } from 'react'
import { BackendCall } from './BackendCall';

export const useShoe = (shoes) => {
    const [shoe, setShoes] = useState(shoes);
    useEffect(() => {
        shoe.map((item, index) => {
            return (
                BackendCall(item, index, shoe, setShoes)
            )
        });
    },[shoes]);
    return (shoe)
}
