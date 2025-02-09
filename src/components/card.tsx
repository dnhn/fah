import { HTMLAttributes } from 'react';

export default function Card({ children, className, title }: HTMLAttributes<HTMLDivElement>) {
  return (
    <section className={'Card ' + className}>
      <h1 className="Card__Heading">{title}</h1>
      <div className="Card__Content">{children}</div>
    </section>
  );
}
