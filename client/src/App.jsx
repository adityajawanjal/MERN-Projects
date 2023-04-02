import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Notes from './pages/Notes';

const App = () => {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route exact path='/notes' element={<Notes/>} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

// const accountSid = 'AC88a54cd314a3070e0b1f4718d12b9387';
// const authToken = '93176b4727ab6df83c434caa04bae57b';
// const client = require('twilio')(accountSid, authToken);

// client.messages
//     .create({
//         body: 'Your appointment is coming up on July 21 at 3PM',
//         from: 'whatsapp:+14155238886',
//         to: 'whatsapp:+918446496766'
//     })
//     .then(message => console.log(message.sid))
//     .done();

export default App
