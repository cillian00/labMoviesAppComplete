import { useState, useEffect, Component } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import "./App.css";
import { auth } from "../firebase_config";
import { Router, Link, useNavigate } from "react-router-dom";

const App  = () => {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const IsAuth = false;
  const [user, setUser] = useState({});
  const navigates = useNavigate();

  useEffect(() => {

    onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);

      });

  });

  const handleMenuSelect = () => {
    navigates('pages/homepage');
  };


  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };

  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      console.log(user);
      IsAuth = true;
    } catch (error) {
      console.log(error.message);
    }
  };



  const logout = async () => {
    await signOut(auth);
  };




  return (
    <div className="App">
      <div>
        <h3> Register User </h3>
        <input
          placeholder="Email..."
          onChange={(event) => {
            setRegisterEmail(event.target.value);
          }}
        />
        <input
          placeholder="Password..."
          onChange={(event) => {
            setRegisterPassword(event.target.value);
          }}
        />

        <button onClick={register}> Create User</button>
      </div>

      <div>
        <h3> Login </h3>
        <input
          placeholder="Email..."
          onChange={(event) => {
            setLoginEmail(event.target.value);
          }}
        />
        <input
          placeholder="Password..."
          onChange={(event) => {
            setLoginPassword(event.target.value);
          }}
        />

        <button onClick={login}> Login</button>
      </div>


      <h4> User Logged In: </h4>
      {user?.email}

      <button onClick={logout}> Sign Out </button>
  
  <br></br>

      <button onClick={handleMenuSelect}> Continue.. </button>
    
      
    </div>
  );
}

export default App;
