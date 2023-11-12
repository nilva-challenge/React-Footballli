import createCache from "@emotion/cache";
import { PropsWithChildren } from "react";
import { CacheProvider } from "@emotion/react";
import rtlPlugin from "stylis-plugin-rtl"; // noinspection SpellCheckingInspection

// noinspection SpellCheckingInspection
const cacheRtl = createCache({
  key: "rahavard365",
  speedy: true,
  stylisPlugins: [rtlPlugin],
});

/**
 * A cache provider for rtl situation of the web application.
 * @param props
 * @constructor
 */
export default function RTL(props: PropsWithChildren) {
  return <CacheProvider value={cacheRtl}>{props.children}</CacheProvider>;
}
