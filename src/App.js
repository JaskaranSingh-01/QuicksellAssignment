import React, { useCallback, useEffect, useState } from 'react';
import Header from './components/Header';
import Grid from './components/Grid';
import { GET_TICKETS_URL } from './constants';
import { loadGrid, mapUsersByUserId } from './utils';
import Loader from './components/Loader';
import './App.css';

function App() {
    const [tickets, setTickets] = useState([]);
    const [userData, setUserData] = useState({});
    const [gridData, setGridData] = useState({});
    const [grouping, setGrouping] = useState("status");
    const [ordering, setOrdering] = useState("priority");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Load settings from localStorage
        loadSettings();

        // Fetch tickets and users from the API
        fetch(GET_TICKETS_URL)
            .then(resp => {
                if (!resp.ok) {
                    throw new Error(`HTTP error! status: ${resp.status}`);
                }
                return resp.json();
            })
            .then(res => {
                const { tickets, users } = res;
                console.log(res);
                setTickets(tickets);
                setUserData(mapUsersByUserId(users));
            })
            .catch(err => console.error('Error fetching data:', err));
    }, []);

    useEffect(() => {
        if (!tickets.length) return;
        setGridData(loadGrid(tickets, grouping, ordering));
        setLoading(false);
    }, [grouping, ordering, tickets]);

    // Function to handle grouping change
    const onSetGrouping = useCallback((value) => {
        setLoading(true);
        setGrouping(value);
        saveSettings({ grouping: value }); // Save new grouping to localStorage
    }, []);

    // Function to handle ordering change
    const onSetOrdering = useCallback((value) => {
        setLoading(true);
        setOrdering(value);
        saveSettings({ ordering: value }); // Save new ordering to localStorage
    }, []);

    // Function to save settings to localStorage
    const saveSettings = useCallback((data) => {
        for (let key in data) localStorage.setItem(key, data[key]);
    }, []);

    // Function to load settings from localStorage
    const loadSettings = useCallback(() => {
        setGrouping(localStorage.getItem("grouping") || "status");
        setOrdering(localStorage.getItem("ordering") || "priority");
    }, []);

    return (
        <div className="App">
            <Header grouping={grouping} setGrouping={onSetGrouping} ordering={ordering} setOrdering={onSetOrdering} />
            {loading ? <Loader /> :
                <Grid gridData={gridData} grouping={grouping} userIdToData={userData} />
            }
        </div>
    );
}

export default App;
