import React from 'react'
import { emailregEx, nameregEx } from './regex';
let errors={};
const Validate = (id,value) => {
    if(id==="name"){
        if(value===""){
            errors={...errors,[id]:`${id} is required`};
        }else if(!nameregEx.test(value)){
            errors={...errors,[id]:`${id} is not valid`};
        }else{
            errors={...errors,[id]:""}

        }
    }

    if(id==="email"){
        if(value===""){
            errors={...errors,[id]:`${id} is required`};
        }else if(!emailregEx.test(value)){
            errors={...errors,[id]:`${id} is not valid`};
        }else{
            errors={...errors,[id]:""}

        }
    }

  return errors;
};

export default Validate;
