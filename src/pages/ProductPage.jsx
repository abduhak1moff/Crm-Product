import axios from "axios";
import { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom/dist";

const ProductPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1 className="text-center">All Products</h1>
      <div className="d-flex  flex-wrap  justify-content-center my-3 gap-5">
        {products.map((product) => (
          <Card
            style={{ width: "18rem" }}
            className="py-2 shadow"
            key={products.id}
          >
            <Card.Img
              style={{ width: "10rem", height: "12rem" }}
              className=" mx-auto object-fit"
              variant="top"
              src={product.image}
            />
            <Card.Body>
              <Card.Title>{product.title.slice(0, 20)}</Card.Title>
              <Card.Text>{product.description.slice(0, 30)}</Card.Text>
              <Link className="btn btn-primary">See More</Link>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ProductPage;
