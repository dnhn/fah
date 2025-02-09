import { useQuery } from '@tanstack/react-query';
import { Dispatch, SetStateAction } from 'react';

import { getProjects, getUserById } from '../api/requests';
import { formatDate, formatNumber } from '../common/util';

import './me.css';

const userId = 17958;

export default function Me({ setProjectId }: { setProjectId: Dispatch<SetStateAction<number | undefined>> }) {
  const { data: user } = useQuery({
    queryKey: ['user', userId],
    queryFn: () => getUserById(userId),
  });
  const { data: projects } = useQuery({
    queryKey: ['projects', user?.name],
    queryFn: () => getProjects(user?.name ?? ''),
    enabled: !!user,
  });

  return (
    <div className="Me Card">
      <h1 className="Card__Heading">Me</h1>
      <section className="Card__Content">
        {user && (
          <p>
            I have accumulated{' '}
            <strong>{formatNumber(user.score)}</strong>
            {' '}points over{' '}
            <strong>{formatNumber(user.wus)}</strong>
            {' '}work units (WUs), rank{' '}
            <strong>{formatNumber(user.rank)}</strong>
            , last WU completed on{' '}
            <strong>{formatDate(user.last.replace(/-/g, '/'))}</strong>.
          </p>
        )}
        {projects && projects.length > 0 && (
          <details>
            <summary>Projects participated ({formatNumber(projects.length)})</summary>
            {projects.slice(1).map((p) => (
              <button
                key={p}
                type="button"
                onClick={() => setProjectId(p)}
                className="Me__Project"
              >{p}</button>
            ))}
          </details>
        )}
      </section>
    </div>
  );
}
