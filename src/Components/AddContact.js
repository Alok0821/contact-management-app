import React ,{useState} from 'react'
import Validate from './validation/Validate';

export default function AddContact({addContacts}) {
    const[contact,setContact]=useState({
        name:"",
        email:""
    });

    const handleChange=(e)=>{
        const {value,id}=e.target
        // console.log(e.target.id,e.target.value)
        setContact({
            ...contact,
            [id]:value
        });
    };

    const handleAdd=(e)=>{
        e.preventDefault()
        if(contact.name==="" || contact.email===""){
            alert("please enter the required field")
            return
        }
        // console.log(contact);
        addContacts(contact)
        setContact({
            name:"",
            email:""
        });

    };

    const [errObj, setErrObj] = useState({})
    const handleBlur = (e) => {
        const { id, value } = e.target;
        console.log(value);
        const errors = Validate(id, value);
        console.log(errors);
        setErrObj(errors);
    }



    return (
        <div className='addcontact-container'>
            <div>
                <h3> Add Contact</h3>
            </div>
            <br />
            <form action="">
                <label>Name </label><br />
                <input type="text" onBlur={handleBlur} onChange={handleChange} placeholder='Please input your name' id='name' value={contact.name} autoComplete='off'/><br />
                <span className="error">{errObj?.name ? errObj?.name : null}</span><br />
                <label>Email </label><br />
                <input type="email"onBlur={handleBlur}  onChange={handleChange} placeholder='Please input your email' id='email' value={contact.email} autoComplete='off'/><br />
                <span className="error">{errObj?.email ? errObj?.email : null}</span><br />
            </form>
            <br />
            <button className='btn btn-primary' onClick={handleAdd}>Add Contact</button>

        </div>
    )
}
