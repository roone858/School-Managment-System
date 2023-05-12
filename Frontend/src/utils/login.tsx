import { host } from "../services/host";

export default async function login({ username, password }: any) {
  try {
    const response = await fetch(host+`/auth/login/`, {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      redirect: "follow",
      referrerPolicy: "no-referrer",
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    });
    const result = await response.json();
    const cookie = await response.headers.get("Set-Cookie");

    return result;
  } catch (err) {
    return err;
  }
}
