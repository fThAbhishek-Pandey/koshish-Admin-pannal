import axios from 'axios';
import {toast} from 'react-toastify'
const AddHeader = async (backendURL, formdata, cirToken) => {
    try {
        console.log("backendURL", backendURL, cirToken)
        formdata.forEach((value,key)=>{
            console.log (key ," : ", value,"\n");
          })
        const {data} = await axios.post(backendURL+'/api/cocirculer/addheader', formdata,{headers:{authCociculertoken:cirToken}} )
       if (data.success) {
            toast.success(data.message);
       }
       else{
        toast.error(data.message);
       }
    } catch (error) {
        console.log(error)

    }
}

export default AddHeader