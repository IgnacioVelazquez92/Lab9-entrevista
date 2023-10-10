import React, { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import { FaHome } from "react-icons/fa";
import { TbFilterShare } from "react-icons/tb";
import Contador from "./SidebarComponents/Contador";
import FiltroProduct from "./SidebarComponents/FiltroProduct";

const Product = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(0);
  const [filters, setFilters] = useState({
    title: "",
    priceMin: "",
    priceMax: "",
    category: "",
  });
  const [appliedFilters, setAppliedFilters] = useState(filters);

  const fetchData = () => {
    setLoading(true);
    let apiUrl = `https://api.escuelajs.co/api/v1/products?offset=${
      currentPage * 8
    }&limit=8`;

    if (appliedFilters.title) {
      apiUrl += `&title=${encodeURIComponent(appliedFilters.title)}`;
    }
    if (appliedFilters.priceMin) {
      apiUrl += `&price_min=${appliedFilters.priceMin}`;
    }
    if (appliedFilters.priceMax) {
      apiUrl += `&price_max=${appliedFilters.priceMax}`;
    }
    if (appliedFilters.category) {
      apiUrl += `&category=${encodeURIComponent(appliedFilters.category)}`;
    }

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    fetchData();
  }, [currentPage, appliedFilters]);

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

  const handleFilterChange = (event) => {
    const { name, value } = event.target;
    setAppliedFilters({
      ...appliedFilters,
      [name]: value,
    });
  };

  const resetFilters = (e) => {
    e.preventDefault();
    setAppliedFilters({
      title: "",
      priceMin: "",
      priceMax: "",
      category: "",
    });
    setFilters({});
    setCurrentPage(0);
    fetchData();
  };

  return (
    <>
      <div className="drawer lg:drawer-open">
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-right lg:hidden fixed top-60 left-0 z-10"
        >
          <TbFilterShare />
        </label>
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
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
            <button
              className="join-item btn btn-outline"
              onClick={handlePrevPage}
            >
              «
            </button>
            <button className="join-item btn btn-outline" onClick={homePage}>
              <FaHome />
            </button>
            <button
              className="join-item btn btn-outline"
              onClick={handleNextPage}
            >
              »
            </button>
          </div>
        </div>
        <div className="drawer-side z-40">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <div className="menu p-4 w-80 min-h-full bg-base-300 text-base-content">
            <Contador />
            <FiltroProduct
              handleFilterChange={handleFilterChange}
              appliedFilters={appliedFilters}
              resetFilters={resetFilters}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
