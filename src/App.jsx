import React, { useState } from 'react';

import Me from './components/Me';
import Project from './components/Project';
import Team from './components/Team';
import Work from './components/Work';
import GitHub from './components/GitHub';

import './App.scss';

const App = _ => {
  const [projectId, setProjectId] = useState();

  const currentHour = new Date().getHours();
  const darkTheme = currentHour >= 18 || currentHour < 6 ? 'Dark' : '';

  return (
    <main className={`App ${darkTheme}`}>
      <Me setProjectId={setProjectId} />
      <Work setProjectId={setProjectId} />
      <Team />
      <GitHub />
      <Project
        projectId={projectId}
        setProjectId={setProjectId}
      />
    </main>
  );
};

export default App;
