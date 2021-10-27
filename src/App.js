import "bootstrap/dist/css/bootstrap.min.css";
import CategoryContainer from "./components/categories/CategoryContainer";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1 className="mb-5">My checkpoint PROPS</h1>
        <CategoryContainer />
      </div>
    </div>
  );
}
