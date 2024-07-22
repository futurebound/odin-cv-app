/* eslint-disable react/prop-types */

function WorkDisplay({ data }) {
  return (
    <div>
      <h1>Work Experience</h1>
      <p>Company Name: {data.companyName}</p>
      <p>Position: {data.position}</p>
      <p>Responsibilities: {data.responsibilities}</p>
      <p>Start Date: {data.startDate}</p>
      <p>End Date: {data.endDate}</p>
    </div>
  );
}

export default WorkDisplay;
