import React, { useState } from 'react';
import Me from './components/Me';
import Team from './components/Team';
import Work from './components/Work';
import Project from './components/Project';

import './App.scss';

export default () => {
  const [viewProject, setViewProject] = useState();

  return (
    <main className="App">
      <Me setViewProject={setViewProject} />
      <Work setViewProject={setViewProject} />
      <Team />
      {viewProject && <Project projectId={viewProject} />}
    </main>
  );
};
