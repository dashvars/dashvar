import React, { FC } from "react";

type Props = {};

export const Example: FC<Props> = (props) => {
  return (
    <>
      <div className="Example">
        <h1 className="default-values">With default values</h1>
      </div>

      <style jsx>{`
        .Example {
        }

        .default-values {
          color: var(--md-red-500, var(--blue-500));
          font-size: var(--lg-font-size-10, var(--md-font-size-8, var(--font-size-5)));
        }
      `}</style>
    </>
  );
};
