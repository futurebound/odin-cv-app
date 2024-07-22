/* eslint-disable react/prop-types */

function GeneralInfoDisplay({ data }) {
  return (
    <div>
      <h1>{data.name}</h1>
      <h2>{data.email}</h2>
      <h2>{data.phone}</h2>
    </div>
  );
}

export default GeneralInfoDisplay;
