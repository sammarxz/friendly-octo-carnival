import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";

export type User = {
  email: string;
  password: string;
};

const initialUser: User = {
  email: "",
  password: "",
};

const userAtom = atom<User>(initialUser);

const loggedAtom = atomWithStorage("loggedIn", false);

export { userAtom, loggedAtom };
