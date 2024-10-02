import React, { useCallback, useMemo } from 'react';
import './grid.css';
import Column from '../Column/Column'; // Ensure this path is correct
import { Ticket, User } from '../../interfaces'; // Ensure interfaces.js exists

function Grid({ gridData, grouping, userIdToData }) { // Removed TypeScript types
    const keys = useMemo(() => Object.keys(gridData), [gridData]);

    return (
        <div className='grid'>
            {keys.map((k) => <Column key={k} tickets={gridData[k]} grouping={grouping} groupBy={k} userIdToData={userIdToData} />)}
        </div>
    );
}

export default Grid;

