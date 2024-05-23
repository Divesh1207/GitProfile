import React, { createContext, useContext, useState, useEffect } from 'react';

export const useUser = createContext(null);

export const Context = ({ children }) => {
    const [user, setUser] = useState("");
    const [userData, setUserData] = useState(JSON.parse(localStorage.getItem('userData')) || null);
    const [repos, setRepos] = useState(JSON.parse(localStorage.getItem('repos')) || []);
    const [followers, setFollowers] = useState(JSON.parse(localStorage.getItem('followers')) || []);
    const [following, setFollowing] = useState(JSON.parse(localStorage.getItem('following')) || []);
    const [activity, setActivity] = useState(JSON.parse(localStorage.getItem('activity')) || []);
    const [error, setError] = useState(null);

    useEffect(() => {
        localStorage.setItem('userData', JSON.stringify(userData));
    }, [userData]);

    useEffect(() => {
        localStorage.setItem('repos', JSON.stringify(repos));
    }, [repos]);

    useEffect(() => {
        localStorage.setItem('followers', JSON.stringify(followers));
    }, [followers]);

    useEffect(() => {
        localStorage.setItem('following', JSON.stringify(following));
    }, [following]);

    useEffect(() => {
        localStorage.setItem('activity', JSON.stringify(activity));
    }, [activity]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!user) return;

        try {
            const response = await fetch(`https://api.github.com/users/${user}`);
            if (!response.ok) {
                throw new Error('User not found');
            }
            const data = await response.json();
            setUserData(data);

            const reposResponse = await fetch(data.repos_url);
            const reposData = await reposResponse.json();
            setRepos(reposData);
            const followersUrl = data.followers_url.replace('{/other_user}', '');
            const followersResponse = await fetch(followersUrl);
            const followersData = await followersResponse.json();
            setFollowers(followersData);
            const followingUrl = data.following_url.replace('{/other_user}', '');
            const followingResponse = await fetch(followingUrl);
            const followingData = await followingResponse.json();
            setFollowing(followingData);

            const activityResponse = await fetch(`https://api.github.com/users/${user}/events`);
            const activityData = await activityResponse.json();
            setActivity(activityData);

            setError(null);
        } catch (error) {
            console.error(error);
            setUserData(null);
            setRepos([]);
            setFollowers([]);
            setFollowing([]);
            setActivity([]);
            setError(error.message);
        }
    };

    return (
        <useUser.Provider value={{ user, setUser, userData, repos, followers, following, activity, error, handleSubmit }}>
            {children}
        </useUser.Provider>
    );
};
