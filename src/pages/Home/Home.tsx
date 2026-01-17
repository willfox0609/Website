import Button from "../../components/Button/Button";

export default function Home() {
  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Welcome to the App</h1>

      <div className="row">
        <div className="col-md-6 mb-3">
          <div className="p-4 border rounded shadow-sm">
            <h4>Left Panel</h4>
            <p>This is a Bootstrap-styled card-like section.</p>
            <Button label="Click Me" />
          </div>
        </div>

        <div className="col-md-6 mb-3">
          <div className="p-4 border rounded shadow-sm">
            <h4>Right Panel</h4>
            <p>Bootstrap grid makes layout effortless.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
