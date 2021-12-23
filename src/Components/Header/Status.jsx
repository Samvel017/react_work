import React from 'react';
import img1 from '../../Images/Rectangle1.png';
import img2 from '../../Images/Rectangle2.png';
import img3 from '../../Images/Rectangle3.png';

export default function Status({ json}) {
  const images = [img1, img2, img3];

  return (
    <div className="header-top">
      <div className="title">{json.page_title}</div>
      <div className="status-block">
        {json.plans.map((plan, index) => {
          return (
            <div
              className={`status-btn ${plan.active ? 'active' : ''}`}
              style={{ backgroundImage: `url(${images[index]})` }}
              key={index}
            >
              <h3>
                <span>{plan.name}</span>
              </h3>
            </div>
          );
        })}
        <div className="upgrade-btn">
          <button>Upgrade Now</button>
        </div>
      </div>
    </div>
  );
}
