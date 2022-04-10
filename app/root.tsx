import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useMatches,
} from "remix";
import type { MetaFunction, LinksFunction } from "remix";

import output from "./output.css";

export const links: LinksFunction = () => [{ rel: "stylesheet", href: output }];

export const meta: MetaFunction = () => ({
  title: "Can Uzunoglu | UI developer",
  description: "Homepage of a ui developer",
});

export default function App() {
  const matches = useMatches();
  const includeScripts = matches.some((match) => match.handle?.hydrate);

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="m-10 bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200">
        <Outlet />
        <ScrollRestoration />
        {includeScripts ? <Scripts /> : null}
        {process.env.NODE_ENV === "development" && <LiveReload />}
      </body>
    </html>
  );
}
