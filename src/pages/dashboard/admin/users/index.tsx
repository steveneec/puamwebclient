import Layout from "@/components/dashboard/Layout";
import { GrChapterAdd } from "react-icons/gr";
import styles from "@/styles/pages/users.module.css";
import { useRouter } from "next/router";

export default function Users() {
  const router = useRouter();

  return (
    <Layout>
      <div className="db-header">
        <h2>Usuarios</h2>
        <p>Administrar usuarios</p>
        <button
          className={styles.addbtn}
          onClick={() => router.push("/dashboard/admin/users/add")}
        >
          <GrChapterAdd size={24} /> Agregar
        </button>
      </div>
      <div className="section"></div>
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
