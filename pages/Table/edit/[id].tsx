import { HeadlessEditInferencer } from "@refinedev/inferencer/headless";
import { GetServerSideProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { TableEdit } from "@components/showtable/element/Edit";
export default function Edit() {
  return <TableEdit />;
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
