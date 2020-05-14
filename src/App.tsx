import './App.css';

import HouseSelect, { REPRESENTATIVES } from './houseSelect/houseSelect';
import React, { useState } from 'react';

import StateSelect from './stateSelect/stateSelect';
import getMembersOfCongress from './membersOfCongressService/membersOfCongressService';

let App = () => {
  const [house, setHouse] = useState(REPRESENTATIVES);
  const [state, setState] = useState('UT');
  const [membersOfCongress, setMembersOfCongress] = useState<MemberOfCongress[]>([]);
  const [selectedMemberOfCongress, setSelectedMemberOfCongress] = useState<MemberOfCongress | null>(null);

  let handleSubmit = async () => {
    setMembersOfCongress(await getMembersOfCongress(house, state));
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1>Who's My Representative?</h1>
      </header>
      <section className="search">
        <h2>Search</h2>
        <HouseSelect value={house} onChange={setHouse} />
        <StateSelect value={state} onChange={setState} />
        <button onClick={handleSubmit}>Submit</button>
      </section>
      <section className="info">
        <h2>Info</h2>
        <div className="moc-info">{selectedMemberOfCongress && selectedMemberOfCongress.name.split(' ')[0] || 'First Name'}</div>
        <div className="moc-info">{selectedMemberOfCongress && selectedMemberOfCongress.name.split(' ')[1] || 'Last Name'}</div>
        <div className="moc-info">{selectedMemberOfCongress && selectedMemberOfCongress.district || 'District'}</div>
        <div className="moc-info">{selectedMemberOfCongress && selectedMemberOfCongress.phone || 'Phone'}</div>
        <div className="moc-info">{selectedMemberOfCongress && selectedMemberOfCongress.office || 'Office'}</div>
      </section>
      <section className="results">
        <h2>
          List&nbsp;/&nbsp;
          <span className="house">{house === REPRESENTATIVES ? 'Representatives' : 'Senators'}</span>
        </h2>
        <table>
          <thead>
            <tr>
              <th className="results-name">Name</th>
              <th className="results-party">Party</th>
            </tr>
          </thead>
          <tbody>
            {membersOfCongress.map(memberOfCongress => (
              <tr key={memberOfCongress.name} onClick={() => setSelectedMemberOfCongress(memberOfCongress)}>
                <td className="results-name">{memberOfCongress.name}</td>
                <td className="results-party">{memberOfCongress.party}</td>
              </tr>
            ))
            }
          </tbody>
        </table>
      </section>
    </div>
  )
};

export default App;
