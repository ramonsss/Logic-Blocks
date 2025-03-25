import React from "react";

const LogicGate = ({ gateType, input1, input2 }) => {
    const computeOutput = () => {
        switch (gateType) {
            case "AND": return input1 && input2;
            case "OR": return input1 || input2;
            case "XOR": return input1 !== input2;
            case "NAND": return !(input1 && input2);
            default: return false;
        }
    };

    return (
        <div>
            <h3>Porta: {gateType}</h3>
            <p>Saída: {computeOutput() ? "1" : "0"}</p>
        </div>
    );
};

export default LogicGate;
