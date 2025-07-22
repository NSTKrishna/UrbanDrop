import React, { useState } from "react";
import { auth } from "../firebase";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";

export default function AuthModal({ type, onClose, switchAuthType }) {
  return (
    <div className="fixed inset-0 bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-xl shadow-xl w-96 relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-3 text-gray-500 text-2xl"
        >
          ×
        </button>

        {type === "login" ? (
          <LoginForm 
            onLoginSuccess={onClose}
            switchToSignup={() => switchAuthType("signup")}
          /> 
        ) : ( 
          <SignUpForm switchToLogin={() => switchAuthType("login")} />
        )} 
      </div> 
    </div> 
  ); 
}
 
function LoginForm({ switchToSignup, onLoginSuccess }) { 
  const [email, setEmail] = useState(""); 
  const [password, setPassword] = useState(""); 
  const [err, setErr] = useState(""); 

  const login = async () => { 
    try { 
      await signInWithEmailAndPassword(auth, email, password); 
      onLoginSuccess(); 
    } catch (err) {
      if (err.code === "auth/user-not-found") { 
        setErr("No user found with this email."); 
      } else if (err.code === "auth/wrong-password") { 
        setErr("Incorrect password."); 
      } else if (err.code === "auth/invalid-credential") { 
        setErr("Invalid email or password."); 
      } else { 
        setErr("Login failed. Please try again."); 
      } 
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Login</h2>
      <input
        className="w-full p-2 mb-4 border rounded"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      {err && <p className="text-red-600 text-sm mb-2">{err}</p>}
      <input
        className="w-full p-2 mb-4 border rounded"
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        onClick={login}
        className="w-full bg-blue-600 text-white p-2 rounded"
      >
        Login
      </button>
      <p className="mt-4 text-sm">
        Don't have an account?{" "}
        <button onClick={switchToSignup} className="text-blue-600 underline">
          Sign Up
        </button>
      </p>
    </div>
  );
}

function SignUpForm({ switchToLogin }) {
  const [name, setName] = useState(""); // not used in Firebase, unless you update profile
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const signUp = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      switchToLogin();
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
      <input
        className="w-full p-2 mb-4 border rounded"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        className="w-full p-2 mb-4 border rounded"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        className="w-full p-2 mb-4 border rounded"
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      {error && <p className="text-red-600 text-sm mb-2">{error}</p>}
      <button
        onClick={signUp}
        className="w-full bg-green-600 text-white p-2 rounded"
      >
        Sign Up
      </button>
      <p className="mt-4 text-sm">
        Already have an account?{" "}
        <button onClick={switchToLogin} className="text-blue-600 underline">
          Login
        </button>
      </p>
    </div>
  );
}
