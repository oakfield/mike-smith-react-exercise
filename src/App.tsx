import './App.css';

import React, { useState } from 'react';

type MemberOfCongress = {
  district: string,
  name: string,
  office: string,
  party: string,
  phone: string
}

const REPRESENTATIVES = 'representatives';
const SENATE = 'senators';

let App = () => {
  const [house, setHouse] = useState(REPRESENTATIVES);
  const [state, setState] = useState('UT');
  const [membersOfCongress, setMembersOfCongress] = useState<MemberOfCongress[]>([]);
  const [selectedMemberOfCongress, setSelectedMemberOfCongress] = useState<MemberOfCongress | null>(null);

  let getRepresentatives = async () => {
    let representativesResponse = await fetch(`http://localhost:3000/${house}/${state}`);
    let representativesJson = await representativesResponse.json();
    setMembersOfCongress(representativesJson.results);
  };

  return (
  <div className="app">
    <header className="app-header">
      <h1>
        Who's My Representative?
      </h1>
    </header>
    <section className="search">
      <h2>Search</h2>
      <label>
        House
        <select value={house} onChange={event => setHouse(event.target.value)}>
          <option value={REPRESENTATIVES}>House of Representatives</option>
          <option value={SENATE}>Senate</option>
        </select>
      </label>
      <label>
        State
        <select value={state} onChange={event => setState(event.target.value)}>
          <option>AL</option>
          <option>AK</option>
          <option>AZ</option>
          <option>AR</option>
          <option>CA</option>
          <option>CO</option>
          <option>CT</option>
          <option>DE</option>
          <option>FL</option>
          <option>GA</option>
          <option>HI</option>
          <option>ID</option>
          <option>IL</option>
          <option>IN</option>
          <option>IA</option>
          <option>KS</option>
          <option>KY</option>
          <option>LA</option>
          <option>ME</option>
          <option>MD</option>
          <option>MA</option>
          <option>MI</option>
          <option>MN</option>
          <option>MS</option>
          <option>MO</option>
          <option>MT</option>
          <option>NE</option>
          <option>NV</option>
          <option>NH</option>
          <option>NJ</option>
          <option>NM</option>
          <option>NY</option>
          <option>NC</option>
          <option>ND</option>
          <option>OH</option>
          <option>OK</option>
          <option>OR</option>
          <option>PA</option>
          <option>RI</option>
          <option>SC</option>
          <option>SD</option>
          <option>TN</option>
          <option>TX</option>
          <option>UT</option>
          <option>VT</option>
          <option>VA</option>
          <option>WA</option>
          <option>WV</option>
          <option>WI</option>
          <option>WY</option>
        </select>
      </label>
      <button onClick={getRepresentatives}>Submit</button>
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
      <h2>List / Representatives</h2>
      <table>
        <thead>
          <tr>
            <th className="results-name">Name</th>
            <th className="results-party">Party</th>
          </tr>
        </thead>
        <tbody>
          {membersOfCongress.map((memberOfCongress, index) => {
            return (
              <tr key={index} onClick={() => setSelectedMemberOfCongress(memberOfCongress)}>
                <td className="results-name">{memberOfCongress.name}</td>
                <td className="results-party">{memberOfCongress.party}</td>
              </tr>
            );
          })
          }
        </tbody>
      </table>
    </section>
  </div>
)};

export default App;
