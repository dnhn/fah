import { Dispatch, Fragment, SetStateAction, useEffect, useState } from 'react';

import { getWorkStatus } from '../common/getter';
import { Work as IWork } from '../common/interfaces';
import { formatDate, formatNumber } from '../common/util';

import './Work.css';

export default function Work({ setProjectId }: { setProjectId: Dispatch<SetStateAction<number | undefined>> }) {
  const [status, setStatus] = useState<IWork>();
  const [works, setWorks] = useState<IWork['data']>([]);

  useEffect(() => {
    getWorkStatus().then(data => {
      setStatus(data);
      setWorks(data.data.filter(w => w.status === 'RUNNING'));
    });
  }, []);

  return (
    <div className="Work Card">
      <h1 className="Card__Heading">Work</h1>
      {status && (
        <section className="Card__Content">
          <p>Last updated: <strong>{formatDate(status.dateTime.toString())}</strong></p>
          {works.map(w => (
            <Fragment key={w.project}>
              <h2 className="Project__Heading">
                <button
                  type="button"
                  onClick={() => setProjectId(w.project)}
                >
                  {w.project}
                </button>
              </h2>
              <ul>
                <li>
                  Progress:
                  {' '}<strong>{w.percentdone}</strong>
                </li>
                <li>
                  ETA:
                  {' '}<strong>{w.eta}</strong>
                </li>
                <li>
                  Estimated points:
                  {' '}<strong>{formatNumber(w.creditestimate)}</strong>
                </li>
              </ul>
            </Fragment>
          ))}
          {!works.length && <p>Data is not available.</p>}
        </section>
      )}
    </div>
  );
}
