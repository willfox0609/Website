import Button from "../../components/Button/Button";

export default function Home() {
  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Yur fat</h1>

      <div className="row">
        <div className="col-md-6 mb-3">
          <div className="p-4 border rounded shadow-sm">
            <h4>Lol</h4>
            <p>bozo.</p>
            {/*<Button label="Click Me" />*/}
          </div>
        </div>

        <div className="col-md-6 mb-3">
          <div className="p-4 border rounded shadow-sm">
            <h4>67</h4>
            {/* <p>Bootstrap grid makes layout effortless.</p> */}
          </div>
        </div>
      </div>
    </div>
  );
}
