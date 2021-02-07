import React, { FC } from "react";
import { NavigationItem } from "./NavigationItem";
import { SectionTitle } from "./SectionTitle";

type Props = {};

export const Navigation: FC<Props> = (props) => {
  return (
    <>
      <div className="Navigation">
        <div className="section">
          <SectionTitle>General</SectionTitle>
          <NavigationItem href="/docs/sizing-system">
            Sizing System
          </NavigationItem>
          <NavigationItem href="/docs/box-shadow">Box Shadow</NavigationItem>
          <NavigationItem href="/docs/border-radius">
            Border Radius
          </NavigationItem>
        </div>

        <div className="section">
          <SectionTitle>Typography</SectionTitle>
          <NavigationItem href="/docs/font-weight">Font Weight</NavigationItem>
        </div>
      </div>

      <style jsx>{`
        .Navigation {
          display: flex;
          flex-direction: column;
          padding: var(--size-07) 0;
        }

        .section {
          display: flex;
          flex-direction: column;
        }

        .Navigation > :global(* + *) {
          margin-top: var(--size-07);
        }
      `}</style>
    </>
  );
};
