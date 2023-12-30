import React from "react";
import Image from "next/image";

interface Props {
  src: string;
  name: string;
}

const CategoryItemImage = ({ src, name }: Props) => {
  return <Image src={src} alt={name} width={500} height={500} />;
};

export default CategoryItemImage;
