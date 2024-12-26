import React from "react";

export interface InputProps {
  label: string;
  isTextArea?: boolean;
  type?: string;
  ref?: React.RefObject<HTMLInputElement | HTMLTextAreaElement | null>;
}

export interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
}

export interface ProjectState {
  selectedProjectId: undefined | null | number;
  projects: Project[];
  tasks: Task[];
}

export interface NoProjectProps {
  onAddProject: () => void;
}

export interface NewProjectProps {
  onAdd: (projectData: Project) => void;
  onCancel: () => void;
}
export interface SideBarProps {
  projects: Project[];
  selectedProjectId: number | null | undefined;
  onAddProject?: () => void;
  onSelectProject?: (projectId: number) => void;
}

export interface ModalProps {
  children?: React.ReactNode;
  ref?: React.RefObject<HTMLDialogElement | null>;
  buttonCaption?: string;
}

export interface HeadingProps {
  children: React.ReactNode;
}

export interface SelectedProjectProps {
  project: Project | undefined;
  tasks: Task[];
  onDelete: () => void;
  onAddTask: (text: string) => void;
  onDeleteTask: (taskId: number) => void;
}

export interface TaskProps {
  tasks: Task[];
  onAdd: (text: string) => void;
  onDelete: (taskId: number) => void;
}
export interface NewTaskProps {
  onAdd: (text: string) => void;
  onDelete?: (taskId: number) => void;
}

export type Project = {
  id?: number;
  title: string | undefined;
  description: string | undefined;
  dueDate: Date | undefined;
  selectedProjectId?: number | undefined;
};
export type Task = {
  id?: number;
  text: string;
};
