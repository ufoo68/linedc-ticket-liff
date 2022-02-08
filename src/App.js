import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [ticket, setTicket] = useState({ user_name: '', user_qr: '' });
  useEffect(() => {
    // TODO: チケット情報の取得
  });
  const registerTicket = () => {
    //TODO:  チケット登録の実装
  }
  return (
    <div className='container'>
      {/* TODO: チケットの表示 */}
      {ticket.user_name && ticket.user_qr ?
        'ここにチケットが表示される' : ticket.user_name
          ? 'チケットが登録されました。チケット発行までしばらくお待ち下さい。' :
          <button onClick={registerTicket}>チケット登録</button>}
    </div>
  )
}

export default App;
