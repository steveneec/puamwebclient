import Input from "@/components/Input";
import { useUser } from "@/context/user-context";
import styles from "@/styles/pages/auth.module.css";
import { useState } from "react";
import { getUserByToken, signin } from "@/requests";
import { setCookie } from "cookies-next";
import { useRouter } from "next/router";

export default function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [saveSession, setSaveSession] = useState(false);

  //Hooks
  const { user } = useUser();
  const router = useRouter();

  async function handleOnSubmit(event: any) {
    event.preventDefault();
    try {
      const result = await signin(email, password);

      if (result.access_token) {
        if (saveSession) {
          //Save token in cookie
          setCookie("puam_access_token", result.access_token, {
            //expires: //
          });
        } else {
          setCookie("puam_access_token", result.access_token);
        }
        //GetUserByToken
        const _user = await getUserByToken(result.access_token);
        user.setUser(_user);

        router.push(`/dashboard/${_user.type}`);
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <div className={styles.content}>
        <h1 className={styles.greetings}>Hola de nuevo!</h1>
        <p className={styles.caption}>
          Por favor ingresa tus credenciales para acceder al panel de
          administración.
        </p>
        <div className={styles.form}>
          <form className="form" onSubmit={handleOnSubmit}>
            <Input
              label="Email"
              required
              placeholder="mail@uce.edu.ec"
              id="email"
              value={email}
              onChange={({ target }) => setEmail(target.value)}
            />
            <Input
              label="Contraseña"
              required
              placeholder="Contraseña"
              id="pass"
              type="password"
              value={password}
              onChange={({ target }) => setPassword(target.value)}
            />
            <label className={styles.rememberme}>
              <input
                type="checkbox"
                checked={saveSession}
                onChange={({ target }) => setSaveSession(target.checked)}
              />{" "}
              Mantener la sesión iniciada
            </label>
            <Input type="submit" value="Iniciar sesión" />
            <small className={styles.join}>
              Si aún no eres parte del programa puedes solicitar unirte{" "}
              <span>aquí</span>
            </small>
          </form>
        </div>
      </div>
    </div>
  );
}
