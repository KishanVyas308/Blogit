import { atom } from "recoil";
import { Blog } from "../hooks";


const blogsAtom = atom<Blog[]>({
    key: 'blogsAtom', // unique ID (with respect to other atoms/selectors)
    default: [], // default value (aka initial value)
  });

  export default blogsAtom;