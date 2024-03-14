import { Hero, PopularProducts, SuperQuality, Services, SpecialOffers, CustomerReviews, Footer, Subscribe } from "./sections";

import Nav from "./components/Nav";

const App = () => (
  <main className="relative">
    <Nav />
    <section id="home" className="xl:padding-l wide:padding-r padding-b">
      <Hero />
    </section>

    <section id="products" className="padding">
      <PopularProducts />
    </section>
    <section id="about-us" className="padding">
      <SuperQuality />
    </section>
    <section className="padding-x py-10">
      <Services />
    </section>
    <section className="padding">
      <SpecialOffers />
    </section>
    <section className="padding bg-pale-blue">
      <CustomerReviews />
    </section>
    <section id="contact-us" className="padding-x sm:py-32 py-16 w-full">
      <Subscribe />
    </section>
    <section className="bg-black padding-x padding-t pb-8">
      <Footer />
    </section>
  </main>
);

export default App;