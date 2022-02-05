import { Ticket } from './ui-components';
import { useEffect, useState } from 'react';
import { Ticket as TicketModel } from './models';
import { DataStore } from 'aws-amplify';
import liff from '@line/liff';
import './App.css';

function App() {
  const [ticket, setTicket] = useState({ user_name: '', user_qr: '' });
  useEffect(() => {
    DataStore.query(TicketModel).then(async (tickets) => {
      liff.init({ liffId: process.env.REACT_APP_LIFF_ID }).then(async () => {
        if (!liff.isLoggedIn()) {
          await liff.login();
        }
        const { userId } = await liff.getProfile();
        const ticket = tickets.find((t) => t.liff_user_id === userId);
        if (ticket) {
          setTicket({ user_name: ticket.user_name, user_qr: ticket.user_qr });
        }
      });
    });
  });
  const registerTicket = () => {
    liff.init({ liffId: process.env.REACT_APP_LIFF_ID }).then(async () => {
      if (!liff.isLoggedIn()) {
        await liff.login();
      }
      const { userId, displayName } = await liff.getProfile();
      await DataStore.save(
        new TicketModel({
          liff_user_id: userId,
          user_name: displayName,
        })
      );
      const tickets = await DataStore.query(TicketModel);
      const { user_name, user_qr } = tickets.find((t) => t.liff_user_id === userId);
      setTicket({ user_name, user_qr });
    });
  }
  return (
    <div className='container'>
      {ticket.user_name && ticket.user_qr ?
        <Ticket ticketProp={ticket} /> : ticket.user_name
          ? 'チケットが登録されました。チケット発行までしばらくお待ち下さい。' :
          <button onClick={registerTicket}>チケット登録</button>}
    </div>
  )
}

export default App;
