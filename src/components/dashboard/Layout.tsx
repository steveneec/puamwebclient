import { PropsWithChildren, useState, useEffect } from "react";
import Navbar from "./Navbar";
import styles from "@/styles/components/layout.module.css";
import LeftNav from "./LeftNav";
import { navOptionType } from "@/types";
import { useRouter } from "next/router";
import { AiOutlineUser } from "react-icons/ai";
import { BiStats } from "react-icons/bi";
import { IoFileTrayFullOutline } from "react-icons/io5";

export default function Layout(props: props) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  //hooks
  const router = useRouter();

  const options: navOptionType[] = [
    {
      label: "Resúmen",
      path: "/dashboard/admin",
      action: () => router.push("/dashboard/admin"),
      icon: <BiStats size={24} />,
    },
    {
      label: "Usuarios",
      path: "/dashboard/admin/users",
      action: () => router.push("/dashboard/admin/users"),
      icon: <AiOutlineUser size={24} />,
    },
    {
      label: "Actividades",
      path: "/dashboard/admin/activities",
      action: () => router.push("/dashboard/admin/activities"),
      icon: <IoFileTrayFullOutline size={24} />,
    },
  ];

  useEffect(() => {
    window.addEventListener("resize", onResize, false);
  }, []);

  function onResize() {
    if (window.innerWidth > 768) {
      setIsMenuOpen(false);
    }
  }

  return (
    <div>
      <Navbar actionMenu={setIsMenuOpen} />
      <LeftNav
        options={options}
        isOpen={isMenuOpen}
        setIsOpen={setIsMenuOpen}
      />
      <div className={styles.content}>{props.children}</div>
    </div>
  );
}

interface props extends PropsWithChildren {}
