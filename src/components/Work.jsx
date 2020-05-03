import React, { useEffect, useState } from 'react';
import { getWorkStatus } from '../common/getter';
import { formatNumber } from '../common/util';

import './Work.scss';

export default ({ setViewProject }) => {
  const [status, setStatus] = useState();

  useEffect(() => {
    getWorkStatus().then(setStatus);
  }, []);

  const viewProject = (e, p) => {
    e.preventDefault();
    setViewProject(p);
  };

  return status ? (
    <div className="Work Card">
      <h1 className="Card__Heading">Work</h1>
      <section className="Card__Content">
        <p>Last updated: <strong>{new Date(status.dateTime).toDateString()}</strong></p>
        {status.data.map(w => {
          switch (w.status) {
            case 'RUNNING': return (
              <>
                <h2
                  className="Project__Heading"
                  onClick={e => viewProject(e, w.project)}
                >
                  {w.project}
                </h2>
                <ul>
                  <li>Progress: <strong>{w.percentdone}</strong></li>
                  <li>ETA: <strong>{w.eta}</strong></li>
                  <li>Estimated points: <strong>{formatNumber(w.creditestimate)}</strong></li>
                </ul>
              </>
            );
            default: return <span>Data is not available.</span>;
          }
        })}
      </section>
    </div>
  ) : '';
};
