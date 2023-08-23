import { GitHubBanner, Refine } from "@refinedev/core";
import { RefineKbar, RefineKbarProvider } from "@refinedev/kbar";
import routerProvider, {
  DocumentTitleHandler,
  UnsavedChangesNotifier,
} from "@refinedev/nextjs-router";
import type { NextPage } from "next";
import { AppProps } from "next/app";

import { Layout } from "@components/layout";
import dataProvider from "@refinedev/simple-rest";
import "@styles/global.css";
import { appWithTranslation, useTranslation } from "next-i18next";
const API_URL = "https://my-mone-api.xaymoneonmany.repl.co";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  noLayout?: boolean;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function MyApp({ Component, pageProps }: AppPropsWithLayout): JSX.Element {
  const renderComponent = () => {
    if (Component.noLayout) {
      return <Component {...pageProps} />;
    }

    return (
      <div>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </div>
    );
  };
  return (
    <>
      <RefineKbarProvider>
        <Refine
          routerProvider={routerProvider}
          dataProvider={dataProvider(API_URL)}
          resources={[
            {
              name: "Table",
              list: "/Table",
              create: "/Table/create",
              edit: "/Table/edit/:id",
              show: "/Table/show/:id",
              meta: {
                canDelete: true,
              },
            },
            {
              name: "MakeData",
              list: "/MakeData",
              create: "/MakeData/create",
              edit: "/MakeData/edit/:id",
              show: "/MakeData/show/:id",
              meta: {
                canDelete: true,
              },
            },
          ]}
          options={{
            syncWithLocation: true,
            warnWhenUnsavedChanges: true,
          }}
        >
          {renderComponent()}
          <RefineKbar />
          <UnsavedChangesNotifier />
          <DocumentTitleHandler />
        </Refine>
      </RefineKbarProvider>
    </>
  );
}

export default appWithTranslation(MyApp);
