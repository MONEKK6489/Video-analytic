import { HeadlessCreateInferencer } from "@refinedev/inferencer/headless";
import { GetServerSideProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { TableCreate } from "@components/showtable/element/Create";
export default function Create() {
  return <TableCreate />;
}

export const getServerSideProps: GetServerSideProps<{}> = async (context) => {
  const translateProps = await serverSideTranslations(context.locale ?? "en", [
    "common",
  ]);

  return {
    props: {
      ...translateProps,
    },
  };
};
