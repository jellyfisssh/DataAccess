import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import server from "../server";
import "./MainContentPage.css";

function MainContentPage({ role }) {
  const [query, setQuery] = useState("");

  const [articles, setArticles] = useState([]);

  const fetchData = async () => {
    const token = localStorage.getItem("token");
    const headers = { Authorization: `Bearer ${token}` };
    try {
      server.get("/article", headers).then((response) => {
        setArticles(response.data);
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  function deleteItem(id) {
    server.delete("/delete/" + id);
    alert("Article deleted");
    console.log(`Deleted item with id ${id}`);
    window.location.reload();
  }

  return (
    <Container>
      <div className="top-container">
        <div>
          <input
            placeholder="Enter a category or keyword to search..."
            className="search"
            onChange={(event) => setQuery(event.target.value)}
          />
        </div>
        <div>
          {role === "Administrator" && (
            <Link to="/add-new" className="add-new">
              Add New
            </Link>
          )}
        </div>
      </div>

      {articles
        .filter((item) => {
          if (query === "") {
            return item;
          } else if (item.type.toLowerCase().includes(query.toLowerCase())) {
            return item;
          } else if (item.name.toLowerCase().includes(query.toLowerCase())) {
            return item;
          } else if (
            item.category.toLowerCase().includes(query.toLowerCase())
          ) {
            return item;
          }
        })
        .map((item) => (
          <div key={item._id} className="content">
            <h2>{item.name}</h2>
            <div className="innerContent">
              <h5>
                Category: {item.category}
                <br /> Type: {item.type}
              </h5>
              <div>
                {role !== "Student" && (
                  <Link className="main-content-link" to={`/edit/${item._id}`}>
                    Edit
                  </Link>
                )}
                <Link
                  className="main-content-link"
                  to={`/detail-content/${item._id}`}
                >
                  See More
                </Link>
                {role === "Administrator" && (
                  <button
                    className="main-content-link"
                    onClick={() => deleteItem(item._id)}
                  >
                    Delete
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
    </Container>
  );
}

export default MainContentPage;
