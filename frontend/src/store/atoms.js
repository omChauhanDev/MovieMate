import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";

const userAtom = atomWithStorage(null);
const isDarkAtom = atomWithStorage(false);
export { userAtom, isDarkAtom };
