import "@/styles/normalize.css";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { DM_Sans } from "@next/font/google";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { UserContext } from "@/context/user-context";
import { userType } from "@/types";
import { getUserByToken } from "@/requests";
import { getCookie, hasCookie } from "cookies-next";

const dmsans = DM_Sans({ weight: "400", subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  const [user, setUser] = useState<userType | null>(null);

  const router = useRouter();

  useEffect(() => {
    //Check if token exits
    getUser();
  }, []);

  async function getUser() {
    if (hasCookie("puam_access_token")) {
      const token = getCookie("puam_access_token");
      //getuserbytoken
      const _user = await getUserByToken(token as string);
      if (_user) {
        setUser(_user);
      }
    } else {
      router.push("/auth");
    }
  }

  /*useEffect(() => {
    if (user) {
      router.push(`/dashboard/${user?.type}`);
    }
  }, [user]);*/

  if (pageProps.protected && !user) {
    return null;
  }

  if (
    pageProps.protected &&
    user &&
    pageProps.userTypes &&
    pageProps.userTypes.indexOf(user.type) === -1
  ) {
    return null;
  }

  return (
    <main className={dmsans.className}>
      <UserContext.Provider value={{ user, setUser }}>
        <Component {...pageProps} />
      </UserContext.Provider>
    </main>
  );
}
