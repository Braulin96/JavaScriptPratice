import React, { useState, useEffect } from "react";
import axios from "axios";

const TestingAPI = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    axios
      .get(
        "http://www.randomnumberapi.com/api/v1.0/random?min=100&max=1000&count=5"
      )
      .then((response) => {
        setItems(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  return (
    <div>
      <h1>Item List</h1>
      {/* <ul>
        {items.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>{" "} */}
    </div>
  );
};
export default TestingAPI;
