import React, { useEffect, useState } from 'react';
import { getUserById } from '../common/getter';
import { formatNumber } from '../common/util';

import './Me.scss';

export default ({ setViewProject }) => {
  const [user, setUser] = useState();

  useEffect(_ => {
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
        <p>I have accumulated <strong>{formatNumber(user.score)}</strong> points over <strong>{formatNumber(user.wus)}</strong> work units (WUs) in <strong>{formatNumber(user.projects.length - 1)}</strong> projects, rank <strong>{formatNumber(user.rank)}</strong>, last WU completed on <strong>{new Date(user.last).toDateString()}</strong>.</p>
        <details>
          <summary>Projects participated</summary>
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
      </section>
    </div>
  ) : '';
};
