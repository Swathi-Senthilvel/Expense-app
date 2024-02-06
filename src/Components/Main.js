// import React, { useState } from 'react';
// import { Paper } from '@mui/material';

// const ExpenseTracker = () => {
//   const [expenses, setExpenses] = useState([]);
//   const [newExpense, setNewExpense] = useState('');
//   const [amount, setAmount] = useState('');

//   const addExpense = () => {
//     if (newExpense && amount) {
//       const newExpenseItem = {
//         id: Date.now(),
//         title: newExpense,
//         amount: parseFloat(amount),
//       };
//       setExpenses([...expenses, newExpenseItem]);
//       setNewExpense('');
//       setAmount('');
//     }
//   };

//   const deleteExpense = (id) => {
//     const updatedExpenses = expenses.filter((expense) => expense.id !== id);
//     setExpenses(updatedExpenses);
//   };

//   // Calculate total expenses
//   const totalExpenses = expenses.reduce((acc, expense) => acc + expense.amount, 0);

//   return (
//     <div
//       style={{
//         fontFamily: 'Arial, sans-serif',
//         padding: '20px',
//         backgroundImage: 'url("https://images.pexels.com/photos/321457/pexels-photo-321457.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")',
//         backgroundSize: 'cover',
//         backgroundPosition: 'center',
//         minHeight: '95vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         color: 'white',
//       }}
//     >
//       <div style={{ textAlign: 'center', width: '100%', maxWidth: '600px' }}>
//         <h1>Expense Tracker</h1>
//         <Paper variant="outlined" style={{ borderRadius: '25px', opacity: '0.8', padding: '20px' }}>
//           <div style={{ marginBottom: '20px' }}>
//             <input
//               type="text"
//               placeholder="Expense description"
//               value={newExpense}
//               onChange={(e) => setNewExpense(e.target.value)}
//               style={{ padding: '8px', marginRight: '10px', borderRadius: '5px', border: 'none', width: '60%' }}
//             />
//             <input
//               type="number"
//               placeholder="Amount"
//               value={amount}
//               onChange={(e) => setAmount(e.target.value)}
//               style={{ padding: '8px', marginRight: '10px', borderRadius: '5px', border: 'none', width: '20%' }}
//             />
//           </div>
//           <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
//             <button
//               onClick={addExpense}
//               style={{
//                 padding: '8px 20px',
//                 backgroundColor: 'green',
//                 color: 'white',
//                 border: 'none',
//                 borderRadius: '5px',
//                 cursor: 'pointer',
//               }}
//             >
//               Add Expense
//             </button>
//           </div>
//           <div style={{ textAlign: 'center' }}>
//             <h2>Expenses</h2>
//             <ul style={{ listStyleType: 'none', padding: '0', textAlign: 'left' }}>
//               {expenses.map((expense) => (
//                 <li key={expense.id} style={{ marginBottom: '10px' }}>
//                   {expense.title} - ${expense.amount}
//                   <button
//                     onClick={() => deleteExpense(expense.id)}
//                     style={{
//                       marginLeft: '10px',
//                       padding: '5px 10px',
//                       backgroundColor: 'red',
//                       color: 'white',
//                       border: 'none',
//                       borderRadius: '5px',
//                       cursor: 'pointer',
//                     }}
//                   >
//                     Delete
//                   </button>
//                 </li>
//               ))}
//             </ul>
//             <h3>Total Expenses: ${totalExpenses.toFixed(2)}</h3>
//           </div>
//         </Paper>
//       </div>
//     </div>
//   );
// };

// export default ExpenseTracker;
import React, { useState } from 'react';
import { Paper } from '@mui/material';

const ExpenseTracker = () => {
  const [expenses, setExpenses] = useState([]);
  const [newExpense, setNewExpense] = useState('');
  const [amount, setAmount] = useState('');

  const addExpense = () => {
    if (newExpense && amount) {
      const newExpenseItem = {
        id: Date.now(),
        title: newExpense,
        amount: parseFloat(amount),
      };
      const newTotalExpenses = totalExpenses + parseFloat(amount);

      if (newTotalExpenses > 10000) {
        alert('Total expenses have exceeded $10,000!');
      } else {
        setExpenses([...expenses, newExpenseItem]);
        setNewExpense('');
        setAmount('');
      }
    }
  };

  const deleteExpense = (id) => {
    const updatedExpenses = expenses.filter((expense) => expense.id !== id);
    setExpenses(updatedExpenses);
  };

  // Calculate total expenses
  const totalExpenses = expenses.reduce((acc, expense) => acc + expense.amount, 0);

  return (
    <div
      style={{
        fontFamily: 'Arial, sans-serif',
        padding: '20px',
        backgroundImage: 'url("https://images.pexels.com/photos/321457/pexels-photo-321457.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '95vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
      }}
    >
      <div style={{ textAlign: 'center', width: '100%', maxWidth: '600px' }}>
        <h1>Expense Tracker</h1>
        <Paper variant="outlined" style={{ borderRadius: '25px', opacity: '0.8', padding: '20px' }}>
          <div style={{ marginBottom: '20px' }}>
            <input
              type="text"
              placeholder="Expense description"
              value={newExpense}
              onChange={(e) => setNewExpense(e.target.value)}
              style={{ padding: '8px', marginRight: '10px', borderRadius: '5px', border: 'none', width: '60%' }}
            />
            <input
              type="number"
              placeholder="Amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              style={{ padding: '8px', marginRight: '10px', borderRadius: '5px', border: 'none', width: '20%' }}
            />
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
            <button
              onClick={addExpense}
              style={{
                padding: '8px 20px',
                backgroundColor: 'green',
                color: 'white',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
              }}
            >
              Add Expense
            </button>
          </div>
          <div style={{ textAlign: 'center' }}>
            <h2>Expenses</h2>
            <ul style={{ listStyleType: 'none', padding: '0', textAlign: 'left' }}>
              {expenses.map((expense) => (
                <li key={expense.id} style={{ marginBottom: '10px' }}>
                  {expense.title} - ${expense.amount}
                  <button
                    onClick={() => deleteExpense(expense.id)}
                    style={{
                      marginLeft: '10px',
                      padding: '5px 10px',
                      backgroundColor: 'red',
                      color: 'white',
                      border: 'none',
                      borderRadius: '5px',
                      cursor: 'pointer',
                    }}
                  >
                    Delete
                  </button>
                </li>
              ))}
            </ul>
            <h3>Total Expenses: ${totalExpenses.toFixed(2)}</h3>
          </div>
        </Paper>
      </div>
    </div>
  );
};

export default ExpenseTracker;
