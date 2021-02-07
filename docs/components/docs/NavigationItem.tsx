import Link from "next/link";
import React, { FC, ReactNode } from "react";

type Props = {
  href: string;
  as?: string;
  children: ReactNode;
};

export const NavigationItem: FC<Props> = (props) => {
  return (
    <>
      <Link href={props.href} as={props.as}>
        <a className="NavigationItem">{props.children}</a>
      </Link>

      <style jsx>{`
        .NavigationItem {
          color: var(--gray-500);
          padding: var(--size-02);
          margin-left: calc(-1 * var(--size-02));
        }

        .NavigationItem:hover {
          color: var(--black);
        }
      `}</style>
    </>
  );
};
