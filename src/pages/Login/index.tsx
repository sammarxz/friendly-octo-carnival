import { useState, FormEvent } from "react";
import { useAtom } from "jotai";
import { useNavigate } from "react-router-dom";

import { Field } from "@/components/Field";

import { useField } from "@/hooks/useField";

import { fakeLogin, validateEmail, validatePassword } from "@/utils";

import { userAtom } from "@/atoms";
import { Messages } from "@/config/messages";

const LoginPage = () => {
  const [_user, setUser] = useAtom(userAtom);
  const [formError, setFormError] = useState("");
  const navigate = useNavigate();

  const emailField = useField({
    type: "text",
    placeholder: "example.email@gmail.com",
    validate: (value) => validateEmail(value),
  });

  const passwordField = useField({
    type: "password",
    placeholder: "********",
    validate: (value: string) => validatePassword(value),
  });

  const handleLogin = (event: FormEvent) => {
    event.preventDefault();

    const email = emailField.value;
    const password = passwordField.value;

    if (emailField.isValid && passwordField.isValid) {
      if (fakeLogin(email, password)) {
        setUser(() => ({
          email: emailField.value,
          password: passwordField.value,
        }));
        return navigate("/dashboard");
      }
    }

    return setFormError(Messages.LOGIN_ERROR);
  };

  return (
    <form onSubmit={handleLogin}>
      <Field label="Email" required fieldProps={emailField} />
      <Field label="Password" required fieldProps={passwordField} />
      <button type="submit">Login</button>
      {formError && <span>{formError}</span>}
    </form>
  );
};

export { LoginPage };
