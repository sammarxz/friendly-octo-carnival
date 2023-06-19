import { Messages } from "@/config/messages";

const validateEmail = (email: string) => {
  if (!email) {
    return Messages.REQUIRED_FIELD;
  }

  if (!/\S+@\S+\.\S+/.test(email)) {
    return Messages.INAVLID_EMAIL;
  }

  return undefined;
};

export { validateEmail };
