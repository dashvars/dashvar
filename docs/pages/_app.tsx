import { AppProps } from "next/app";
import "../../dist/base.css";
import "../../dist/tailvars.min.css";
import "../styles/index.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
