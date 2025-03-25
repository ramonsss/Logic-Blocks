import React from "react";

const InputPin = ({ label, state, toggle }) => {
    return (
        <button onClick={toggle}>
            {label}: {state ? "1" : "0"}
        </button>
    );
};

export default InputPin;
