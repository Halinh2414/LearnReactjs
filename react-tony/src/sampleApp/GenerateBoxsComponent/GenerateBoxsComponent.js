import React, {useState} from 'react';
import styles from './generateBox.module.css';

function GenerateBoxsComponent() {
    const [number, setNumber] = useState(0);
    const [listBox, setListBox] = useState([]);

    function onChangeInput(event) {
        const {value} = event.target;
        const regex = /^[0-9\b]+$/;
        if (value === '' || regex.test(value)) {
            setNumber(value);
        }
    }
    function handleClick() {
        if  (number > 0 && number < 129) {
            const newBoxs = [];
            for(let i = 0; i < number; i++) {
                newBoxs.push(i);
            }
            setListBox(newBoxs); 
        }
    } 
    return (
        <div>
            Number boxs 
            <br/>
            <input type="text" name="numberBox" value={number} onChange={onChangeInput} />
            <button type="button" onClick={handleClick}>Generate</button>
            <ul>
                {listBox.length > 0 ? listBox.map(box => (
                    <li className={styles.box} key={box}>Box #{box}</li>
                )) : <div>no data</div>}
            </ul>
        </div>
    );
}

export default GenerateBoxsComponent;