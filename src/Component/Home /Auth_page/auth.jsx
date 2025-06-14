import React from 'react';

export default function AuthModal({ type, onClose, switchAuthType }) {
  return (
    <div className="fixed inset-0 bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-xl shadow-xl w-96 relative">
        <button onClick={onClose} className="absolute top-2 right-3 text-gray-500 text-2xl">×</button>
        
        {type === 'login' ? (
          <LoginForm 
            onLoginSuccess={onClose} 
            switchToSignup={() => switchAuthType('signup')} 
          />
        ) : (
          <SignUpForm 
            switchToLogin={() => switchAuthType('login')} 
          />
        )}
      </div>
    </div>
  );
}

function LoginForm({ switchToSignup, onLoginSuccess }) {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Login</h2>
      <input className="w-full p-2 mb-4 border rounded" placeholder="Email" />
      <input className="w-full p-2 mb-4 border rounded" type="password" placeholder="Password" />
      <button 
        onClick={onLoginSuccess}
        className="w-full bg-blue-600 text-white p-2 rounded"
      >
        Login
      </button>
      <p className="mt-4 text-sm">
        Don't have an account?{' '}
        <button onClick={switchToSignup} className="text-blue-600 underline">Sign Up</button>
      </p>
    </div>
  );
}

function SignUpForm({ switchToLogin }) {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
      <input className="w-full p-2 mb-4 border rounded" placeholder="Name" required />
      <input className="w-full p-2 mb-4 border rounded" placeholder="Email" required />
      <input className="w-full p-2 mb-4 border rounded" type="password" placeholder="Password" required />
      <button 
        onClick={switchToLogin} 
        className="w-full bg-green-600 text-white p-2 rounded"
      >
        Sign Up
      </button>
      <p className="mt-4 text-sm">
        Already have an account?{' '}
        <button onClick={switchToLogin} className="text-blue-600 underline">Login</button>
      </p>
    </div>
  );
}
