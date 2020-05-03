import React, { useEffect, useState } from 'react';
import { getUserById } from '../common/getter';
import { formatNumber } from '../common/util';

import './Me.scss';

export default ({ setViewProject }) => {
  const [user, setUser] = useState();

  useEffect(() => {
    getUserById(17958).then(setUser);
  }, []);

  const viewProject = (e, p) => {
    e.preventDefault();
    setViewProject(p);
  };

  return user ? (
    <div className="Me Card">
      <h1 className="Card__Heading">Me</h1>
      <section className="Card__Content">
        <ul>
          <li>Total score: <strong>{formatNumber(user.score)}</strong></li>
          <li>Rank: <strong>{formatNumber(user.rank)}</strong></li>
          <li>Work Unit completed: <strong>{formatNumber(user.wus)}</strong></li>
          <li>Last Work Unit: <strong>{new Date(user.last).toDateString()}</strong></li>
        </ul>
        <summary>
          Projects participated: <strong>{formatNumber(user.projects.length - 1)}</strong>
          <details>
            {user.projects.map((p, i) =>
              i !== 0 ? (
                <button
                  className="Me__Project"
                  type="button"
                  key={p}
                  onClick={e => viewProject(e, p)}
                >
                  {p}
                </button>
              ) : ''
            )}
          </details>
        </summary>
      </section>
    </div>
  ) : '';
};
