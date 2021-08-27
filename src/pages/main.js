import React from 'react';
import styles from '../assets/css/styling.module.css';
import CalculatorBase from '../assets/components/CalculatorBase';
import Screen from '../assets/components/Screen'; 
import ButtonsPanel from '../assets/components/ButtonsPanel';

const Main = () => {
    return (
            <CalculatorBase 
                screen={Screen}
                buttonPanel={ButtonsPanel}
            />
    )
}

export default Main;