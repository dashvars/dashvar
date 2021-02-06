import React, { FC, ReactNode } from "react";

type Props = { children: ReactNode };

export const Layout: FC<Props> = (props) => {
  return (
    <>
      <div className="Layout">{props.children}</div>

      <style jsx>{`
        .Layout {
        }
      `}</style>
    </>
  );
};
