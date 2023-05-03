const doLogIn = (username: string) => {
  localStorage.setItem("username", username);
};

const login = async (username: string, password: string) => {
  const apiUrl = import.meta.env.VITE_API_URL ?? '';

  const res = await fetch(apiUrl + '/user/login', {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ username, password }),
  });
  const user = await res.json();
  console.log(user);
  return user;
}


const isLoggedIn = () => {
  return Boolean(localStorage.getItem("isLoggedIn"));
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
