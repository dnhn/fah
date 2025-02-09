import Card from './card';

import './github.css';

export default function GitHub() {
  return (
    <Card title="GitHub" className="GitHub">
      <p>
        Folding@home<br />
        <a
          href="https://foldingathome.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          foldingathome.org
        </a>
      </p>
      <p>
        Source code<br />
        <a
          href="https://github.com/dnhn/fah"
          target="_blank"
          rel="noopener noreferrer"
        >
          @dnhn/fah
        </a>
      </p>
      <p>
        Client proxy<br />
        <a
          href="https://github.com/dnhn/fah-web-proxy"
          target="_blank"
          rel="noopener noreferrer"
        >
          @dnhn/fah-web-proxy
        </a>
      </p>
    </Card>
  );
}
