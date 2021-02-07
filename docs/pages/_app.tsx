import { AppProps } from "next/app";
import "dashvar/dist/base.css";
import "dashvar/dist/dashvar.css";
import "../styles/index.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
