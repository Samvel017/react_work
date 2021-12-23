import React from 'react';

export default function Nav({ json }) {
  return (
    <div className="nav">
      {json.tabs.map((tab, index) => {
        return (
          <button className={`tab ${index === 2 ? 'active' : ''}`} key={index}>
            {tab.title}
          </button>
        );
      })}
    </div>
  );
}
