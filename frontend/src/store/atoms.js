// import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";

const userAtom = atomWithStorage("user", {});
const isDarkAtom = atomWithStorage("isDark", false);
export { userAtom, isDarkAtom };
