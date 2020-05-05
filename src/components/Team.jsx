import React, { useEffect, useState } from 'react';
import { getTeam } from '../common/getter';
import { formatNumber } from '../common/util';

import './Team.scss';

export default _ => {
  const [team, setTeam] = useState();

  useEffect(_ => {
    getTeam(261473).then(setTeam);
  }, []);

  return (
    <div className="Team Card">
      <h1 className="Card__Heading">Team</h1>
      {team ? (
        <section className="Card__Content">
          <p>Since creation, my team has earned <strong>{formatNumber(team.score)}</strong> points over <strong>{formatNumber(team.wus)}</strong> WUs and ranks <strong>{formatNumber(team.rank)}</strong>.</p>
          <img
            className="Logo"
            src={team.logo}
            alt="Team logo"
          />
        </section>
      ) : ''}
    </div>
  );
};
