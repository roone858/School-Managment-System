import Cookies from "js-cookie";

export function setTokenCookie(token: any) {
  Cookies.set("token", token, { expires: 7 }); // expires in 7 days
}
export function setAdminCookie(admin: any) {
  Cookies.set(
    "admin",
    JSON.stringify({
      username: admin.username,
      first_name: admin.first_name,
      last_name: admin.last_name,
    }),
    { expires: 7 }
  ); // expires in 7 days
}
export function getTokenFromCookie() {
  const token = Cookies.get("token");
  return token ? token : null;
}
export function getJWTFromCookie() {
  const token = Cookies.get("jwt");
  return token ? token : null;
}
export function getAdminFromCookie() {
  const admin = Cookies.get("admin");
  return admin ? JSON.parse(admin) : null;
}

export function removeTokenCookie() {
  Cookies.remove("token");
}
export function removeAdminCookie() {
  Cookies.remove("admin");
}
