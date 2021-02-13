import React from 'react';

export default function Createprofile(props) {
  return (
    <>
    <div>
      <h1 className="text-center mt-4 profiletitle">Create Your Profile</h1>
    </div>
    <div className="row">
      <div className="col">
        <h4 className="input">First Name:</h4> <input type="text" id="FirstName" name="FirstName" required />
        <h4 className="input">Last Name:</h4> <input type="text" id="LastName" name="LastName"required />
        <h4 className="input">Email:</h4> <input type="text" id="Email" name="Email" required />
        <h4 className="input">Password:</h4> <input type="text" id="Password" name="Password" required />
        <h4 className="input">Gender:</h4> <input type="text" placeholder="M/F" id="Gender" name="Gender" required />
      </div>
      <div className="col">
          <img src="/images/body-image_blue.jpg" alt="Body Image" className="bodyImageProfile" />
      </div>
      <div className="col">
        <h4 className="input">Date Of Birth:</h4> <input type="date" placeholder="mm/dd/yyyy" id="DateOfBirth" name="DateOfBirth" required />
        <h4 className="input">City:</h4> <input type="text"  id="City" name="City" required />
        <h4 className="input">Zip Code:</h4> <input type="number"  id="ZipCode" name="ZipCode" required />
        <h4 className="input">Height:</h4> <input type="number" placeholder="inches" id="Height" name="Height" required />
        <h4 className="input">Weight:</h4> <input type="number" placeholder="lbs" id="Weight" name="Weight" required /><br></br>
      </div>
    </div>
    <div>
      <button className="createbutton">CREATE</button>
    </div>
    </>
  );
}
