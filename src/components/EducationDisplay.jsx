/* eslint-disable react/prop-types */

function EducationDisplay({ data }) {
  return (
    <div>
      <h3>School Name</h3>
      <p>{data.name}</p>
      <h3>Field of Study</h3>
      <p>{data.field}</p>
      <h3>Graduation Date</h3>
      <p>{data.date}</p>
    </div>
  );
}

export default EducationDisplay;
