import React, { useCallback, useEffect, useRef, useState } from 'react';
import './displayDropdown.css';

// Ensure paths are correct based on your project structure
import settingsIcon from '../../../images/Display.svg'; // Adjust this path
import chevronDownIcon from '../../../images/down.svg'; // Adjust this path

function DisplayDropdown({ grouping, setGrouping, ordering, setOrdering }) {
  const [visible, setVisible] = useState(false);
  const componentRef = useRef(null);

  // Toggle dropdown visibility
  const openDropdown = useCallback(() => {
    setVisible((prev) => !prev);
  }, []);

  const handleClickOutside = useCallback((event) => {
    if (componentRef.current && !componentRef.current.contains(event.target)) {
      setVisible(false);
    }
  }, []);

  const onGroupingChange = useCallback((e) => {
    setGrouping(e.target.value);
    setVisible(false); // Close the dropdown when a grouping option is selected
  }, [setGrouping]);

  const onOrderingChange = useCallback((e) => {
    setOrdering(e.target.value);
    setVisible(false); // Close the dropdown when an ordering option is selected
  }, [setOrdering]);

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [handleClickOutside]);

  return (
    <div className='display-dropdown' ref={componentRef}>
      <div className='dropdown-label-container' onClick={openDropdown}>
        {/* Use imported images for icons */}
        <img src={settingsIcon} alt="Settings" style={{ width: '20px', height: '20px' }} />
        <div className='dropdown-label'>Display</div>
        {/* Apply class to flip chevron when dropdown is visible */}
        <img 
          src={chevronDownIcon} 
          alt="Dropdown" 
          style={{ width: '20px', height: '20px', transform: visible ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s' }} 
        />
      </div>
      <div className={`dropdown-content-container ${visible ? "visible" : ""}`}>
        <div className='dropdown-content-row'>
          <div className='dropdown-content-label'>Grouping</div>
          <select name="grouping" id="grouping" value={grouping} onChange={onGroupingChange}>
            <option value="status">Status</option>
            <option value="user">User</option>
            <option value="priority">Priority</option>
          </select>
        </div>
        <div className='dropdown-content-row'>
          <div className='dropdown-content-label'>Ordering</div>
          <select name="ordering" id="ordering" value={ordering} onChange={onOrderingChange}>
            <option value="priority">Priority</option>
            <option value="title">Title</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default DisplayDropdown;
