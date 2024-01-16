import React, { useState } from 'react';
import LoginPage from './loginpage';
// import logo from './logo.svg';
// import { Counter } from './features/counter/Counter';
// import './App.css';

function App() {
  const [user, setUser] = useState({
    email: "",
    pass: ""
  })
  const [checkuser, setCheckuser] = useState(false)
  // let api ="https://reqres.in/api/login"
  const handleClick = async () => {
    try {
      const response = await fetch("https://reqres.in/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: user.email,
          password: user.pass,
        }),
      });

      console.log(response)
      if (response.ok) {
        setCheckuser(true)
        const data = await response.json();
        console.log("Login successful:", data);
        // You might want to redirect or perform other actions on successful login
      } else {
        const errorData = await response.json();
        console.error("Login failed:", errorData);
        // Handle login error, show a message to the user, etc.
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  return (
    <div className="App">
      <input
        type="text"
        placeholder="Enter your email here"
        value={user.email}
        onChange={(e) => setUser({ ...user, email: e.target.value })}
      />
      <input
        type="password"
        placeholder="Enter your password here"
        value={user.pass}
        onChange={(e) => setUser({ ...user, pass: e.target.value })}
      />
      <button onClick={handleClick}>Click Here</button>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>

      <LoginPage />
    </div>

  );
}

export default App;
