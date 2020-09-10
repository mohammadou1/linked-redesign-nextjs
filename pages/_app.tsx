import { AppProps } from 'next/app';
import Layout from '~/components/layout';
import { DefaultSeo } from 'next-seo';
import '~/styles/fonts.css';
import '~/styles/index.css';
import '~/styles/nprogress.css';
import 'draft-js/dist/Draft.css';

const App = ({ Component, pageProps }: AppProps) => {
   return (
      <Layout>
         <DefaultSeo
            title="LinkedIn Redesign"
            description="Implementing a redesign of LinkedIn using nextjs and tailwind"
         />
         <Component {...pageProps} />
      </Layout>
   );
};

export default App;
