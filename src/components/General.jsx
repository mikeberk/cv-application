import { useState } from "react";
import Form from "./Form";

export default function General({ contact, handleChange }) {
  return (
    <div className="info-form form-section">
      <h2>Personal Info</h2>
      <Form
        label="First Name"
        name="fname"
        value={contact.firstName}
        handleChange={handleChange}
        inputType={"text"}
      />
      <Form
        label="Last Name"
        name="lname"
        value={contact.lastName}
        handleChange={handleChange}
        inputType={"text"}
      />
      <Form
        label="Phone"
        name="phone"
        value={contact.phone}
        handleChange={handleChange}
        inputType={"text"}
      />
      <Form
        label="Email"
        name="email"
        value={contact.email}
        handleChange={handleChange}
        inputType={"text"}
      />
    </div>
  );
}
