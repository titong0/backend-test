import config from "../config";
import ProductPreview from "../components/ProductPreview";

const Index = ({ products }) => {
  return (
    <div className="products-container">
      {products.map((i) => (
        <ProductPreview {...i} />
      ))}
    </div>
  );
};

export default Index;

export const getServerSideProps = async () => {
  const req = await fetch(`${config.API_URL}/products`);
  const data = await req.json();
  return { props: { products: data } };
};
