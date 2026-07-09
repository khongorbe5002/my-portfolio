import { useState } from 'react';
import TopDirectory from './TopDirectory';

export default function Everything() {
    return (
        <div className="subpage-subpage-container subpage-container--aligned">
          <TopDirectory />
                <div className="wip-container">
                <p>work in progress... </p>
                <p>check back later!</p>
                </div>
        </div>
        
    );
}

