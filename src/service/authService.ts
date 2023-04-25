const doLogIn = (username: any ) => {
    localStorage.setItem("username", username);
  };
  
  const isLoggedIn = () => {
    return Boolean(localStorage.getItem("isLoggedIn"));
  };
  
  
  const logOut = (props: any) =>{
  
    localStorage.removeItem("username");
    localStorage.removeItem("isLoggedIn");
    props.history.push("/login");
  
  };
  
  export default {
    doLogIn,
    isLoggedIn,
    logOut
  };
  