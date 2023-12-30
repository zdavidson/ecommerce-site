import { NextPage } from "next";
import React, { useEffect, useState } from "react";
import CategoryCardContainer from "../components/CategoryCardContainer";
import Nav from "../components/Nav";
import About from "../components/shared/About";
import { Footer } from "../components/shared/Footer";
import CategoryPageHeader from "../components/shared/CategoryPageHeader";
import CategoryItemImage from "../components/shared/CategoryItemImage";
import CategoryItemDescription from "../components/shared/CategoryItemDescription";
import { Box } from "@mui/material";
import CategoryItemContainer from "../components/shared/CategoryItemContainer";

const Headphones: NextPage = () => {
  const category = "headphones";
  const [data, setData] = useState<any>([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/data")
      .then((res) => res.json())
      .then((response) => {
        setLoading(false);
        response.map((item: any) => {
          if (item.category === category) {
            data.push(item);
          }
        });
      });
  }, [data]);

  console.log(data);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <Nav />
      <CategoryPageHeader category={category} />

      {data.map((item: any) => {
        return <CategoryItemContainer item={item} key={item.id} />;
      })}

      <CategoryCardContainer />
      <About />
      <Footer />
    </div>
  );
};

export default Headphones;
