import GodImage from "../../assets/God.jpeg";

export default function Home() {
  return (
    <div className="container mt-5">
      {/* Background music */}

      <h1 className="text-center mb-4">Yur fat</h1>

      <div className="row">
        <div className="col-md-6 mb-3">
          <div className="p-4 border rounded shadow-sm">
            <h4>Lol</h4>
            <p>bozo.</p>

            {/* Image below bozo */}
            <img src={GodImage} alt="God" className="img-fluid mt-3 rounded" />
          </div>
        </div>

        <div className="col-md-6 mb-3">
          <div className="p-4 border rounded shadow-sm">
            <h4>67</h4>
          </div>
        </div>
      </div>
    </div>
  );
}
