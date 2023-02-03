import Layout from "@/components/dashboard/Layout";
import Input from "@/components/Input";
import SelectOption from "@/components/SelectOption";
import { saveUser } from "@/requests";
import { selectOption } from "@/types";
import { getCookie } from "cookies-next";
import { useRouter } from "next/router";
import { useState } from "react";

export default function AddUser() {
  const [firstname, setFirstname] = useState("");
  const [secondname, setSecondname] = useState("");
  const [firstlastname, setFirstlastname] = useState("");
  const [secondlastname, setSecondlastname] = useState("");
  const [dni, setDni] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [role, setRole] = useState("__tutor");

  const roleOptions: selectOption[] = [
    {
      text: "Tutor",
      value: "__tutor",
    },
    {
      text: "Estudiante",
      value: "__student",
    },
    {
      text: "Administrador",
      value: "__admin",
    },
  ];

  const router = useRouter();

  async function handleOnSubmit(event: any) {
    event.preventDefault();
    try {
      const token = getCookie("puam_access_token");

      const user = {
        firstname,
        secondname,
        firstlastname,
        secondlastname,
        dni,
        email,
        phone,
        role,
      };

      await saveUser(user, token as string);
      router.push("/dashboard/admin/users");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Layout>
      <div className="dashboard-content">
        <div className="db-header">
          <h2>Nuevo usuario</h2>
          <p>Agrega un nuevo usario</p>
        </div>
        <div className="section">
          <form className="form" onSubmit={handleOnSubmit}>
            <Input
              label="Primer nombre"
              required
              value={firstname}
              onChange={({ target }) => setFirstname(target.value)}
            />
            <Input
              label="Segundo nombre"
              required
              value={secondname}
              onChange={({ target }) => setSecondname(target.value)}
            />
            <Input
              label="Primer apellido"
              required
              value={firstlastname}
              onChange={({ target }) => setFirstlastname(target.value)}
            />
            <Input
              label="Segundo apellido"
              required
              value={secondlastname}
              onChange={({ target }) => setSecondlastname(target.value)}
            />
            <Input
              label="Cédula"
              required
              value={dni}
              onChange={({ target }) => setDni(target.value)}
            />
            <Input
              label="Email"
              required
              value={email}
              onChange={({ target }) => setEmail(target.value)}
              type="email"
            />
            <Input
              label="Celular"
              required
              value={phone}
              onChange={({ target }) => setPhone(target.value)}
            />
            <SelectOption
              options={roleOptions}
              label="Role del usuario"
              value={role}
              onChange={({ target }) => setRole(target.value)}
            />
            <p className="info">
              Se generará una contraseña y se enviará al correo electrónico del
              usuario
            </p>
            <Input type="submit" value="Guardar usuario" />
          </form>
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
