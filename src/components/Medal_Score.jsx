import React from 'react';
import { Dropdown, SplitButton } from 'react-bootstrap';
import '../index.css';

const Medal_Score = () => {
  return (
    <div>
        <SplitButton id="dropdown-basic-button" size="lg" title="Medal Status">
            <Dropdown.Item href="#/action-1">Bronze</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Silver</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Gold</Dropdown.Item>
        </SplitButton>
    </div>
  )
}

export default Medal_Score;
