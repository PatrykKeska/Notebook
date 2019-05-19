import React from 'react'
import styles from '../Button/Button.module.scss'


const Button = ({ children, href, }) => (

    <>
        {
            href ? (
                <a
                    href={href}
                    className={styles.Button__button}
                >
                    {children}
                </a>
            ) : (
                    <button className={styles.Button__button}>{children}</button>
                )
        }
    </>)



export default Button 