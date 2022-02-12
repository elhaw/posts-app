import Head from 'next/head';
import { GetServerSideProps } from 'next';
const HomePage = () => {
   return (
      <Head>
         <meta name="robots" content="noindex, nofollow" />
      </Head>
   );
};

export const getServerSideProps: GetServerSideProps = async () => {
   return {
      redirect: {
         destination: `/posts`,
      },
      props: {},
   };
};

export default HomePage;
