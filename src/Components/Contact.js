import React, { useState, useEffect } from 'react';
import Contactform from "./Contactform";
import firebaseDb from "../firebase";
import { makeStyles } from '@material-ui/core/styles';
import { TableContainer, Table, TableHead, TableBody,TableCell, TableRow } from '@material-ui/core';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
  });


const Contact = () => {
    const classes = useStyles();
    var [currentId, setCurrentId] = useState('');
    var [contactObjects, setContactObjects] = useState({})
    // console.log(setCurrentId)
    console.log(contactObjects)
  
    useEffect(() => {
        firebaseDb.child('contacts').on('value', snapshot => {
            if (snapshot.val() != null) {
                setContactObjects({
                    ...snapshot.val()
                });
            }
        })
    }, [])


    const addOrEdit = (obj) => {
        if (currentId == '')
            firebaseDb.child('contacts').push(
                obj,
                error => {
                    if (error)
                        console.log(error)
                    else
                        setCurrentId('')
                })
        else
            firebaseDb.child(`contacts/${currentId}`).set(
                obj,
                error => {
                    if (error)
                        console.log(error)
                    else
                        setCurrentId('')
                })
    }

    const onDelete = id => {
        if (window.confirm('Are you sure to delete this record?')) {
            firebaseDb.child(`contacts/${id}`).remove(
                error => {
                    if (error)
                        console.log(error)
                    else
                        setCurrentId('')
                })
        }
    }


    return (
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

export default Contact;