import React, { useState, useEffect } from 'react';

const Dashboard = () => {
    const [moderationActions, setModerationActions] = useState([]);

    useEffect(() => {
        // Fetch moderation actions from backend API
        const fetchModerationActions = async () => {
            try {
                const response = await fetch('/api/moderationActions');
                if (response.ok) {
                    const data = await response.json();
                    setModerationActions(data);
                }
            } catch (error) {
                console.error('Error fetching moderation actions: ', error);
            }
        };

        fetchModerationActions();
    }, []);

    return (
        <div>
            <h1>Dashboard</h1>
            <ul>
                {moderationActions.map((action, index) => (
                    <li key={index}>{action.type} - {action.user} - {action.timestamp}</li>
                ))}
            </ul>
        </div>
    );
};

export default Dashboard;