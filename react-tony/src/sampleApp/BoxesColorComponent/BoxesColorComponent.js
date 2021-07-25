import React, { useState } from 'react';
import styles from './BoxesColor.module.css'

function BoxesColorComponent(props) {
    const color = ['red', 'yellow', 'aqua', 'purple'];
    const [colorBoxes, setColorBoxes] = useState(color);
    const [isActive, setIsActive] = useState(true);
    function handleChangeColorBox(colors,) {
        setIsActive(!isActive);
        if (isActive === true) {
            const newColors = [colors, colors, colors, colors];
            setColorBoxes(newColors);
        } else {
            const newColors = color;
            setColorBoxes(newColors);
        }
    }
    return (
        <div>
            <ul className={styles.wrapperBox}>
            {colorBoxes.map((e, idx) => (
                <li className={styles.box} key={`item`+idx} style={{backgroundColor: e}} onClick={() => {handleChangeColorBox(e)}}>
                    {color[idx]}
                </li>
            ))}
            </ul>
        </div>
    );
}

export default BoxesColorComponent;