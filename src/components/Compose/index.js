import React from 'react';
import './Compose.css';

export default function Compose(props) {
    const handleInputMessage = (e) => {
      if (e.key === 'Enter') {
        console.log('do validate');
      }
    }
    return (
      <div className="compose">
        <input
          type="text"
          className="compose-input"
          placeholder="Type a message, @name"
          onKeyDown={handleInputMessage}
        />

        {
          props.rightItems
        }
      </div>
    );
}