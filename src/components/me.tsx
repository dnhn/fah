import { useQuery } from '@tanstack/react-query';
import { Dispatch, SetStateAction } from 'react';

import { getProjects, getUserById } from '../api/requests';
import Card from './card';
import { formatNumber } from '../common/util';

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
    <Card title="Me" className="Me">
      {user && (
        <p>
          I have accumulated{' '}
          <strong>{formatNumber(user.score)}</strong>
          {' '}points over{' '}
          <strong>{formatNumber(user.wus)}</strong>
          {' '}work units (WUs), rank{' '}
          <strong>{formatNumber(user.rank)}</strong>.
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
    </Card>
  );
}
