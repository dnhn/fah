import React, { Fragment, useEffect, useState } from 'react';
import { getWorkStatus } from '../common/getter';
import { formatDate, formatNumber } from '../common/util';

import './Work.scss';

export default ({ setViewProject }) => {
  const [status, setStatus] = useState();
  const [works, setWorks] = useState([]);

  useEffect(_ => {
    getWorkStatus().then(data => {
      setStatus(data);
      setWorks(data.data.filter(w => w.status === 'RUNNING'));
    });
  }, []);

  const viewProject = (e, p) => {
    e.preventDefault();
    setViewProject(p);
  };

  return status ? (
    <div className="Work Card">
      <h1 className="Card__Heading">Work</h1>
      <section className="Card__Content">
        <p>Last updated: <strong>{formatDate(status.dateTime)}</strong></p>
        {works.map(w => (
          <Fragment key={w.project}>
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
          </Fragment>
        ))}
        {!works.length && <p>Data is not available.</p>}
      </section>
    </div>
  ) : '';
};
