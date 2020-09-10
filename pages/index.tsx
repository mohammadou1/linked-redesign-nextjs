import { GetServerSideProps } from "next";
import Head from "next/head";
const IndexPage = () => {
  return (
    <Head>
      <meta name="robots" content="noindex, nofollow" />
    </Head>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  ctx.res?.writeHead(302, { Location: "/feed" });
  ctx?.res?.end();
  return {
    props: {},
  };
};
export default IndexPage;
