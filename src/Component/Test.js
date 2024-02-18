import React, { useState } from 'react';

const App = () => {
  const [eventName, setEventName] = useState('');
  const [dateOfEvent, setDateOfEvent] = useState('');
  const [eventType, setEventType] = useState('');
  const [noOfPeopleVisited, setNoOfPeopleVisited] = useState('');
  const [amount, setAmount] = useState('');
  const [comments, setComments] = useState('');

  const handleCalculate = () => {
    if (eventName || !dateOfEvent || !eventType || !noOfPeopleVisited || !amount) {
      alert('Please fill in all the fields.');
      return;
      /*return is used to stop the calculation when the field is empty*/
    }
    
   
    if (eventType === 'BIRTHDAY' || eventType === 'GOT A JOB') {
      const totalExpenditure = parseFloat(amount) * parseInt(noOfPeopleVisited);
      alert(`Total Expenditure = ${totalExpenditure}`);
    } 
    else if (eventType === 'ALUMNI MEETUP') {
      const averageExpenditure = parseFloat(amount) / parseInt(noOfPeopleVisited);
      alert(`Average Expenditure = ${averageExpenditure}`);
    }
  };

  return (
    <div>
        <body>
        <table>
          <tr>
            <td>
              <label>Event Name:</label>
            </td>
            <td>
              <input type="text"
                value={eventName}
                onChange={(e) => setEventName(e.target.value.replace(/[^A-Za-z]/g, ''))}
              />
            </td>
          </tr>
          <tr>
            <td>
              <label>Date of Event:</label>
            </td>
            <td>
               <input type="date"
                value={dateOfEvent}
                onChange={(e) => setDateOfEvent(e.target.value)}
                max={ new Date().toISOString().split('T')[0]}/> 


            </td>
          </tr>
          <tr>
            <td>
              <label>Event Type:</label>
            </td>
            <td>
              <select value={eventType} onChange={(e) => setEventType(e.target.value)}>
                <option value="">Select Event Type</option>
                <option value="BIRTHDAY">BIRTHDAY</option>
                <option value="ALUMNI MEETUP">ALUMNI MEETUP</option>
                <option value="GOT A JOB">GOT A JOB</option>
              </select>
            </td>
          </tr>
          <tr>
            <td>
              <label>No Of People Visited:</label>
            </td>
            <td>
              <input
                type="text"
                value={noOfPeopleVisited}
                onChange={(e) => setNoOfPeopleVisited(e.target.value.replace(/[^0-9]/g, ''))}
              />
            </td>
          </tr>
          <tr>
            <td>
              <label>Amount:</label>
            </td>
            <td>
              <input
                type="text"
                value={amount}
                onChange={(e) => setAmount(e.target.value.replace(/[^0-9.]/g, ''))}
              />
            </td>
          </tr>
          <tr>
            <td>
              <label>Comments:</label>
            </td>
            <td>
              <input
                type="text"
                value={comments}
                onChange={(e) => setComments(e.target.value)}
              />
            </td>
          </tr>
          </table>
        </body>
      <button onClick={handleCalculate}>CALCULATE</button>
    </div>
  );
};
export default App;
