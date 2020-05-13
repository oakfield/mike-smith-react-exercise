import './App.css';

import React from 'react';

let App = () => (
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
        <select>
          <option>House of Representatives</option>
          <option>Senate</option>
        </select>
      </label>
      <label>
        State
        <select>
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
      <button>Submit</button>
    </section>
    <section className="info">
      <h2>Info</h2>
      <input aria-label="First Name" placeholder="First Name" />
      <input aria-label="Last Name" placeholder="Last Name" />
      <input aria-label="District" placeholder="District" />
      <input aria-label="Phone" placeholder="Phone" />
      <input aria-label="Office" placeholder="Office" />
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
      </table>
    </section>
  </div>
);

export default App;
