import { Link } from "react-router-dom";

const Products = (props) => {
  return (
    <section>
      <h1>The products page</h1>
      <ul>
        <li>
          <Link to="/products/book">A Book</Link>
        </li>
        <li>
          <Link to="/products/game">A Game</Link>
        </li>
        <li>
          <Link to="/products/course">A Course</Link>
        </li>
      </ul>
    </section>
  );
};

export default Products;
