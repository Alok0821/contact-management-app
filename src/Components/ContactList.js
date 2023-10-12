import React from 'react'
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export default function ContactList(props) {
    const { addContactlist, removeContact } = props
    console.log(addContactlist);

    return (
        <div className='contact-list-container'>
            <div className="Contact-list-headline">
               <h2><small>ContactList</small></h2> 
            </div>

            <div className='Table-container'>

                <table className='table table-striped table-dark'>
                    <thead>
                        <tr>
                            <th>Icon</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {addContactlist.map((val) => {
                            return (
                                <tr>
                                    <td><AccountCircleIcon/></td>
                                    <td>{val.data.name}</td>
                                    <td>{val.data.email}</td>
                                    <td><span onClick={() => removeContact(val.id)}><RemoveCircleOutlineIcon /></span></td>
                                </tr>
                            )
                        }


                        )}

                    </tbody>
                </table>



            </div>

        </div>

    )
}
