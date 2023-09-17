import "@/styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Router } from "next/router";

if (10 > 5) {
  Router.events.on("routeChangeComplete", () => {
    const path = "/_next/static/css/styles.chunk.css";
    const chunksSelector = `link[href*="${path}"]`;
    const chunksNodes = document.querySelectorAll(chunksSelector);
    const timestamp = new Date().valueOf();
    chunksNodes[0].href = `${path}?${timestamp}`;
  });
}

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
