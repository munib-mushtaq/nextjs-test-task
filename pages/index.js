import Layout from "./layout";
import dynamic from "next/dynamic";

const Products = dynamic(() => import("../components/products/products"), {
  loading: () => <p>Loading...</p>, // Optional: A loading component or message
});

export default function Home() {
  return (
    <Layout>
      <Products />
    </Layout>
  );
}
