import { InputHTMLAttributes } from "react";
import styles from "../styles/components/input.module.css";

export default function Input(props: props) {
  return (
    <div className={styles.container}>
      {props.label && (
        <label htmlFor={props.id}>
          {props.label}
          <span> {props.required && "*"}</span>
        </label>
      )}
      <input {...props} />
      {props.helptext && <small>{props.helptext}</small>}
    </div>
  );
}

interface props extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  helptext?: string;
}
