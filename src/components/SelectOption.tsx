import { selectOption } from "@/types";
import { SelectHTMLAttributes } from "react";
import styles from "@/styles/components/selectoption.module.css";

export default function SelectOption(props: props) {
  return (
    <div className={styles.select}>
      {props.label && <label htmlFor={props.id}>{props.label}</label>}
      <select {...props}>
        {props.options.map((option, key) => (
          <option value={option.value} key={key}>
            {option.text}
          </option>
        ))}
      </select>
      {props.helptext && <small>{props.helptext}</small>}
    </div>
  );
}

interface props extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  helptext?: string;
  options: selectOption[];
}
