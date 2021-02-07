import { FC } from "react";
import { FaGithub } from "react-icons/fa";

type Props = {};

export const Navbar: FC<Props> = (props) => {
  return (
    <>
      <div className="Navbar">
        <div className="logo">
          <h1>--dashvar</h1>
        </div>
        <div className="inner">
          <a href="https://github.com/carlosbaraza/tailvars" className="icon">
            <FaGithub />
          </a>
        </div>
      </div>

      <style jsx>{`
        .Navbar {
          height: var(--size-09);
          display: flex;
        }

        .logo {
          display: flex;
          align-items: center;
          width: var(--size-13);
        }

        h1 {
          font-size: var(--font-size-7);
          line-height: var(--line-height-7);
          font-weight: var(--font-weight-bold);
          color: var(--gray-700);
        }

        .inner {
          flex-grow: 1;
          display: flex;
          align-items: center;
          justify-content: flex-end;
        }

        .icon {
          width: var(--size-07);
          font-size: var(--size-07);
          height: var(--size-07);
          line-height: 1;
          color: var(--gray-600);
          cursor: pointer;
        }
      `}</style>
    </>
  );
};
