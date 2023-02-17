import Footer from "./Footer";
import Navigation from "./Navigation";
import Head from "next/head";

const Layout: React.FC<{ children: JSX.Element }> = ({ children }) => {
  return (
    <>
      <Head>
        <title>Antonio Krželj</title>
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
      </Head>
      <Navigation />
      {children}
      <Footer />
    </>
  );
};
export default Layout;
