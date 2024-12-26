import NoProject from "./components/NoProject";
import NewProject from "./components/NewProject";
import SideBar from "./components/SideBar";
import SelectedProject from "./components/SelectedProject";
import { useProject } from "./hooks/useProject";

function App() {
  const {
    projectState,
    selectedProject,
    handleAddProject,
    handleAddTask,
    handleDeleteProject,
    handleDeleteTask,
    handleCancel,
    handleSelectProject,
    handleStartAddProject,
  } = useProject();

  let content = (
    <SelectedProject
      project={selectedProject}
      tasks={projectState.tasks}
      onDelete={handleDeleteProject}
      onAddTask={handleAddTask}
      onDeleteTask={handleDeleteTask}
    />
  );

  if (projectState.selectedProjectId === null) {
    content = <NewProject onAdd={handleAddProject} onCancel={handleCancel} />;
  }

  if (projectState.selectedProjectId === undefined) {
    content = <NoProject onAddProject={handleStartAddProject} />;
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <SideBar
        projects={projectState.projects}
        selectedProjectId={projectState.selectedProjectId}
        onAddProject={handleStartAddProject}
        onSelectProject={handleSelectProject}
      />
      {content}
    </main>
  );
}

export default App;
