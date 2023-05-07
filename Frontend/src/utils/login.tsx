export default async function login({ username, password }: any) {
  try {
    const response = await fetch(`http://localhost:4000/auth/login/`, {
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
    console.log(response.headers);
    const cookie = await response.headers.get("Set-Cookie");
    console.log(cookie);

    return result;
  } catch (err) {
    return err;
  }
}
