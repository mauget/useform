import React from "react";
import { useForm } from "react-hook-form";

function onSubmitForm(formData) {
  console.log("The status of formData", formData);
  alert("The phone number is: " + formData.phoneNumber);
}

export default function MyForm() {
  const { register, handleSubmit, errors, watch } = useForm();
  console.log("ERR", errors);
  const showDatePicker = watch("showDatePicker");
  return (
      <>
        <h1>
          Your phone number is:
          <br /> {watch("phoneNumber")}
        </h1>
        <form onSubmit={handleSubmit(onSubmitForm)}>
          <label>
            Phone Number:
            <input
                type="text"
                name="phoneNumber"
                ref={register({
                  required: {
                    value: true,
                    message: "Phone number is required",
                  },
                  minLength: {
                    value: 12,
                    message: "Phone number should be minimum length of 12",
                  },
                })}
            />
          </label>
          <br />
          <label>
            Show the Date picker:
            <input type="checkbox" ref={register} name="showDatePicker" />
          </label>
          <br />
          {showDatePicker && <input type="date" ref={register} name="dob" />}
          <br />
          <input type="submit" value="Submit" />
        </form>
      </>
  );
}
