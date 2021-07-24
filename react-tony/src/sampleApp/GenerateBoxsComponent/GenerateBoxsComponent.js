import React, {useState} from 'react';
import styles from './generateBox.module.css';

function GenerateBoxsComponent(props) {
    const [number, setNumber] = useState('');
    const [listBox, setListBox] = useState('');
    function onChangeInput(event) {
        const {value} = event.target;
        const regex = /^[0-9\b]+$/;
        if (value === '' || regex.test(value)) {
            setNumber(value);
        }
    }
    function handleClick() {
        if  (number > 0 && number < 129) {
            var listBox1 = Array.from({ length: number }, (_, i) => i+1);
            var listBox = listBox1.length > 0 && listBox1.map((e, idx) => (
                <li className={styles.box} key={`item`+idx} >
                    Box #{idx + 1}
                </li>
            ));
            setListBox(listBox); 
        }
        return listBox;
    } 
    return (
        <div>
            Number boxs 
            <br/>
            <input type="text" name="numberBox" value={number} onChange={onChangeInput} />
            <button type="button" onClick={handleClick}>Generate</button>
            <ul>
                {listBox}
            </ul>
        </div>
    );
}

export default GenerateBoxsComponent;