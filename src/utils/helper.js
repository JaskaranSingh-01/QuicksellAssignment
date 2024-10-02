import React from 'react';
import noPriorityIcon from '../images/no_priority.svg'; // Adjust the path as necessary
import lowPriorityIcon from '../images/low_priority.svg';
import mediumPriorityIcon from '../images/medium_priority.svg';
import highPriorityIcon from '../images/high_priority.svg';
import urgentPriorityIcon from '../images/urgent_priority.svg';
import backlogIcon from '../images/backlog.svg';
import todoIcon from '../images/todo.svg';
import inProgressIcon from '../images/in_progress.svg';
import doneIcon from '../images/done.svg';
import canceledIcon from '../images/canceled.svg';
import menu from '../images/menu.svg';

// Mapping for priority icons
const priorityIcons = {
    "No priority": noPriorityIcon,
    "Low": lowPriorityIcon,
    "Medium": mediumPriorityIcon,
    "High": highPriorityIcon,
    "Urgent": urgentPriorityIcon,
    default: urgentPriorityIcon // Fallback
};

// Mapping for status icons
const statusIcons = {
    "Backlog": backlogIcon,
    "Todo": todoIcon,
    "In progress": inProgressIcon,
    "Done": doneIcon,
    "Canceled": canceledIcon,
    default: canceledIcon // Fallback
};

export const getPriorityIcon = (priority) => {
    const iconSrc = priorityIcons[priority] || priorityIcons.default; // Get icon or fallback
    return <img src={iconSrc} alt={`${priority} priority`} style={{ width: '1rem', height: '1rem' }} />;
};

export const getStatusIcon = (status) => {
    const iconSrc = statusIcons[status] || statusIcons.default; // Get icon or fallback
    return <img src={iconSrc} alt={`${status} status`} style={{ width: '1rem', height: '1rem' }} />;
};

export const getDotMenu = () => {
    const iconSrc = menu // Get icon or fallback
    return iconSrc;
};
