import React, { useEffect } from 'react';
import style from '../css/styling.module.css';

const Button = (props) => {

    const a = (input1, input2, operationTOPerform) => {

        if (operationTOPerform === "+") {
            return parseFloat(input1) + parseFloat(input2);
        }

        if (operationTOPerform === "-") {
            return parseFloat(input1) - parseFloat(input2);
        }

        if (operationTOPerform === "x") {
            return (parseFloat(input1) * parseFloat(input2)).toFixed(2);
        }

        if (operationTOPerform === "/") {
            return parseFloat(input1) / parseFloat(input2);
        }

    }

    const performOperation = (operationTOPerform) => {

        if (operationTOPerform) {

            if (props.state.operation === '') {
                props.state.setOperation(operationTOPerform);
                props.state.setInput(props.state.output);
                props.state.setOutput("0");
            }
            else {
                props.state.setOutput(old => String(a(props.state.input, old, operationTOPerform)).length > 8 ? "Out of Range" : a(props.state.input, old, operationTOPerform));
                props.state.setInput('0');
                props.state.setOperation('');
            }

        }

    }

    const onBtnClick = () => {

        if (props.text !== "+" && props.text !== "-" && props.text !== "x" && props.text !== "/" && props.text !== "=" && props.text !== "Reset") {
            props.state.setOutput(old => old === "0" ? (old.length < 8 ? props.text : old) : (old.length < 8 ? (old + props.text) : old));


        } else if (props.text === "=") {

            props.state.setOutput(old => String ( a(parseFloat(props.state.input), parseFloat(old), props.state.operation)).length > 8 ? "Out of Range" : a(parseFloat(props.state.input), parseFloat(old), props.state.operation));
            props.state.setInput('0');
            props.state.setOperation('');

        } else if (props.text === "Reset") {

            props.state.setOperation('');
            props.state.setInput('0');
            props.state.setOutput("0");

        } else {
            performOperation(props.text)
        }
    }

    return (
        <div className={props.text === "Reset" ? "col-12 mb-3 px-2" : "col-3 mb-3 px-2"}>

            <div className={style.button} style={(props.text === "=" || props.text === "Reset") ? { backgroundColor: "#9e005d" } : {}} onClick={onBtnClick}>
                {props.text}
            </div>

        </div>
    )
}

export default Button;