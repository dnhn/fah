import React, { useEffect, useState } from 'react';
import { getTeam } from '../common/getter';

import './Team.scss';

export default () => {
  const [team, setTeam] = useState();

  useEffect(() => {
    getTeam(261473).then(setTeam);
  }, []);

  return team ? (
    <div className="Team Card">
      <h1 className="Card__Heading">Team</h1>
      <section className="Card__Content">
        <ul>
          <li>Score: <strong>{team.score.toLocaleString('en')}</strong></li>
          <li>Rank: <strong>{team.rank.toLocaleString('en')}</strong></li>
          <li>Work Unit completed: <strong>{team.wus.toLocaleString('en')}</strong></li>
        </ul>
      </section>
    </div>
  ) : '';
};
