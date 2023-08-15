import React, { useState } from 'react';
import './index.css';

function EmploymentJobForm() {
  const [title, setTitle] = useState('');
  const [jobDescription, setJobDescription] = useState('');
  const [skills, setSkills] = useState('');
  const [projectLength, setProjectLength] = useState('');
  const [min, setMin] = useState('');
  const [max, setMax] = useState('');
  const [workingHours, setWorkingHours] = useState('');
  const [experiencedIn, setExperiencedIn] = useState('');
  const [forAtLeast, setForAtLeast] = useState('');
  
  return (
    <div className="freelance-job-form">
      <div className="section">
        <h2>Describe your job</h2>
        <label>Title/Position:</label>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        <label>Job Description:</label>
        <textarea value={jobDescription} onChange={(e) => setJobDescription(e.target.value)} />
        <label>Skills:</label>
        <input type="text" value={skills} onChange={(e) => setSkills(e.target.value)} />
        <p>Developers will find your job based on the skills you added here.</p>
      </div>

      <div className="section">
        <h2>Project Conditions</h2>
        <label>Project Length:</label>
        <input type="text" value={projectLength} onChange={(e) => setProjectLength(e.target.value)} />
        <div className="min-max-container">
          <label>Payment:</label>
          <div className="min-max-inputs">
            <label>Min:</label>
            <input type="number" value={min} onChange={(e) => setMin(e.target.value)} />
            <label>Max:</label>
            <input type="number" value={max} onChange={(e) => setMax(e.target.value)} />
          </div>
        </div>
        <label>Working Hours:</label>
        <input type="text" value={workingHours} onChange={(e) => setWorkingHours(e.target.value)} />
      </div>

      <div className="section">
        <p>This section is designed based on the type of the job. It could be developed by conditional rendering.</p>
        <div className="min-max-inputs">
            <label>Experienced in:</label>
            <input type="text" value={experiencedIn} onChange={(e) => setExperiencedIn(e.target.value)} />
            <label>For at least:</label>
            <input type="text" value={forAtLeast} onChange={(e) => setForAtLeast(e.target.value)} />
          </div>
      </div>

      <div className="post-button">
        <button>Post</button>
      </div>
    </div>
  );
}
  
export default EmploymentJobForm;