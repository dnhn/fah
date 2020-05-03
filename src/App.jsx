import React, { useState } from 'react';
import Me from './components/Me';
import Team from './components/Team';
import Work from './components/Work';
import Project from './components/Project';

import './App.scss';

export default _ => {
  const [viewProject, setViewProject] = useState();

  const currentHour = new Date().getHours();
  const darkTheme = currentHour >= 18 || currentHour < 6 ? 'Dark' : '';

  return (
    <main className={`App ${darkTheme}`}>
      <Me setViewProject={setViewProject} />
      <Work setViewProject={setViewProject} />
      <Team />
      {viewProject && <Project projectId={viewProject} />}
    </main>
  );
};
