import { HeadlessListInferencer } from "@refinedev/inferencer/headless";
import { GetServerSideProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { Table } from "@components/showtable/list";
export default function MakeDataList() {
  return <Table />;
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
