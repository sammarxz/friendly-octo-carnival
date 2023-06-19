import { useState, FormEvent } from "react";
import { useAtom } from "jotai";
import { useNavigate } from "react-router-dom";
import { GrGoogle } from "react-icons/gr";

import { Logo, Field, Button } from "@/components";

import { useField } from "@/hooks/useField";

import { fakeLogin, validateEmail, validatePassword } from "@/utils";

import { userAtom } from "@/atoms";

import { Messages } from "@/config/messages";

import loginImageUrl from "@/assets/login-image.webp";

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
    placeholder: "Enter at least 8+ characters",
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
    <div className="h-screen flex">
      <div className="flex-1 flex h-full container flex-col justify-between items-center py-8 mx-auto">
        <Logo className="w-32" />
        <section className="space-y-8 md:mx-auto md:w-full md:max-w-sm">
          <header className="flex flex-col gap-2 text-center">
            <h1 className="text-2xl md:text-4xl font-semibold font-heading">
              Welcome back!
            </h1>
            <p className="text-neutral-600">
              Enter your credentials to access your account
            </p>
          </header>
          <form onSubmit={handleLogin} className="space-y-4">
            <Field label="Email" required fieldProps={emailField} />
            <Field label="Password" required fieldProps={passwordField} />
            <div className="mb-6 flex items-center justify-between">
              <div className="">
                <label className="inline-block hover:cursor-pointer">
                  <input className="mr-1" type="checkbox" />
                  Keep me logged in
                </label>
              </div>
              <a href="#!" className="text-primary-500 hover:underline ">
                Forgot password?
              </a>
            </div>
            <Button
              color="primary"
              type="submit"
              className="flex w-full justify-center"
              disabled={!(emailField.isValid && passwordField.isValid)}
            >
              Login
            </Button>
            {formError && (
              <span className="inline-block my-2 text-primary-500 w-full text-center">
                {formError}
              </span>
            )}
          </form>
          <div className="relative">
            <div
              className="flex items-center inset-0 absolute"
              aria-hidden="true"
            >
              <div className="border-t w-full border-gray-300" />
            </div>
            <div className="font-medium text-sm flex relative justify-center leading-3">
              <span className="px-4 bg-white text-gray-600">
                Or continue with
              </span>
            </div>
          </div>
          <div className="flex justify-stretch gap-4">
            <Button
              color="secondary"
              className="flex items-center justify-center gap-2 w-full"
              title="Sign in with Google"
            >
              <GrGoogle /> <span>Sign in with Google</span>
            </Button>
          </div>
        </section>
        <footer>
          <p className="text-gray-600 text-center">
            Publisher Name © All Rights Reserved 2023
          </p>
        </footer>
      </div>
      <div
        className="flex-1 none hidden xl:block h-full bg-center bg-cover"
        style={{ backgroundImage: `url(${loginImageUrl})` }}
      >
        {/* <img src={loginImageUrl} alt="" className="object-cover h-full w-full" /> */}
      </div>
    </div>
  );
};

export { LoginPage };
