import { useQuery } from '@tanstack/react-query';

import { getProject } from '../api/requests';

import './project.css';

export default function Project({ projectId }: { projectId?: number }) {
  const { data: project } = useQuery({
    queryKey: ['project', projectId],
    queryFn: () => getProject(projectId ?? 0),
    enabled: !!projectId,
  })

  if (!projectId || !project) return null;

  return (
    <div className="Project Card">
      <h1 className="Card__Heading">Project {projectId}</h1>
      <section className="Card__Content">
        <div className="Project__Intro">
          {project.thumb &&
            <img
              src={`data:image;base64,${project.thumb}`}
              alt="Project thumb"
            />
          }
          <p>
            {project.cause === 'unspecified' ?
              'Managed by' :
              (
                <>
                  <strong style={{ textTransform: 'capitalize' }}>
                    {project.cause}
                  </strong> project managed by
                </>
              )
            } <strong>{project.manager}</strong>{
              project.institution && (
                <>{' '}at <strong>{project.institution}</strong></>
              )
            }. {project.url &&
              <small>
                <em>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {project.url}
                  </a>
                </em>
              </small>
            }
          </p>
          {project.mthumb &&
            <img
              src={`data:image;base64,${project.mthumb}`}
              alt={project.manager}
              title={project.manager}
            />
          }
        </div>
        <div dangerouslySetInnerHTML={{ __html: project.description }} />
        <hr style={{ borderWidth: 1, borderStyle: 'solid' }} />
        <div dangerouslySetInnerHTML={{ __html: project.mdescription }} />
      </section>
    </div>
  );
}
