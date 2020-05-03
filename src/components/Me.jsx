import React, { useEffect, useState } from 'react';
import { getUserById } from '../common/getter';

import './Me.scss';

export default () => {
  const [user, setUser] = useState();

  useEffect(() => {
    getUserById(17958).then(setUser);
  }, []);

  return user ? (
    <div className="Me Card">
      <h1 className="Card__Heading">Me</h1>
      <section className="Card__Content">
        <ul>
          <li>Total score: <strong>{user.score.toLocaleString('en')}</strong></li>
          <li>Rank: <strong>{user.rank.toLocaleString('en')}</strong></li>
          <li>Work Unit completed: <strong>{user.wus.toLocaleString('en')}</strong></li>
          <li>Last Work Unit: <strong>{new Date(user.last).toDateString()}</strong></li>
        </ul>
        <summary>
          Projects participated: <strong>{(user.projects.length - 1).toLocaleString('en')}</strong>
          <details>
            {user.projects.map((p, i) =>
              i !== 0 ? (
                <button
                  className="Me__Project"
                  type="button"
                  key={p}
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
