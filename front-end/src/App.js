import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch data from your Node.js backend
    axios
      .get("http://localhost:5000/api/data")
      .then((response) => setData(response.data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div>
      <h2>Data List</h2>
      <ul>
        {data.map((item) => (
          <li key={item._id}>
            <strong>Source:</strong> {item.source}, <strong>Topic:</strong>
            {item.topic}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
