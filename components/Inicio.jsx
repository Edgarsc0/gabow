import React, { useState } from 'react'
import { IconButton, Snackbar, Modal, Box, Typography, Link, InputAdornment, Grid } from '@mui/material'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { signIn,signOut  } from "next-auth/react"
import styles from '../styles/Inicio.module.scss'

import { Visibility, VisibilityOff } from '@mui/icons-material';


const Inicio = () => {

    const [open, setOpen] = useState(false)  

    return (
        <>
            <Snackbar open anchorOrigin={{ horizontal: 'right', vertical: 'top' }} className={styles.container}>
                <IconButton onClick={() => signIn()}>
                    <AccountCircleIcon className={styles.icon} />
                </IconButton>
            </Snackbar>
        </>
    )
}

export default Inicio