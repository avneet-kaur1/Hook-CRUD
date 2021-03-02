import React from 'react';
// import firebase from '../firebase'
// import {storage} from '../firebase'
import { useForm } from 'react-hook-form';

export default function Demo() {

  const { register, handleSubmit, errors } = useForm();
    
  const onSubmit = (data) => {
    console.log(data)
  }
  
  console.log(errors);

  return (
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="file" placeholder="Profile picture" name="profilepicture" ref={register({required:true})} /><br/>
        <input type="text" placeholder="First name" name="firstname" ref={register({required: true, maxLength: 80})} /><br/>
        <input type="text" placeholder="Last name" name="lastname" ref={register({required: true, maxLength: 100})} /><br/>
        <input type="text" placeholder="Email" name="email" ref={register({required: true, pattern: /^\S+@\S+$/i})} /><br/>
        <input type="tel" placeholder="Mobile number" name="mobilenumber" ref={register({required: true, minLength: 6, maxLength: 12})} /><br/> 
        <input type="submit" />
      </form>
  );
}



<TableContainer>
            <div>
                <div>
                    <Contactform {...({ currentId, contactObjects, addOrEdit })} ></Contactform>
                </div>
                <div>
                <Table className={classes.table} size="small" aria-label="a dense table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Name</TableCell>
                                <TableCell>Mobile</TableCell>
                                <TableCell>Email</TableCell>
                                <TableCell>Address</TableCell>
                                <TableCell>Actions</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {
                                Object.keys(contactObjects).map((key) => (
                                    <TableRow key={key}>
                                        <TableCell align="left">{contactObjects[key].fullName}</TableCell>
                                        <TableCell align="left">{contactObjects[key].mobile}</TableCell>
                                        <TableCell align="left">{contactObjects[key].email}</TableCell>
                                        <TableCell align="left">{contactObjects[key].address}</TableCell>
                                        <TableCell className="bg-light" align="left">
                                            <Button variant="contained" color="primary" onClick={() => { setCurrentId(key) }}> Edit </Button>
                                            
                                            <br />

                                            <Button variant="contained" color="primary"  onClick={() => { onDelete(key) }}> Delete </Button>
                                        </TableCell>
                                    </TableRow>
                                ))
                            }
                        </TableBody>
                    </Table>
                </div>
            </div>
        </TableContainer>
    );
}