import { useQuery } from '@tanstack/react-query';

import { getTeam } from '../api/requests';
import Card from './card';
import { formatNumber } from '../common/util';

import './team.css';

const teamId = 261473;

export default function Team() {
  const { data: team } = useQuery({
    queryKey: ['team', teamId],
    queryFn: () => getTeam(teamId),
  });

  return (
    <Card title="Team" className="Team">
      {team && (
        <>
          <p>
            My team has earned{' '}
            <strong>{formatNumber(team.score)}</strong>
            {' '}points over{' '}
            <strong>{formatNumber(team.wus)}</strong>
            {' '}WUs and ranks{' '}
            <strong>{formatNumber(team.rank)}</strong>.
          </p>
          <img
            className="Logo"
            src={team.logo}
            alt="Team logo"
            width="256"
            height="256"
          />
        </>
      )}
    </Card>
  );
}
