import React, { useState } from "react";
import GateSelector from "./GateSelector";
import LogicGate from "./LogicGate";
import InputPin from "./InputPin";
import Led from "./Led";

const App = () => {
    const [gateType, setGateType] = useState("AND");
    const [input1, setInput1] = useState(false);
    const [input2, setInput2] = useState(false);

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
        <div style={{ textAlign: "center" }}>
            <h1>Simulador de Portas Lógicas</h1>
            <GateSelector setGateType={setGateType} />
            <div style={{ margin: "20px" }}>
                <InputPin label="Entrada 1" state={input1} toggle={() => setInput1(!input1)} />
                <InputPin label="Entrada 2" state={input2} toggle={() => setInput2(!input2)} />
            </div>
            <LogicGate gateType={gateType} input1={input1} input2={input2} />
            <Led isOn={computeOutput()} />
        </div>
    );
};

export default App;
