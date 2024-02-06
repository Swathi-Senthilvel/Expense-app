// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom'; // Import useNavigate

// const SignupForm = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [email, setEmail] = useState('');
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
//     marginTop: '10px',
//   };

//   const handleSignup = () => {
//     // Simple signup logic (replace with server-side validation)
//     console.log('Signup details:', { username, password, email });
//     alert('Signup successful!'); // You can redirect to another page or perform additional actions here
//     navigate('/main'); // Navigate to '/main' upon successful signup
//   };

//   return (
//     <div style={containerStyle}>
//       <h1>Signup</h1>
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

//         <label htmlFor="email">Email:</label>
//         <input
//           type="email"
//           id="email"
//           name="email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
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

//         <button type="button" style={buttonStyle} onClick={handleSignup}>
//           Signup
//         </button>
//       </form>
//     </div>
//   );
// };

// export default SignupForm;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const SignupForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh', // Set container height to full viewport height
    backgroundImage: `url('https://images.pexels.com/photos/158776/euro-money-currency-the-european-158776.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`, // Set background image
    backgroundSize: 'cover', // Ensure the background image covers the entire container
    backgroundPosition: 'center', // Center the background image
    padding: '20px',
    boxSizing: 'border-box',
  };

  const formStyle = {
    width: '300px',
    padding: '20px',
    backgroundColor: '#fff',
    borderRadius: '5px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  };

  const inputStyle = {
    width: '100%',
    padding: '8px',
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
    marginTop: '10px',
  };

  const handleSignup = () => {
    // Simple signup logic (replace with server-side validation)
    console.log('Signup details:', { username, password, email });
    alert('Signup successful!'); // You can redirect to another page or perform additional actions here
    navigate('/main'); // Navigate to '/main' upon successful signup
  };

  return (
    <div style={containerStyle}>
      <h1>Signup</h1>
      <form style={formStyle}>
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

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
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

        <button type="button" style={buttonStyle} onClick={handleSignup}>
          Signup
        </button>
      </form>
    </div>
  );
};

export default SignupForm;
