import { useState } from "react";
import { Project, ProjectState } from "../libs/types";

const initialProjectState: ProjectState = {
  selectedProjectId: undefined,
  projects: [],
  tasks: [],
};

export const useProject = () => {
  const [projectState, setProjectState] =
    useState<ProjectState>(initialProjectState);

  const selectedProject = projectState.projects.find(
    (project) => project.id === projectState.selectedProjectId
  );

  const handleStartAddProject = () => {
    setProjectState((prevProjectState: ProjectState) => {
      return {
        ...prevProjectState,
        selectedProjectId: null,
      };
    });
  };

  const handleSelectProject = (projectId: number) => {
    setProjectState((prevProjectState: ProjectState) => {
      return {
        ...prevProjectState,
        selectedProjectId: projectId,
      };
    });
  };

  const handleCancel = () => {
    setProjectState((prevProjectState: ProjectState) => {
      return {
        ...prevProjectState,
        selectedProjectId: undefined,
      };
    });
  };

  const handleAddProject = (projectData: Project) => {
    const projectId = Math.random();
    setProjectState((prevProjectState) => {
      const newProject: Project = {
        ...projectData,
        id: projectId,
      };

      return {
        ...prevProjectState,
        selectedProjectId: undefined,
        projects: [...prevProjectState.projects, newProject],
      };
    });
  };

  const handleDeleteProject = () => {
    setProjectState((prevProjectState: ProjectState) => {
      return {
        ...prevProjectState,
        selectedProjectId: undefined,
        projects: prevProjectState.projects.filter(
          (project) => project.id !== projectState.selectedProjectId
        ),
      };
    });
  };

  const handleAddTask = (text: string) => {
    const taskId = Math.random();
    setProjectState((prevState: ProjectState) => {
      const newTask = {
        text,
        projectId: prevState.selectedProjectId,
        id: taskId,
      };

      return {
        ...prevState,
        selectedProjectId: undefined,
        tasks: [newTask, ...prevState.tasks],
      };
    });
  };

  const handleDeleteTask = (taskId: number) => {
    setProjectState((prevProjectState: ProjectState) => {
      return {
        ...prevProjectState,
        tasks: prevProjectState.tasks.filter((task) => task.id !== taskId),
      };
    });
  };

  return {
    // Variables
    projectState,
    selectedProject,
    // Methods
    handleStartAddProject,
    handleSelectProject,
    handleCancel,
    handleAddProject,
    handleDeleteProject,
    handleAddTask,
    handleDeleteTask,
  };
};
