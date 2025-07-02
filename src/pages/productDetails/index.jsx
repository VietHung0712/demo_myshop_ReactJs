import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { memo } from "react";
import productData from "../../../product.json";
import "./style.css";

const getImage = (filename) => new URL(`../../assets/images/${filename}`, import.meta.url).href;

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const found = productData.find((item) => item.path === id);
    setProduct(found);
  }, [id]);

  if (!product) return <p>Loading...</p>;

  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-md-6">
          <img
            src={getImage(product.bgImg)}
            alt={product.name}
            className="img-fluid rounded shadow"
          />
        </div>
        <div className="col-md-6">
          <h1 className="display-4">{product.name}</h1>
          <p className="h3 text-success">${product.price}</p>
          {/* <p className="mt-4">{product.description}</p> */}
          <button className="btn btn-primary mt-3">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default memo(ProductDetail);
