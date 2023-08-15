import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import JobTypeSelectorComponent from './jobTypeSelectorComponent';
import FreelanceJobFormComponent from './freelanceJobFormComponent';
import EmploymentJobFormComponent from './employmentJobFormComponent';

function JobPage() {
  const [selectedJobType, setSelectedJobType] = useState(null);

  return (
    <div className="app">
      <div>
        <JobTypeSelectorComponent onSelectJobType={setSelectedJobType} />

        {selectedJobType === 'freelance' && <FreelanceJobFormComponent />}
        {selectedJobType === 'employment' && <EmploymentJobFormComponent />}
      </div>
    </div>
  );
}

ReactDOM.render(<JobPage />, document.getElementById('root'));