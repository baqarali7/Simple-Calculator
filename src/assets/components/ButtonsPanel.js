import React from 'react';
import style from '../css/styling.module.css';

import Button from '../components/Button';

const ButtonsPanel = (props) => {

    const buttons = [
                        "7", "8", "9", "/",
                        "6", "5", "4", "x" ,
                        "3", "2", "1", "-",
                        "0", ".", "+", "=",
                        "Reset"
                    ]

    return (
        <div className="px-2">

            <div className="row py-4">

                {buttons.map((btn, index) => {
                    return <Button key={index} text={btn} state={props.state} />
                })}

            </div>

        </div>
    )
}

export default ButtonsPanel;