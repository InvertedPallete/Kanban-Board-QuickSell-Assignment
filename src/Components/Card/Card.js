import React from 'react';
import './Card.css';

import icon0 from '../../Assets/Images/zero.svg';
import icon1 from '../../Assets/Images/Low.svg';
import icon2 from '../../Assets/Images/Medium.svg';
import icon3 from '../../Assets/Images/High.svg';
import icon4 from '../../Assets/Images/urgent-grey.svg';

export default function Card(props) {
  return (
    <div className="card-container">
      <div className="card-id-wrapper">
        <div className="card-id">{props.cardDetails.id}</div>
        <div className="card-profile">
          <div className="card-profile-initial">{props.cardDetails.userObj.name[0]}{props.cardDetails.userObj.name[1]}</div>
          <div className={props.cardDetails.userObj.available ? "card-profile-initial-available card-profile-initial-available-true" : "card-profile-initial-available"}></div>
        </div>
      </div>
      <div className="card-title">
        {props.cardDetails.title}
      </div>
      <div className="card-tag">
        {(() => {
          switch (props.cardDetails.priority) {
            case 0:
              return <div className="card-tag-icon"><img src={icon0} alt="Icon 0" /></div>;
            case 1:
              return <div className="card-tag-icon"><img src={icon1} alt="Icon 1" /></div>;
            case 2:
              return <div className="card-tag-icon"><img src={icon2} alt="Icon 2" /></div>;
            case 3:
              return <div className="card-tag-icon"><img src={icon3} alt="Icon 3" /></div>;
            case 4:
              return <div className="card-tag-icon"><img src={icon4} alt="Icon 4" /></div>;
            default:
              return null;
          }
        })()}
        
        {props.cardDetails.tag.map((tag, index) => {
          return (
            <div className="card-tag-box" key={index}>
              <div className="card-tag-title">{tag}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
