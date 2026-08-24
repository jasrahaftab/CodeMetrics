import React, { useState } from 'react';
import Navbar from '../components/Navbar';

const Leaderboard = () => {
  const [activeTab, setActiveTab] = useState('all');

  const leaders = [
    { rank: 1, name: 'Elena Rostova', handle: 'elena_code', solved: 2150, rating: 2680, streak: 120, badge: '👑 Grandmaster' },
    { rank: 2, name: 'Devon Vance', handle: 'devon_v', solved: 1980, rating: 2540, streak: 94, badge: '⭐ Master' },
    { rank: 3, name: 'Kenji Sato', handle: 'kenjisato', solved: 1890, rating: 2490, streak: 88, badge: '⭐ Master' },
    { rank: 4, name: 'Sarah Connor', handle: 'sarah_c', solved: 1720, rating: 2310, streak: 72, badge: '⚡ Guardian' },
    { rank: 5, name: 'Alex Johnson', handle: 'alex_dev', solved: 1450, rating: 2145, streak: 52, badge: '⚡ Guardian' },
    { rank: 6, name: 'Rahul Sharma', handle: 'rahul_dev', solved: 1390, rating: 2080, streak: 45, badge: '🔥 Knight' },
    { rank: 7, name: 'Mia Chen', handle: 'miachen', solved: 1310, rating: 2010, streak: 39, badge: '🔥 Knight' }
  ];

  return (
    <div className="page leaderboard-page">
      <Navbar />
      <div className="leaderboard-content">
        <header className="leaderboard-header">
          <h1>Global Coding Leaderboard</h1>
          <p>Top developers ranked by overall problem solving and contest performance.</p>
        </header>

        <div className="leaderboard-filters">
          <button
            className={`filter-btn ${activeTab === 'all' ? 'active' : ''}`}
            onClick={() => setActiveTab('all')}
          >
            All Platforms
          </button>
          <button
            className={`filter-btn ${activeTab === 'leetcode' ? 'active' : ''}`}
            onClick={() => setActiveTab('leetcode')}
          >
            LeetCode
          </button>
          <button
            className={`filter-btn ${activeTab === 'codeforces' ? 'active' : ''}`}
            onClick={() => setActiveTab('codeforces')}
          >
            Codeforces
          </button>
        </div>

        <div className="table-wrapper">
          <table className="leaderboard-table">
            <thead>
              <tr>
                <th>Rank</th>
                <th>Developer</th>
                <th>Rating</th>
                <th>Problems Solved</th>
                <th>Streak</th>
                <th>Badge</th>
              </tr>
            </thead>
            <tbody>
              {leaders.map((user) => (
                <tr key={user.rank} className={user.rank <= 3 ? `top-rank rank-${user.rank}` : ''}>
                  <td className="rank-cell">
                    {user.rank === 1 ? '🥇 1' : user.rank === 2 ? '🥈 2' : user.rank === 3 ? '🥉 3' : `#${user.rank}`}
                  </td>
                  <td className="developer-cell">
                    <span className="dev-name">{user.name}</span>
                    <span className="dev-handle">@{user.handle}</span>
                  </td>
                  <td className="rating-cell font-bold">{user.rating}</td>
                  <td>{user.solved}</td>
                  <td>🔥 {user.streak} days</td>
                  <td>
                    <span className="rank-badge">{user.badge}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;
