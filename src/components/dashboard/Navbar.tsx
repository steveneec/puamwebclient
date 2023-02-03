import styles from "@/styles/components/navbar.module.css";
import { FcMenu } from "react-icons/fc";

export default function Navbar(props: props) {
  return (
    <nav className={styles.nav}>
      <div className={styles.content}>
        <div>
          <FcMenu size={24} onClick={() => props.actionMenu(true)} />
        </div>
        <div>logo</div>
        <span></span>
        <div>options</div>
      </div>
    </nav>
  );
}

interface props {
  actionMenu: Function;
}
