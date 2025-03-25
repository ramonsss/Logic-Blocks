import React from "react";

const LEDCircuit = ({ isOn }) => {
    return (
        <svg width="300" height="200" viewBox="0 0 300 200">
            {/* Protoboard */}
            <rect x="20" y="50" width="260" height="100" fill="#fff" stroke="#bbb" strokeWidth="3" />
            {/* Linhas horizontais da protoboard */}
            {[50, 70, 90, 110, 130, 150, 170, 190].map(y => (
                <line key={y} x1="20" y1={y} x2="240" y2={y} stroke="#ddd" strokeWidth="2" />
            ))}
            {/* Buracos de conexão na protoboard */}
            {[50, 70, 90, 110, 130, 150, 170, 190].map(y => (
                <circle key={y} cx="30" cy={y} r="3" fill="#bbb" />
            ))}
            {[50, 70, 90, 110, 130, 150, 170, 190].map(y => (
                <circle key={y} cx="230" cy={y} r="3" fill="#bbb" />
            ))}

            {/* Corpo do LED */}
            <defs>
                <radialGradient id="ledGradient" cx="50%" cy="30%" r="50%">
                    <stop offset="0%" stopColor={isOn ? "#00FF00" : "#333"} /> {/* Verde vibrante */}
                    <stop offset="100%" stopColor={isOn ? "#006400" : "#222"} /> {/* Verde escuro */}
                </radialGradient>
            </defs>
            <ellipse cx="150" cy="120" rx="25" ry="30" fill="url(#ledGradient)" stroke="#000" strokeWidth="2" />

            {/* Sombra para dar a sensação de profundidade */}
            {isOn && (
                <circle cx="150" cy="105" r="8" fill="white" opacity="0.7" />
            )}

            {/* Pernas do LED */}
            <line x1="135" y1="140" x2="135" y2="155" stroke="#777" strokeWidth="4" />
            <line x1="165" y1="140" x2="165" y2="155" stroke="#777" strokeWidth="4" />
            
            {/* Base metálica do LED */}
            <rect x="135" y="135" width="30" height="6" fill="#666" stroke="#333" strokeWidth="2" />

            {/* Fios do circuito */}
            {/* Fio positivo (vermelho) */}
            <line x1="165" y1="155" x2="215" y2="155" stroke="red" strokeWidth="2" />
            <circle cx="215" cy="155" r="4" fill="red" />

            {/* Fio negativo (preto) */}
            <line x1="135" y1="155" x2="85" y2="155" stroke="black" strokeWidth="2" />
            <circle cx="85" cy="155" r="4" fill="black" />

            {/* Resistores */}
            <rect x="85" y="140" width="10" height="5" fill="#800000" stroke="#000" strokeWidth="1" />
            <rect x="215" y="140" width="10" height="5" fill="#800000" stroke="#000" strokeWidth="1" />

            {/* Fonte de energia */}
            <rect x="215" y="40" width="50" height="20" fill="#f1c40f" stroke="#333" strokeWidth="2" />
            <text x="240" y="55" fontSize="12" fill="#333">+ 5V</text>
            <circle cx="235" cy="60" r="3" fill="green" />
            
            <rect x="80" y="40" width="50" height="20" fill="#f1c40f" stroke="#333" strokeWidth="2" />
            <text x="105" y="55" fontSize="12" fill="#333">GND</text>
            <circle cx="105" cy="60" r="3" fill="red" />

            {/* Transistor NPN */}
            {/* Base */}
            <circle cx="150" cy="85" r="10" fill="blue" stroke="black" strokeWidth="2" />
            <text x="145" y="90" fontSize="10" fill="white">B</text>

            {/* Coletor */}
            <circle cx="185" cy="85" r="10" fill="orange" stroke="black" strokeWidth="2" />
            <text x="180" y="90" fontSize="10" fill="white">C</text>

            {/* Emissor */}
            <circle cx="115" cy="85" r="10" fill="green" stroke="black" strokeWidth="2" />
            <text x="110" y="90" fontSize="10" fill="white">E</text>

            {/* Fios para conectar o transistor */}
            <line x1="150" y1="85" x2="150" y2="120" stroke="black" strokeWidth="2" />
            <line x1="185" y1="85" x2="215" y2="155" stroke="black" strokeWidth="2" />
            <line x1="115" y1="85" x2="85" y2="155" stroke="black" strokeWidth="2" />

            {/* Conectando o transistor à fonte e GND com resistores */}
            {/* Conexão do coletor do transistor ao resistor de 5V */}
            <line x1="185" y1="85" x2="215" y2="140" stroke="black" strokeWidth="2" />
            <line x1="215" y1="140" x2="215" y2="135" stroke="black" strokeWidth="2" />

            {/* Conexão do emissor do transistor ao GND com resistor */}
            <line x1="115" y1="85" x2="85" y2="140" stroke="black" strokeWidth="2" />
            <line x1="85" y1="140" x2="85" y2="135" stroke="black" strokeWidth="2" />

            {/* Jumpers para 5V e GND */}
            {/* Jumper 5V */}
            <line x1="215" y1="150" x2="215" y2="50" stroke="red" strokeWidth="2" />
            <line x1="215" y1="50" x2="230" y2="50" stroke="red" strokeWidth="2" />

            {/* Jumper GND */}
            <line x1="85" y1="158" x2 ="80" y2="50" stroke="black" strokeWidth="2" />
        </svg>
    );
};

export default LEDCircuit;
