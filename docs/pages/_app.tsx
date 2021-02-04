import { AppProps } from "next/app";
import "../../dist/base.css";
import "../../dist/tailvars.css";
import "../styles/index.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
