import React from 'react'
import styles from '../Button/Button.module.scss'


const Button = ({ children, href, ...props }) => (

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
                    <button className={styles.Button__button} {...props}>{children}</button>
                )
        }
    </>)



export default Button 