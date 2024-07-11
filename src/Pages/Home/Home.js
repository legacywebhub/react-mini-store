import Header from '../../Components/Header/Header';
import Banner from '../../Components/Banner/Banner';
import LatestProducts from '../../Components/LatestProducts/LatestProducts';
import ProductsDisplay from '../../Components/ProductsDisplay/ProductsDisplay';
import PromoSales from '../../Components/PromoSales/PromoSales';
import Footer from '../../Components/Footer/Footer';

function App() {
  return (
    <div>
      <Header />
      <Banner />
      <LatestProducts />
      <ProductsDisplay />
      <PromoSales />
      <Footer />
    </div>
  );
}

export default App;