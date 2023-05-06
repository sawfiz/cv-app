import { useState } from 'react';

export default function PersonalInfo({ cv, updateCV }) {
  // const [info, setInfo] = useState({ firstName: '', lastName: '' });
  // if (cv.personalInfo) {
  //   const { firstName, lastName } = cv.personalInfo;
  //   console.log("🚀 ~ file: PersonalInfo.js:8 ~ PersonalInfo ~ firstName:", firstName)
  //   console.log("🚀 ~ file: PersonalInfo.js:8 ~ PersonalInfo ~ lastName:", lastName)
  //   setInfo({...info, firstName: firstName, lastName: lastName})
  // }
  // const [info, setInfo] = useState({
  //   firstName: cv.personalInfo.firstName,
  //   lastName: cv.personalInfo.lastName,
  // });

  // ^ Use the operational chaning operator.  It enables you to read the value of a property 
  // ^ located deep within a chain of connected objects without having to check that a child 
  // ^ actually exists deep in the object or not.  It returns `undefined` if error.
  
  // ^ React does not like the value of an input to change from `undefined` to defined
  // ^ therefore, I need to change `undefinded` to ''
  const [info, setInfo] = useState({
    firstName:
      cv.personalInfo?.firstName === undefined ? '' : cv.personalInfo.firstName,
    lastName:
      cv.personalInfo?.lastName === undefined ? '' : cv.personalInfo.lastName,
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
