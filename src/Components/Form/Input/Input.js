
import React from 'react';
import styles from '../Input/Input.module.scss'

const Input = ({ tag: Tag, name, type, placeholder,value,...props}) => {

    return (

        <>
            <div className={styles.wrapper}>
                <label htmlFor={name}>
                    <Tag placeholder={placeholder}
                        type={type}
                        className={styles.input}
                        value={value}
                        name={name}
                       {...props}
                    />

                </label>

            </div>

        </>
    )
}


export default Input