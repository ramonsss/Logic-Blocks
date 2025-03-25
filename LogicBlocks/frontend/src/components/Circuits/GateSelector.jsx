import React from "react";

const GateSelector = ({ setGateType }) => {
    return (
        <div>
            <h3>Selecione a Porta Lógica:</h3>
            <button onClick={() => setGateType("AND")}>AND</button>
            <button onClick={() => setGateType("OR")}>OR</button>
            <button onClick={() => setGateType("XOR")}>XOR</button>
            <button onClick={() => setGateType("NAND")}>NAND</button>
        </div>
    );
};

export default GateSelector;
