import Layout from "@/components/dashboard/Layout";
import { useUser } from "@/context/user-context";
import styles from "@/styles/pages/adminhome.module.css";

export default function Admin() {
  const { user } = useUser();

  return (
    <Layout>
      <div className="dashboard-content">
        <div className={styles.header}>
          <h2>Hola {user.user?.firstname}</h2>
          <small>Estás al día</small>
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticProps(context: any) {
  return {
    props: {
      protected: true,
      userTypes: ["admin"],
    },
  };
}
