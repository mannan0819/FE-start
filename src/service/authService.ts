import { UserResponse } from "../types/UserResponse";

const doLogIn = (username: string) => {
  localStorage.setItem("username", username);
};

const login = async (username: string, password: string): Promise<UserResponse | undefined> => {
  const apiUrl = import.meta.env.VITE_API_URL ?? '';

  const res = await fetch(apiUrl + '/user/login', {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ username, password }),
  });
  if (!res || !res.ok) return undefined;
  const user = await res.json();
  console.log(user);
  return user;
}


const isLoggedIn = async () => {
  const apiUrl = import.meta.env.VITE_API_URL ?? '';

  const res = await fetch(apiUrl + '/me', {
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  if(!res || !res.body) return undefined;
  const data = await res.json();
  return data;
};


const logOut = (props: any) => {

  localStorage.removeItem("username");
  localStorage.removeItem("isLoggedIn");
  props.history.push("/login");

};

export default {
  login,
  doLogIn,
  isLoggedIn,
  logOut
};
