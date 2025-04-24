import Footer from "../components/shared/footer";
import Header from "../components/shared/header";
import Hero from "../components/shared/hero";
import Kontak from "../components/shared/kontak";
import Productlist from "../components/shared/ProductList";
import Teamsemua from "../components/shared/team";
import Services from "../components/services";
import TextInput from "../components/list/textinput";

export default function Home() {
  return (
    <>
      <Header />
      <TextInput />
      <Hero />
      <Productlist />
      <Services />
      <Teamsemua />
      <Kontak />
      <Footer />
    </>
  );
}
