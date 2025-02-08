import { useState } from 'react';

import Me from './components/Me';
import Project from './components/Project';
import Team from './components/Team';
import Work from './components/Work';
import GitHub from './components/GitHub';

import './App.css';

const currentHour = new Date().getHours();

export default function App() {
  const [projectId, setProjectId] = useState<number>();
  const [theme, setTheme] = useState(currentHour >= 18 || currentHour < 6);

  return (
    <main className={`App ${theme && 'Dark'}`}>
      <button
        className="App__Theme"
        type="button"
        onClick={() => setTheme(!theme)}
        title="Toggle theme"
        aria-label="Toggle theme"
      >💡</button>
      <Me setProjectId={setProjectId} />
      <Work setProjectId={setProjectId} />
      <Team />
      <Project projectId={projectId} />
      <GitHub />
    </main>
  );
}
