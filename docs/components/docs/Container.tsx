import React, { FC, ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export const Container: FC<Props> = (props) => {
  return (
    <>
      <div className="Container">{props.children}</div>

      <style jsx>{`
        .Container {
        }
      `}</style>
    </>
  );
};
