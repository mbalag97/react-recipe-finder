import { useState } from "react";

const CCP = (props) => {
  const initialFormState = {
    fname: "",
    lname: "",
    mname: "",
    gender: "female",
    phone: "",
    mail: "",
    dob: "",
    class: "",
    role: "student",
  };
  const [formState, setFormState] = useState(initialFormState);
  return (
    <form>
      <label for="fname">First Name</label>
      <input type="text" id="fname" value={formState.fname} required></input>
      <br />
      <label id="lname">Last Name</label>
      <input type="text" id="lname" value={formState.lname} required></input>
      <br />
      <label id="mname">Middle Name</label>
      <input type="text" id="mname" value={formState.mname} required></input>
      <br />
      <label for="gender">Gender</label>
      <label for="male">
        <input
          type="radio"
          value="male"
          id="male"
          checked={formState.gender === "male"}
        ></input>
        Male
      </label>
      <label for="female">
        <input
          type="radio"
          value="female"
          id="female"
          checked={formState.gender === "female"}
        ></input>
        Female
      </label>
      <br />
      <label for="role">I am a</label>
      <select name="cars" id="cars">
        <option id="role" value="teacher" selected={formState.role === 'teacher'}>Teacher</option>
        <option id="role" value="student" selected={formState.role === 'student'}>Student</option>
      </select>
    </form>
  );
};

export default CCP;
