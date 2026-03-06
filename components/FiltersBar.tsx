export const FiltersBar = () => {
  const filters = [
    "Material",
    "Fit",
    "Occasion",
    "Category",
    "Price"
  ];

  return (
    <div className="flex flex-wrap gap-3 text-xs uppercase tracking-[0.26em] text-noir-500">
      {filters.map((filter) => (
        <button
          key={filter}
          className="border border-noir-200 px-4 py-2 hover:border-noir-400"
        >
          {filter}
        </button>
      ))}
    </div>
  );
};
