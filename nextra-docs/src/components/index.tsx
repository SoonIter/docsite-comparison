"use client";

import { useState } from 'react';

export default ({ children }) => {
  const [active, setActive] = useState(false);
  return (
    <div>
      <button onClick={() => setActive(!active)}>
        {active ? 'hide' : 'show'}
      </button>

      {active ? children : null}
    </div>
  );
};
