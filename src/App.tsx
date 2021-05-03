import React from 'react';
import './App.css';
import Group from './components/Group/Group';
import {MOCK_PROJECT, MOCK_INBOX} from './mock-data'


function App() {
  return (
    <div className="App">
      <Group name={MOCK_PROJECT.name} sections={MOCK_PROJECT.sections}/>
      <Group name={MOCK_INBOX.name} sections={MOCK_INBOX.sections}/>
    </div>
  );
}

export default App;
