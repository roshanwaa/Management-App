import { useState } from 'react';
import { NewProject } from './components/NewProject';
import { NoProjectSelected } from './components/NoProjectSelected';
import { ProjectsSidebar } from './components/ProjectsSidebar';
import generateUniqueId from 'generate-unique-id';
import { SelectedProject } from './components/SelectedProject';

function App() {
  let id = generateUniqueId({ length: 3 });

  const [projectSate, setProjectSate] = useState({
    selectedProjectId: undefined,
    projects: [],
    tasks: [],
    selectedTaskId: undefined,
  });

  function handleAddTasks(text) {
    setProjectSate((prevState) => {
      const taskID = id;
      const newTask = {
        text: text,
        id: taskID,
        taskID: prevState.selectedTaskId,
      };

      return {
        ...prevState,
        tasks: [newTask, ...prevState.tasks],
      };
    });
  }

  function handleDeleteTask(id) {
    setProjectSate((prevState) => {
      return {
        ...prevState,
        tasks: prevState.tasks.filter((task) => {
          return task.id !== id;
        }),
      };
    });
  }

  function handleStartAddProject() {
    setProjectSate((prevState) => {
      return {
        ...prevState,
        selectedProjectId: null,
      };
    });
  }

  const handleCancelAddProject = () => {
    setProjectSate((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
      };
    });
  };

  function handleAddProject(projectData) {
    setProjectSate((prevState) => {
      const newProject = {
        ...projectData,
        id: id,
      };

      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: [...prevState.projects, newProject],
      };
    });
  }

  const handleDeleteProject = () => {
    setProjectSate((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: prevState.projects.filter((project) => {
          return project.id !== prevState.selectedProjectId;
        }),
      };
    });
  };

  const handleSelectProject = (id) => {
    setProjectSate((prevState) => {
      return {
        ...prevState,
        selectedProjectId: id,
      };
    });
  };

  const selectProject = projectSate.projects.find((project) => {
    return project.id === projectSate.selectedProjectId;
  });

  let content = (
    <SelectedProject
      projects={selectProject}
      onDelete={handleDeleteProject}
      onAddTask={handleAddTasks}
      onDeleteTask={handleDeleteTask}
      tasks={projectSate.tasks}
    />
  );

  if (projectSate.selectedProjectId === null) {
    content = (
      <NewProject onAdd={handleAddProject} onCancel={handleCancelAddProject} />
    );
  } else if (projectSate.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />;
  }

  return (
    <main className="h-screen flex gap-8">
      <ProjectsSidebar
        onSelectProject={handleSelectProject}
        onStartAddProject={handleStartAddProject}
        projects={projectSate.projects}
        selectedProjectID={projectSate.selectedProjectId}
      />
      {content}
    </main>
  );
}

export default App;
