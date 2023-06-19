import { atom } from "jotai";

export type User = {
  email: string;
  password: string;
};

const initialUser: User = {
  email: "",
  password: "",
};

const userAtom = atom<User>(initialUser);

export { userAtom };