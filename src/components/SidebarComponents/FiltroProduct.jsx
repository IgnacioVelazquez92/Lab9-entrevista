import React from "react";

const FiltroProduct = ({
  appliedFilters,
  resetFilters,
  handleFilterChange,
}) => {
  return (
    <form className="mt-3 flex flex-col gap-4">
      <h3 className="text-lg text-center">Busca tus productos</h3>
      <input
        className="input input-bordered w-full max-w-xs"
        type="text"
        name="title"
        placeholder="Nombre del producto"
        value={appliedFilters.title}
        onChange={handleFilterChange}
      />
      <input
        className="input input-bordered w-full max-w-xs"
        type="number"
        name="priceMin"
        placeholder="Precio mínimo"
        value={appliedFilters.priceMin}
        onChange={handleFilterChange}
      />
      <input
        className="input input-bordered w-full max-w-xs"
        type="number"
        name="priceMax"
        placeholder="Precio máximo"
        value={appliedFilters.priceMax}
        onChange={handleFilterChange}
      />

      <input
        className="input input-bordered w-full max-w-xs"
        type="text"
        name="category"
        placeholder="Categoría"
        value={appliedFilters.category}
        onChange={handleFilterChange}
      />
      <button
        className="btn btn-secondary w-full max-w-xs"
        onClick={resetFilters}
      >
        Borrar Filtros
      </button>
    </form>
  );
};

export default FiltroProduct;
