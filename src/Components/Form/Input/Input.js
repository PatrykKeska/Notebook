
import React from 'react';
import styles from '../Input/Input.module.scss'

const Input = ({ tag: Tag, name, type, placeholder,value, onChange}) => {

    return (

        <>
            <div className={styles.wrapper}>
                <label htmlFor={name}>
                    <Tag placeholder={placeholder}
                        type={type}

                    />

                </label>

            </div>

        </>
    )
}


export default Input