import React, { useEffect, useState } from 'react';
import { getProject } from '../common/getter';

import './Project.scss';

const Project = ({ projectId = '', setProjectId }) => {
  const [project, setProject] = useState();

  useEffect(_ => {
    if (projectId) {
      getProject(projectId)
        .then(data => {
          setProject(data);
          window.scrollTo({ top: document.documentElement.scrollHeight });
        })
        .catch(e => {
          setProject(null);
          setProjectId('');
        });
    }
  }, [projectId, setProjectId]);

  return project ? (
    <div className="Project Card">
      <h1 className="Card__Heading">Project {projectId}</h1>
      <section className="Card__Content">
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
            project.institution && (<> at <strong>{project.institution}</strong></>)
          }. {project.url &&
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {project.url}
            </a>
          }
        </p>
        <div dangerouslySetInnerHTML={{ __html: project.description }} />
        <hr style={{ borderWidth: 1, borderStyle: 'solid' }} />
        <div dangerouslySetInnerHTML={{ __html: project.mdescription }} />
      </section>
    </div>
  ) : '';
};

export default Project;
