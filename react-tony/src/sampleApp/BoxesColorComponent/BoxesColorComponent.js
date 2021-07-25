import React, { useState } from 'react';
import styles from './BoxesColor.module.css'

const color = ['red', 'yellow', 'aqua', 'purple'];

function BoxesColorComponent() {
    // States
    const [colorBoxes, setColorBoxes] = useState(color);
    const [isActive, setIsActive] = useState(true);

    function handleChangeColorBox(colors) {
        setIsActive(prevState => !prevState);

        if(!isActive) {
            const newColors = color;
            setColorBoxes(newColors);
            return;
        }
        const newColors = [colors, colors, colors, colors];
        setColorBoxes(newColors);

        // if (isActive) {
        //     const newColors = [colors, colors, colors, colors];
        //     setColorBoxes(newColors);
        // } else {
        //     const newColors = color;
        //     setColorBoxes(newColors);
        // }
    }
    return (
        <div>
            <ul className={styles.wrapperBox}>
            {colorBoxes.length > 0 && colorBoxes.map((boxItem, idx) => (
                <li className={styles.box} key={`item`+idx} style={{backgroundColor: boxItem}} onClick={() => handleChangeColorBox(boxItem)}>
                    {color[idx]}
                </li>
            ))}
            </ul>
        </div>
    );
}

export default BoxesColorComponent;