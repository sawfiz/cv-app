import { useState } from 'react';

export default function PersonalInfo({ cv, updateCV }) {
  // const [info, setInfo] = useState({ firstName: '', lastName: '' });
  // if (cv.personalInfo) {
  //   const { firstName, lastName } = cv.personalInfo;
  //   console.log("🚀 ~ file: PersonalInfo.js:8 ~ PersonalInfo ~ firstName:", firstName)
  //   console.log("🚀 ~ file: PersonalInfo.js:8 ~ PersonalInfo ~ lastName:", lastName)
  //   setInfo({...info, firstName: firstName, lastName: lastName})
  // }
  const [info, setInfo] = useState({
    firstName: cv.personalInfo.firstName,
    lastName: cv.personalInfo.lastName,
  });

  function handleChange(e, attr) {
    setInfo({ ...info, [attr]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    updateCV('personalInfo', info);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <ul>
          <li>
            <label>First Name</label>
            <input
              value={info.firstName}
              onChange={(e) => handleChange(e, 'firstName')}
            ></input>
          </li>
          <li>
            <label>Last Name</label>
            <input
              value={info.lastName}
              onChange={(e) => handleChange(e, 'lastName')}
            ></input>
          </li>
        </ul>
        <button type="submit">Save</button>
      </form>
    </div>
  );
}
