import React from 'react';
import ReactDOM from 'react-dom'
import { createRoot } from 'react-dom/client'

const App = () => {
  return <div style = {{margin: 'auto', width: 768, backgroundColor: '#EEE', padding: 12, borderRadius: 8}}>
        <label for="nome" style={{display: 'block', marginBottom: 4}}>Nome:</label>
        <input type="text" id="nome" style={{paddingTop: 8,
         paddingBottom: 8, borderStyle: 'hidden', borderRadius: 8, width: '100%', outline: 'none', boxSizing: 'borderBox'}}/>
        <button style={{marginTop: 12, paddingTop: 8, paddingBottom: 8,
         backgroundColor: 'blueviolet', color: 'white', border: 'none', width: '100%', borderRadius: 8}}>Enviar</button>
         </div>
}

const root = createRoot(document.getElementById('root'))
root.render(<App />)