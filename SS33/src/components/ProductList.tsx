import ProductItem from "./ProductItem";

export default function ProductList({ products }) {
  return (
    <div className="card">
      <div className="card-header bg-primary text-white">List Products</div>
      <div className="card-body">
        {products.map(p => (
          <ProductItem key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
}
