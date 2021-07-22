import { useState } from "react";

import styled from "styled-components";

const RegistrationFormContainer = styled.form`
  background: blue;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const RegistrationFormLabels = styled.label`
margin: 5px;
padding: 5px;
font-size: 25px;
font-weight: bold;
font-family: times;
`;

const RegistrationFormInput = styled.input`
margin: 5px;
padding: 5px;
`;

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
    role: "teacher",
    qualification: "",
  };
  const [formState, setFormState] = useState(initialFormState);
  return (
    <RegistrationFormContainer>
      <RegistrationFormLabels for="fname">
        First Name
        <RegistrationFormInput type="text" id="fname" value={formState.fname} required></RegistrationFormInput>
      </RegistrationFormLabels>
      <RegistrationFormLabels id="lname">
        Last Name
        <RegistrationFormInput type="text" id="lname" value={formState.lname} required></RegistrationFormInput>
      </RegistrationFormLabels>
      <RegistrationFormLabels id="mname">
        Middle Name
        <RegistrationFormInput type="text" id="mname" value={formState.mname}></RegistrationFormInput>
      </RegistrationFormLabels>
      <RegistrationFormLabels id="dob">
        Date of birth
        <RegistrationFormInput type="date" id="dob" value={formState.dob}></RegistrationFormInput>
      </RegistrationFormLabels>
      <RegistrationFormLabels for="gender">
        Gender
        <RegistrationFormLabels for="male">
          <RegistrationFormInput
            type="radio"
            value="male"
            id="male"
            checked={formState.gender === "male"}
          ></RegistrationFormInput>
          Male
        </RegistrationFormLabels>
        <RegistrationFormLabels for="female">
          <RegistrationFormInput
            type="radio"
            value="female"
            id="female"
            checked={formState.gender === "female"}
          ></RegistrationFormInput>
          Female
        </RegistrationFormLabels>
      </RegistrationFormLabels>
      <RegistrationFormLabels for="role">
        I am a
        <select name="role" id="role">
          <option
            id="role"
            value="teacher"
            selected={formState.role === "teacher"}
          >
            Teacher
          </option>
          <option
            id="role"
            value="student"
            selected={formState.role === "student"}
          >
            Student
          </option>
        </select>
      </RegistrationFormLabels>
      <RegistrationFormLabels id="phone">
        Contact Number
        <RegistrationFormInput type="tel" id="phone" value={formState.phone}></RegistrationFormInput>
      </RegistrationFormLabels>
      <RegistrationFormLabels id="mail">
        E-mail
        <RegistrationFormInput type="email" id="mail" value={formState.mail}></RegistrationFormInput>
      </RegistrationFormLabels>
      {formState.role === "student" && (
        <RegistrationFormLabels for="class">
          Class
          <RegistrationFormInput
            type="text"
            id="class"
            value={formState.class}
            required
          ></RegistrationFormInput>
          <br />{" "}
        </RegistrationFormLabels>
      )}
      {formState.role === "teacher" && (
        <RegistrationFormLabels for="qualification">
          Educational Qualification
          <RegistrationFormInput
            type="text"
            id="qualification"
            value={formState.qualification}
            required
          ></RegistrationFormInput>
          <br />
        </RegistrationFormLabels>
      )}
      <RegistrationFormInput type="submit" value="Register" />
    </RegistrationFormContainer>
  );
};

export default CCP;
