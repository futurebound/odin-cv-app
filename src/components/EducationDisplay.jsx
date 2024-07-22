/* eslint-disable react/prop-types */

function EducationDisplay({ data }) {
  return (
    <div>
      <h3>School Name</h3>
      <p>{data.schoolName}</p>
      <h3>Field of Study</h3>
      <p>{data.field}</p>
      <h3>Graduation Date</h3>
      <p>{data.graduationDate}</p>
    </div>
  );
}

export default EducationDisplay;
