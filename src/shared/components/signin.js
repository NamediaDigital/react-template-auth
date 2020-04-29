import React, { useState } from "react";
import { Input, Button, Grid } from "@material-ui/core";

export default function () {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = (e) => {
    if (e.target.name === "email") {
      setEmail(e.target.value);
    }
    if (e.target.name === "password") {
      setPassword(e.target.value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ email: email, password: password });
  };

  return (
    <form onChange={handleChange} onSubmit={handleSubmit}>
      <Grid container direction="column" justify="center" alignItems="center">
        <Input value={email} name="email" placeholder="Email" />
        <Input value={password} name="password" placeholder="Password" />
        <Button type="submit" color="secondary">
          Sign In
        </Button>
      </Grid>
    </form>
  );
}
