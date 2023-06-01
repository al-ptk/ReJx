import React, { FormEvent } from 'react';
import './Terminal.css';

export default function Terminal() {
  return (
    <form className="HistoryDisplay" onSubmit={(e) => handleSubmission(e)}>
      <label className="Terminal" title="prompt">
        {'>'}
        <input
          className="TerminalInput"
          type="text"
          name="userInput"
          autoFocus
          tabIndex={1}
        />
      </label>
    </form>
  );
}

function handleSubmission(event: FormEvent) {
  event.preventDefault();
}
