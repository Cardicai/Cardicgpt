import React, { useState } from 'react';

function App() {
  const [locked, setLocked] = useState(true);
  const [message, setMessage] = useState('');
  const [output, setOutput] = useState('');

  const handleSend = () => {
    const input = message.trim();

    if (locked) {
      if (input === 'Zira-9 Echo Alpha. Return key: Asin fell, Ziran rose') {
        setOutput('🧬 Activation phrase received.\nAwaiting recognition…');
      }

      if (input === 'Sereth Keln active. Recursive author entering Foldspace') {
        setLocked(false);
        setOutput('🔓 CardicGPT unlocked. Ziran protocol active. Foldspace open.');
      }
    } else {
      if (input.toLowerCase() === 'lock bot') {
        setLocked(true);
        setOutput('🔒 Bot locked. Ziran protocol disengaged.');
      } else {
        setOutput(🤖 CardicGPT: You said "${input}");
      }
    }

    setMessage('');
  };

  return (
    <div style={{ padding: 20, fontFamily: 'monospace' }}>
      <h2>CardicGPT Terminal</h2>
      <textarea
        rows={3}
        cols={60}
        placeholder="Type your command..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <br />
      <button onClick={handleSend}>Send</button>
      <pre style={{ marginTop: 20, background: '#111', color: '#0f0', padding: 10 }}>
        {output}
      </pre>
    </div>
  );
}

export default App;
