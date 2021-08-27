import React from 'react';
import style from '../css/styling.module.css';

const Screen = (props) => {
    return (
        <div className={style.screen_panel + " px-4"}>
            
            {/* Output */}
            <div>
                { props.state.output }
            </div>


        </div>
    )
}

export default Screen;