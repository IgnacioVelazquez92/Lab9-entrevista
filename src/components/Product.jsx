import React, { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import { FaHome } from "react-icons/fa";

const Product = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(0);
  const URL = `https://api.escuelajs.co/api/v1/products?offset=${currentPage}&limit=8`;

  useEffect(() => {
    fetch(URL)
      .then((response) => {
        return response.json();
      })
      .then((data) => setProducts(data))
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, [currentPage]);

  const handlePrevPage = () => {
    if (currentPage < 1) {
      setCurrentPage(0);
    } else {
      setCurrentPage((prevcurrentPage) => prevcurrentPage - 1);
    }
  };
  const handleNextPage = () => {
    setCurrentPage((prevcurrentPage) => prevcurrentPage + 1);
  };
  const homePage = () => {
    setCurrentPage(0);
  };

  return (
    <>
      {loading && (
        <div className="flex justify-center items-center h-screen">
          <span className="loading loading-spinner loading-lg text-primary"></span>
        </div>
      )}
      <div className="flex gap-4 flex-wrap my-5 items-stretch justify-center">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <div className="join grid grid-cols-3 mx-auto my-4 md:w-2/3 lg:w-1/3">
        <button className="join-item btn btn-outline" onClick={handlePrevPage}>
          «
        </button>
        <button className="join-item btn btn-outline" onClick={homePage}>
          <FaHome />
        </button>
        <button className="join-item btn btn-outline" onClick={handleNextPage}>
          »
        </button>
      </div>
    </>
  );
};

export default Product;
