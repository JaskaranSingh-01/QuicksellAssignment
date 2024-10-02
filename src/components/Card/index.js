import React from 'react';
import './card.css';
import UserIcon from '../UserIcon';
import { getStatusIcon, getPriorityIcon } from '../../utils/helper'; // Import the new function

const parsePriority = {
  0: "No priority",
  1:"Low",
  2:"Medium",
  3:"High",
  4:"Urgent",
  default: "Urgent" // Fallback
};

function Card({ ticket, userData, grouping, hideStatusIcon, hideProfileIcon }) {
  return (
    <div className='card'>
      <div className='top-container'>
        <div className='ticket-id'>{ticket.id}</div>
        {!hideProfileIcon && <UserIcon name={userData.name} available={userData.available} />}
      </div>
      <div className='middle-container'>
        {!hideStatusIcon && getStatusIcon(ticket.status)}
        <div className='title'>{ticket.title}</div>
      </div>
      <div className='bottom-container'>
        {grouping != "priority" && <div className='tag-container'>
          {getPriorityIcon(parsePriority[ticket.priority])}
        </div>}
        {ticket.tag.map((t) => (
          <div key={t} className='tag-container'>
            <div className='tag-icon'>
            </div>
            <div className='tag-text'>{t}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Card;
