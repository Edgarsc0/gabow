import axios from 'axios'
import Head from 'next/head'
import React from 'react'
import styles from '../styles/Datos.module.scss'

const Datos = () => {
    const handleLogOut=async()=>{
        document.cookie = 'params=;max-age=0';
        window.location.href="/Mapas";

    }
    return (
        <>
            <Head>
                <title>GABOW</title>
            </Head>
            <div className={styles.container}>
                <table className={styles.tabla}>
                    <tbody>
                        <tr>
                            <td className={styles.celda}>Nombre: "Nombre del usuario"</td>
                            <td className={styles.celda}><button className={styles.button}>Editar</button></td>
                        </tr>
                        <tr>
                            <td className={styles.celda}>Correo: "Correo del usuario"</td>
                            <td className={styles.celda}><button className={styles.button}>Editar</button></td>
                        </tr>
                        <tr>
                            <td className={styles.celda}>Contraseña: "Contraseña del usuario"</td>
                            <td className={styles.celda}><button className={styles.button}>Editar</button></td>
                        </tr>
                        <tr>
                            <td className={styles.celda}><button onClick={handleLogOut}>Cerrar Sesion</button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Datos