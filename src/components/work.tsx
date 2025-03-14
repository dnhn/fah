import { useQuery } from '@tanstack/react-query';
import { Dispatch, Fragment, SetStateAction } from 'react';

import { getWork } from '../api/requests';
import Card from './card';
import { formatDate, formatNumber } from '../common/util';

import './work.css';

export default function Work({ setProjectId }: { setProjectId: Dispatch<SetStateAction<number | undefined>> }) {
  const { data: work, isFetching } = useQuery({
    queryKey: ['work'],
    queryFn: getWork,
  });

  return (
    <Card title="Work" className="Work">
      {work ? (
        <>
          <p>Last updated: <strong>{formatDate(work.dateTime)}</strong></p>
          {work.data.filter(w => w.status === 'RUNNING').map(w => (
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
                  Progress:{' '}
                  <strong>{w.percentdone}</strong>
                </li>
                <li>
                  ETA:{' '}
                  <strong>{w.eta}</strong>
                </li>
                <li>
                  Estimated points:{' '}
                  <strong>{formatNumber(w.creditestimate)}</strong>
                </li>
              </ul>
            </Fragment>
          ))}
        </>
      ) : !isFetching && <p>Data is not available.</p>}
    </Card>
  );
}
