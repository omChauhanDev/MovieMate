// import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";
import { atom } from "jotai";

const userAtom = atom(null);
const isDarkAtom = atomWithStorage("isDark", false);
const isLoggedInAtom = atom(true);
// const isLoggedInAtom = atom(localStorage.getItem("user") !== null);

export { userAtom, isDarkAtom, isLoggedInAtom };
