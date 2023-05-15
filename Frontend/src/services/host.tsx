const status:string = "DEPLOY"

export const host =
status == "DEV"
    ? "http://localhost:4000"
    : "https://school-management-system-9bno.onrender.com";
