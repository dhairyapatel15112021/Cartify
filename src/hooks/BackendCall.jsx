import axios from 'axios';
export const BackendCall = async (item, index, stateVariable, setStateFunction) => {
    try{
        const controller = new AbortController(); // AbortController is for cancle out the promises.
        const response = await axios.get(item.image, {
            responseType: 'blob',
            signal : controller.signal
        });
        const imageURL = URL.createObjectURL(response.data) //blob is binary large object
        const copyStateVariable = [...stateVariable];
        const ele = copyStateVariable[index];
        ele.image = imageURL;
        ele.loading = false;
        copyStateVariable[index] = ele;
        setStateFunction(copyStateVariable);
    }
    catch(err){
        console.log(err);
    }
}
