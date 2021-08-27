import React, { useState } from 'react';
import style from '../css/styling.module.css';

const CalculatorBase = (props) => {

    const [input, setInput] = useState(0);
    const [output, setOutput] = useState("0");
    const [operation, setOperation] = useState('');

    const state = {
        input, setInput,
        output, setOutput,
        operation, setOperation
    }

    return (
        <div className="container h-100" style={{width: '400px'}}>
            <div className="row vh-100 justify-content-center align-items-center">
                <div className="col">
                    
                    <div className={style.base + ' px-4 pt-5 pb-0'}>

                        {/* Screen Panel */}
                        { <props.screen state={state} /> }

                        {/* Button Panel */}
                        { <props.buttonPanel state={state} /> }

                    </div>

                </div>
            </div>
        </div>

    )
}

export default CalculatorBase;