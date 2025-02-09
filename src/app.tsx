import { useState } from 'react';

import Me from './components/me';
import Project from './components/project';
import Team from './components/team';
import Work from './components/work';
import GitHub from './components/github';

import './app.css';

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
