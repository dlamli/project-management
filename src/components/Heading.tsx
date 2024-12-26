import { HeadingProps } from "../libs/types";

export default function Heading({ children }: HeadingProps) {
  return <h2 className="text-xl font-bold text-stone-500 my-4">{children}</h2>;
}
