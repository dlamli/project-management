import noProjectImage from "../assets/no-projects.png";
import { NoProjectProps } from "../libs/types";
import Button from "./Button";
import Heading from "./Heading";
export default function NoProject({ onAddProject }: NoProjectProps) {
  return (
    <div className="mt-24 text-center w-2/3">
      <img
        className="size-16 object-contain mx-auto"
        src={noProjectImage}
        alt="No Project Image"
      />
      <Heading>No Project Selected</Heading>
      <p className="text-stone-400 mb-4">
        Select a project or get started with a new one
      </p>
      <p className="mt-8 ">
        <Button onClick={onAddProject}>Create new project</Button>
      </p>
    </div>
  );
}
