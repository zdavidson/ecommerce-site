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
import { APIProduct } from "../types";

const ProductDetails = () => {
  const router = useRouter();
  const { slug } = router.query;

  const [data, setData] = useState<APIProduct[]>([]);
  const [isLoading, setLoading] = useState(true);
  const [product, setProduct] = useState<APIProduct>({
    id: 0,
    slug: "",
    name: "",
    image: {
      mobile: "",
      tablet: "",
      desktop: "",
    },
    category: "",
    new: true,
    price: 0,
    description: "",
    features: "",
    includes: [
      {
        quantity: 0,
        item: "",
      },
      {
        quantity: 0,
        item: "",
      },
      {
        quantity: 0,
        item: "",
      },
      {
        quantity: 0,
        item: "",
      },
      {
        quantity: 0,
        item: "",
      },
    ],
    gallery: {
      first: {
        mobile: "",
        tablet: "",
        desktop: "",
      },
      second: {
        mobile: "",
        tablet: "",
        desktop: "",
      },
      third: {
        mobile: "",
        tablet: "",
        desktop: "",
      },
    },
    others: [
      {
        slug: "",
        name: "",
        image: {
          mobile: "",
          tablet: "",
          desktop: "",
        },
      },
      {
        slug: "",
        name: "",
        image: {
          mobile: "",
          tablet: "",
          desktop: "",
        },
      },
      {
        slug: "",
        name: "",
        image: {
          mobile: "",
          tablet: "",
          desktop: "",
        },
      },
    ],
  });

  useEffect(() => {
    fetch("/api/data")
      .then((res) => res.json())
      .then((response) => {
        setData(response);
        setLoading(false);
        response.map((item: APIProduct) => {
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
