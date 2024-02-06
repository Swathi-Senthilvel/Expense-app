// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom'; // Import useNavigate

// const LoginForm = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate(); // Initialize useNavigate

//   const containerStyle = {
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//     justifyContent: 'center',
//     minHeight: '100vh', // Set container height to full viewport height
//     backgroundColor: '#f0f0f0', // Set background color
//   };

//   const formStyle = {
//     width: '300px',
//     padding: '20px',
//     backgroundColor: '#fff',
//     borderRadius: '5px',
//     boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
//   };

//   const inputStyle = {
//     width: '100%',
//     padding: '8px',
//     margin: '8px 0', // Add margin between inputs
//     boxSizing: 'border-box',
//   };

//   const buttonStyle = {
//     width: '100%',
//     padding: '10px',
//     backgroundColor: '#4CAF50',
//     color: 'white',
//     border: 'none',
//     borderRadius: '5px',
//     cursor: 'pointer',
//   };

//   const handleLogin = () => {
//     // Simple authentication logic (replace with server-side validation)
//     if (username === 'abc' && password === '123') {
//       alert('Welcome!');
//       navigate('/main'); // Navigate to '/main' upon successful login
//     } else {
//       alert('Invalid username or password. Please try again.');
//     }
//   };

//   return (
//     <div style={containerStyle}>
//       <h1>Login</h1>
//       <form style={formStyle}>
//         <label htmlFor="username">Username:</label>
//         <input
//           type="text"
//           id="username"
//           name="username"
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//           style={inputStyle}
//           required
//         />

//         <label htmlFor="password">Password:</label>
//         <input
//           type="password"
//           id="password"
//           name="password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           style={inputStyle}
//           required
//         />

//         <button type="button" style={buttonStyle} onClick={handleLogin}>
//           Login
//         </button>
//       </form>
//     </div>
//   );
// };

// export default LoginForm;
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh', // Set container height to full viewport height
    backgroundImage: `url('https://images.pexels.com/photos/1602726/pexels-photo-1602726.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`, // Set background image
    backgroundSize: 'cover', // Ensure the background image covers the entire container
    backgroundPosition: 'center', // Center the background image
    padding: '20px',
    boxSizing: 'border-box',
  };

  const formStyle = {
    width: '100%',
    maxWidth: '400px',
    backgroundColor: 'rgba(255, 255, 255, 0.8)', // Add a semi-transparent white background for better readability
    borderRadius: '5px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    padding: '20px',
    boxSizing: 'border-box',
  };

  const inputStyle = {
    width: '100%',
    padding: '10px',
    margin: '8px 0', // Add margin between inputs
    boxSizing: 'border-box',
  };

  const buttonStyle = {
    width: '100%',
    padding: '10px',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  };

  const handleLogin = () => {
    // Simple authentication logic (replace with server-side validation)
    if (username === 'swathi' && password === '123') {
      alert('Welcome!');
      navigate('/main'); // Navigate to '/main' upon successful login
    } else {
      alert('Invalid username or password. Please try again.');
    }
  };

  return (
    <div style={containerStyle}>
      <h1>Login</h1>
      <div style={formStyle}>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={inputStyle}
          required
        />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={inputStyle}
          required
        />

        <button type="button" style={buttonStyle} onClick={handleLogin}>
          Login
        </button>
      </div>
    </div>
  );
};

export default LoginForm;

