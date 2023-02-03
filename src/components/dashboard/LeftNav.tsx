import { navOptionType } from "@/types";
import styles from "@/styles/components/leftnav.module.css";
import { useRouter } from "next/router";

export default function LeftNav(props: props) {
  const router = useRouter();

  return (
    <nav
      className={!props.isOpen ? styles.nav : `${styles.nav} ${styles.navOpen}`}
    >
      <div className={styles.content}>
        <div></div>
        <div>
          {props.options.map((option, key) => (
            <div
              key={key}
              className={`${styles.option} ${
                router.pathname === option.path && styles.optionactive
              }`}
              onClick={() => router.push(option.path as string)}
            >
              {option.icon}
              <p>{option.label}</p>
            </div>
          ))}
        </div>
      </div>
      <div
        className={styles.overlay}
        onClick={() => props.setIsOpen(false)}
      ></div>
    </nav>
  );
}

interface props {
  options: navOptionType[];
  isOpen: boolean;
  setIsOpen: Function;
}
