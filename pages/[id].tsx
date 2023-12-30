import React, { useEffect, useState } from "react";
import Nav from "../components/Nav";
import { Box } from "@mui/material";
import Product from "../components/Product";
import { useRouter } from "next/router";
import About from "../components/shared/About";
import { Footer } from "../components/shared/Footer";
import CategoryCardContainer from "../components/CategoryCardContainer";
import ProductFeatures from "../components/shared/ProductFeatures";
import ProductGallery from "../components/shared/ProductGallery";

const ProductDetails = () => {
  const router = useRouter();
  const { id } = router.query;

  const [data, setData] = useState([{ id: "0" }]);
  const [isLoading, setLoading] = useState(true);
  const [product, setProduct] = useState({
    id: "0",
    features: "",
    includes: [],
    gallery: {
      first: { desktop: "" },
      second: { desktop: "" },
      third: { desktop: "" },
    },
  });

  useEffect(() => {
    fetch("/api/data")
      .then((res) => res.json())
      .then((response) => {
        setData(response);
        setLoading(false);
        response.map((item: any) => {
          if (item.id.toString() === id) {
            setProduct(item);
          }
        });
      });
  }, [id]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <Box>
      <Nav />
      <Product product={product} />
      <ProductFeatures
        features={product.features}
        includes={product.includes}
      />
      <CategoryCardContainer />
      <ProductGallery gallery={product.gallery} />
      <About />
      <Footer />
    </Box>
  );
};

export default ProductDetails;
