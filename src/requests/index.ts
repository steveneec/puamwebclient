import axios from "axios";

const apibase = "http://192.168.100.43:3001";

export async function signin(user: string, pass: string) {
  const result = await axios.post(`${apibase}/auth/signin`, { user, pass });
  return result.data;
}

export async function getUserByToken(token: string) {
  const result = await axios.get(`${apibase}/users/token`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return result.data;
}

export async function saveUser(data: any, token: string) {
  const result = await axios.post(`${apibase}/users`, data, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return result.data;
}
