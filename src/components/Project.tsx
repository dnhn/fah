import { Dispatch, Fragment, SetStateAction, useEffect, useState } from 'react';

import { getProject } from '../common/getter';
import { Project as IProject } from '../common/interfaces';

import './Project.css';

export default function Project({ projectId, setProjectId }: Props) {
  const [project, setProject] = useState<IProject>();

  useEffect(() => {
    if (projectId) {
      getProject(projectId)
        .then(data => {
          setProject(data);
          window.scrollTo({ top: document.documentElement.scrollHeight });
        })
        .catch(() => {
          setProject(undefined);
          setProjectId(undefined);
        });
    }
  }, [projectId, setProjectId]);

  if (!project) return null;

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
                <Fragment>
                  <strong style={{ textTransform: 'capitalize' }}>
                    {project.cause}
                  </strong> project managed by
                </Fragment>
              )
            } <strong>{project.manager}</strong>{
              project.institution && (
                <Fragment>
                  {' '}at <strong>{project.institution}</strong>
                </Fragment>
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

interface Props {
  projectId?: number;
  setProjectId: Dispatch<SetStateAction<number | undefined>>;
}
