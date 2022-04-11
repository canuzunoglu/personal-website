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
  title: "Can Uzunoglu - Front-end developer",
  description: "Homepage of an ui developer",
});

export default function App() {
  const matches = useMatches();
  const includeScripts = matches.some((match) => match.handle?.hydrate);

  return (
    <html
      lang="en"
      className="bg-slate-100 dark:bg-slate-900 text-slate-800 dark:text-slate-300"
    >
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <meta name="theme-color" content="#111827" />
        <Meta />
        <Links />
      </head>
      <body className="p-8 sm:p-10">
        <Outlet />
        <ScrollRestoration />
        {includeScripts ? <Scripts /> : null}
        {process.env.NODE_ENV === "development" && <LiveReload />}
      </body>
    </html>
  );
}
