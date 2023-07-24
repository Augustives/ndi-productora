import Footer from "../modules/footer";
import Header from "../modules/header";
import Head from "next/head";

function Default({ children }) {
  return (
    <>
      <Head>
        <title>NDI Productora</title>
      </Head>
      <div>
        <Header />
        {children}
        <Footer />
      </div>
    </>
  );
}

export default Default;