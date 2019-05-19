import React from 'react'
import styles from '../Header/Header.module.scss'
import Button from '../Button/Button';




const Header = () => {

    return (
        <header className={styles.wrapper}>

            <Button>Add New Item</Button>
            <h1 className={styles.wrapper__h1}>Notebook - help yourself to organize your life</h1>
        </header>
    )
}


export default Header