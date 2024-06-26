import { ObjProps } from "@/components/DisplayProducts";
import { atomWithStorage } from "jotai/utils";

export const cartAtom = atomWithStorage<ObjProps[]>("cartItem", []);
