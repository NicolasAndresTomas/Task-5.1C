import React, { useState } from 'react';
import './index.css';

function JobTypeSelector({ onSelectJobType }) {
  const [selectedJobType, setSelectedJobType] = useState(null);

  const handleCheckboxChange = (jobType) => {
    setSelectedJobType(jobType);
    onSelectJobType(jobType);
  };

  return (
    <div className="job-type-selector-container">
      <div className="job-type-selector">
        <h2>New Job</h2>
        <label>
          <input
            type="checkbox"
            checked={selectedJobType === 'freelance'}
            onChange={() => handleCheckboxChange('freelance')}
          />
          Freelance
        </label>
        <label>
          <input
            type="checkbox"
            checked={selectedJobType === 'employment'}
            onChange={() => handleCheckboxChange('employment')}
          />
          Employment
        </label>
      </div>
    </div>
  );
}

export default JobTypeSelector;