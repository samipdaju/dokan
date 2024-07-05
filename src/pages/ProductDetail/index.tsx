import { DokanLogo } from "@src/assets/svg";
import useCart from "@src/hooks/useCart";
import useFetchProductDetail from "@src/hooks/useFetchProductDetail";
import React from "react";
import { Link, useParams } from "react-router-dom";

export default function ProductDetail() {
  const { productId } = useParams();
  const { productData } = useFetchProductDetail(
    productId ? productId.toString() : ""
  );

  if (!productData) {
    return <div>Loading...</div>;
  }

  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(productData._id, 1);
  };

  const handleGoBack = () => {
    history.back(); // Navigate back to the previous page
  };

  return (
    <div className="bg-hero-pattern bg-center bg-fixed p-20">
      <div className="flex flex-row justify-between">
        <button
          className="font-syne text-3xl font-semibold leading-42 text-left"
          onClick={handleGoBack}
        >
          Back
        </button>
        <Link to="/cart" className="flex flex-row gap-2 items-center">
          <DokanLogo className="size-[34px]" />
          <div className="font-syne text-3xl font-semibold leading-42 text-left ">
            Visit Cart
          </div>
        </Link>
      </div>
      <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
        <img
          src={"/src/assets/svg/jacket.png"}
          alt={productData.name}
          className="w-full h-96 object-contain rounded-lg align-center"
        />
        <div className="mt-6">
          <h1 className="text-3xl font-bold text-gray-800">
            {productData.name}
          </h1>
          <p className="text-gray-600 mt-4">{productData.description}</p>
          <div className="flex items-center justify-between mt-6">
            <div className="text-lg font-semibold text-gray-900">
              Price: <span className="text-blue-600">${productData.price}</span>
            </div>
            <div className="text-lg font-semibold text-gray-900">
              Stock: <span className="text-green-600">{productData.stock}</span>
            </div>
          </div>
          <div className="py-10">
            <button className="primaryButton " onClick={handleAddToCart}>
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}