import Header from "../modules/header";
import Footer from "../modules/footer";

function Default({ children }) {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
}

export default Default;
