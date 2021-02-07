import React, { FC } from "react";

type Props = {
  children: string;
};

export const SectionTitle: FC<Props> = (props) => {
  return (
    <>
      <div className="SectionTitle">{props.children}</div>

      <style jsx>{`
        .SectionTitle {
          letter-spacing: var(--letter-spacing-3);
          font-weight: var(--font-weight-semibold);
          font-size: var(--font-size-0);
          line-height: var(--font-size-0);
          text-transform: uppercase;
          margin-bottom: var(--size-03);
        }
      `}</style>
    </>
  );
};
