import React, { useState } from "react";
import { Input, Button, Grid } from "@material-ui/core";

export default function () {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = (e) => {
    if (e.target.name === "firstName") {
      setFirstName(e.target.value);
    }
    if (e.target.name === "lastName") {
      setLastName(e.target.value);
    }
    if (e.target.name === "email") {
      setEmail(e.target.value);
    }
    if (e.target.name === "password") {
      setPassword(e.target.value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
    });
  };

  return (
    <form onChange={handleChange} onSubmit={handleSubmit}>
      <Grid container direction="column" justify="center" alignItems="center">
        <Input value={firstName} name="firstName" placeholder="First Name" />
        <Input value={lastName} name="lastName" placeholder="Last Name" />
        <Input value={email} name="email" placeholder="Email" />
        <Input value={password} name="password" placeholder="Password" />
        <Button type="submit" color="primary">
          Sign Up
        </Button>
      </Grid>
    </form>
  );
}
