import React, {useState, useEffect} from 'react'
import './assets/style.css'

export default function App() {
    const [colorRed, setColorRed] = useState('FF')
    const [colorGreen, setColorGreen] = useState('FF')
    const [colorBlue, setColorBlue] = useState('FF')
    const [mainColor, setMainColor] = useState(mergeMainColor())

    useEffect(() => {
        function validateColor(color) {
            // CHECK IF IS HEX
            const regex = /^[0-9a-fA-F]+$/;

            if(!regex.test(color)) {
                setMainColor('Invalid value')
                return false
            }

            return true
        }

        if(validateColor(colorRed) && validateColor(colorGreen) && validateColor(colorBlue)) {
            setMainColor('#'+colorRed+colorGreen+colorBlue)
        }

    }, [colorRed, colorGreen, colorBlue])

    function mergeMainColor(r, g, b) {
        return '#'+colorRed+colorGreen+colorBlue
    }

    return (
        <>
            <div id="bg-color" style={{backgroundColor: mainColor}}></div>
            <div id="header">
                <div id="legend">{mainColor}</div>
                <div id="input-list">
                    <div className="input-control">
                        <label>red</label>
                        <input type="text" maxLength="2" value={colorRed} onChange={e => setColorRed(e.target.value)} />
                    </div>
                    <div className="input-control">
                        <label>green</label>
                        <input type="text" maxLength="2" value={colorGreen} onChange={e => setColorGreen(e.target.value)} />
                    </div>
                    <div className="input-control">
                        <label>blue</label>
                        <input type="text" maxLength="2" value={colorBlue} onChange={e => setColorBlue(e.target.value)} />
                    </div>
                </div>
                <div className="button-list">
                    <button>start</button>
                    <button>add color</button>
                </div>
            </div>
            <div id="bg-cycle"></div>
        </>
    )
}
