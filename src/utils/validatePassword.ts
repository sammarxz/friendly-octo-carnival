import { Messages } from "@/config/messages";

const validatePassword = (password: string) => {
  if (!password) {
    return Messages.REQUIRED_FIELD;
  }

  return undefined;
};

export { validatePassword };
