import './HouseSelect.css';

import React from 'react';

export const REPRESENTATIVES = 'representatives';
export const SENATE = 'senators';

let HouseSelect = ({ value, onChange }: { value: string, onChange: (value: string) => void}) => {
  return (
    <label className="houseSelect">
      House
      <select value={value} onChange={event => onChange(event.target.value)}>
        <option value={REPRESENTATIVES}>House of Representatives</option>
        <option value={SENATE}>Senate</option>
      </select>
    </label>
  );
};

export default HouseSelect;