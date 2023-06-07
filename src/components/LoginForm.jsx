import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import Button from "./Button";
import Form from "./Form";
import Query from "./Query";
import TextInput from "./TextInput";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState();
  const [loading, setLoading] = useState();
  const [error, setError] = useState();

  const navigate = useNavigate();
  const { login } = useAuth();

  function handleLogin(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      login(email, password);
      navigate("/");
    } catch (err) {
      console.log(err);
      setLoading(false);
      setError("Username & Password is not correct!");
    }
  }

  return (
    <Form style={{ height: "330px" }} onSubmit={handleLogin}>
      <TextInput
        type="text"
        placeholder="Enter email"
        icon="alternate_email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextInput
        type="password"
        placeholder="Enter password"
        icon="lock"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button disabled={loading} type="button">
        <span>Submit Now</span>
      </Button>
      {error && <p className="error">{error}</p>}
      <Query text1="Don't have an account?" text2="Signup" href="/signup" />
    </Form>
  );
}
