import React from 'react'
import styles from './button.module.css';

export default function Button(props) {
  return (
    <div className={styles.title}>
      <p>this is button components: {props.name}</p>
      <button type="button">{props.text}</button>
    </div>
  )
}
