import { Dispatch, SetStateAction, useEffect, useState } from 'react';

import { getUserById } from '../common/getter';
import { User } from '../common/interfaces';
import { formatDate, formatNumber } from '../common/util';

import './Me.css';

export default function Me({ setProjectId }: { setProjectId: Dispatch<SetStateAction<number | undefined>> }) {
  const [user, setUser] = useState<User>();

  useEffect(() => {
    getUserById(17958).then(setUser);
  }, []);

  return (
    <div className="Me Card">
      <h1 className="Card__Heading">Me</h1>
      {user && (
        <section className="Card__Content">
          <p>
            I have accumulated
            {' '}<strong>{formatNumber(user.score)}</strong>{' '}
            points over
            {' '}<strong>{formatNumber(user.wus)}</strong>{' '}
            work units (WUs), rank
            {' '}<strong>{formatNumber(user.rank)}</strong>,
            last WU completed on
            {' '}<strong>{formatDate(user.last.replace(/-/g, '/'))}</strong>.
          </p>
          <details>
            <summary>Projects participated {formatNumber(user.projects.length - 1)}</summary>
            {user.projects.map((p, i) =>
              i !== 0 ? (
                <button
                  className="Me__Project"
                  type="button"
                  key={p}
                  onClick={() => setProjectId(p)}
                >
                  {p}
                </button>
              ) : ''
            )}
          </details>
        </section>
      )}
    </div>
  );
}
