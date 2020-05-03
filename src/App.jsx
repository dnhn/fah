import React, { useState } from 'react';
import Me from './components/Me';
import Team from './components/Team';

import './App.scss';

export default () => {
  return (
    <main className="App">
      <Me />
      <Team />
    </main>
  );
};
