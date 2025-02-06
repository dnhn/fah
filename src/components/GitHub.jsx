import './GitHub.css';

const GitHub = _ => {
  return (
    <div className="GitHub Card">
      <h1 className="Card__Heading">GitHub</h1>
      <section className="Card__Content">
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
      </section>
    </div>
  );
};

export default GitHub;
