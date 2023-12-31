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
import Recommendations from "../components/shared/Recommendations";

const ProductDetails = () => {
  const router = useRouter();
  const { slug } = router.query;

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
    others: [],
  });

  useEffect(() => {
    fetch("/api/data")
      .then((res) => res.json())
      .then((response) => {
        setData(response);
        setLoading(false);
        response.map((item: any) => {
          if (item.slug === slug) {
            setProduct(item);
          }
        });
      });
  }, [slug]);

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
      <ProductGallery gallery={product.gallery} />
      <Recommendations recommendations={product.others} />
      <CategoryCardContainer />
      <About />
      <Footer />
    </Box>
  );
};

export default ProductDetails;
