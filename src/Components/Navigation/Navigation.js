import React from 'react';
import styles from '../Navigation/Navigation.module.scss'
import { NavLink } from 'react-router-dom'

const Navigation = () => {

    return (
        <nav >
            <ul className={styles.wrapper}>
                <li><NavLink to='/'>Main</NavLink></li>
                <li><NavLink to='/Contacts'>Contacts</NavLink></li>
                <li><NavLink to='/ToDo'>ToDo</NavLink></li>



            </ul>
        </nav>
    )
}


export default Navigation