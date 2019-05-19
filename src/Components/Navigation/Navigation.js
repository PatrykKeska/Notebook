import React from 'react';
import styles from '../Navigation/Navigation.module.scss'
import Button from '../Button/Button';

const Navigation = () => {

    return (
        <nav >
            <ul className={styles.wrapper}>
                {/* <li><a href="">Menu1</a></li>
                <li><a href="">Menu2</a></li>
                <li><a href="">Menu3</a></li> */}
                <Button>Menu1</Button>
                <Button>Menu1</Button>
                <Button>Menu1</Button>
            </ul>
        </nav>
    )
}


export default Navigation