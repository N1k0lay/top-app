import React, {useEffect} from 'react';
import styles from './Up.module.css';
import UpIcon from './up.svg';
import cn from 'classnames';
import {useScrollY} from "../../hooks/useScrollY";
import {motion, useAnimation} from "framer-motion";
import {ButtonIcon} from "../ButtonIcon/ButtonIcon";

export const Up = ():JSX.Element => {
    const control = useAnimation();
    const y = useScrollY();

    useEffect(() => {
        void control.start({opacity: y / document.body.scrollHeight});
    }, [y, control]);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };
    return (
        <motion.div
            className={styles.up}
            animate={control}
            initial={{opacity: 0}}
        >
            <ButtonIcon  appearance={"white"} icon={"menu"}  onClick={scrollToTop}/>
        </motion.div>
    );
};