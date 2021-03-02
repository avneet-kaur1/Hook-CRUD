import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles';
import React, { useState, useEffect } from 'react';
import Container from '@material-ui/core/Container';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import ImportContactsIcon from '@material-ui/icons/ImportContacts';
import { useForm } from 'react-hook-form';

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.primary.main,
    },
    form: {
        width: '100%',
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

const Contactform = (props) => {

    const classes = useStyles();
    // const [disable, setDisabled] = useState(true)
    // const [nameError, setNameError] = useState(null)
    const { register, errors } = useForm();
    const initialFieldValues = {
        fullName: '',
        mobile: '',
        email: '',
        address: ''
    }

    var [values, setValues] = useState(initialFieldValues)
    console.log(values)
    
    useEffect(() => {

        if (props.currentId == '')
            setValues({ ...initialFieldValues })
        else
            setValues({
                ...props.contactObjects[props.currentId]
            });

    }, [props.currentId, props.contactObjects])

    const handleInputChange = e => {
        var { name, value } = e.target;
        setValues({
            ...values,
            [name]: value
        })
    }

    const handleFormSubmit = e => {
        e.preventDefault();
console.log("-----",errors)
        props.addOrEdit(values);
    };

    return (
        <Container component="main" maxWidth="xs">
          
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <ImportContactsIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    User Details
                </Typography>

                <form className={classes.form} onSubmit={handleFormSubmit}>
                    <Grid container spacing={2}>

                        <Grid item xs={12} >
                            <TextField
                                autoComplete="fname"
                                type="text"
                                name="fullName"
                                variant="outlined"
                                fullWidth
                                id="fullName"
                                label="Full Name"
                                value={values.fullName}
                                autoFocus
                                onChange={handleInputChange}
                                ref={register({required: true, maxLength: 10})}
                            />
                        </Grid>

                        <Grid item xs={12} >
                            <TextField
                                autoComplete="mobilenumber"
                                // type="number"
                                name="mobile"
                                variant="outlined"
                                fullWidth
                                id="mobile"
                                label="mobile number"
                                value={values.mobile}
                                onChange={handleInputChange}
                                ref={register({required: true, minLength: 6, maxLength: 12})}
                            />
                        </Grid>

                        <Grid item xs={12} >
                            <TextField
                                variant="outlined"
                                type="email"
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                value={values.email}
                                onChange={handleInputChange}
                                ref={register({required: true, pattern: /^\S+@\S+$/i})}
                            />

                        </Grid>


                        <Grid item xs={12} >

                            <TextField
                                variant="outlined"
                                fullWidth
                                id="address"
                                label="Address"
                                name="address"
                                autoComplete="address"
                                value={values.address}
                                onChange={handleInputChange}
                                ref={register({ required: true })}
                            />
                        </Grid>

                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                            
                        >
                            SAVE
                        </Button>
                    </Grid>
                </form>
            </div>
            <Box mt={5}>
            </Box>
        </Container>
    );
}

export default Contactform;