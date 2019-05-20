import React from 'react';
import styles from '../Navigation/Navigation.module.scss'
import { NavLink } from 'react-router-dom'

const Navigation = () => {

    return (
        <nav >
            <ul className={styles.wrapper}>
                <li><NavLink exact activeClassName={styles.activeLink} to='/'>Main</NavLink></li>
                <li><NavLink activeClassName={styles.activeLink} to='/Contacts'>Contacts</NavLink></li>
                <li><NavLink activeClassName={styles.activeLink} to='/ToDo'>ToDo</NavLink></li>



            </ul>
        </nav>
    )
}


export default Navigation