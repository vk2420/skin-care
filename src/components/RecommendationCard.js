// src/components/RecommendationCard.js
import React from 'react';

const RecommendationCard = ({ recommendation }) => {
    return (
        <div className="recommendation-card">
            <h2>Your Skincare Routine:</h2>
            <div style={{ whiteSpace: 'pre-wrap', textAlign: 'left', margin: '10px 0' }} dangerouslySetInnerHTML={{ __html: recommendation }}></div>
        </div>
    );
};

export default RecommendationCard;