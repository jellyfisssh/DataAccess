import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import server from "../server";

function DetailContentPage() {
  let { id } = useParams();

  const [article, setArticle] = useState({
    category: "",
    type: "",
    name: "",
    born: "",
    died: "",
    nationality: "",
    known_for: "",
    notable_work: "",
    about: "",
    year: "",
    medium: "",
    dimensions: "",
    location: "",
    designed_by: "",
    developer: "",
  });

  function fetchArticle() {
    server.get("/detail-content/" + id).then((response) => {
      setArticle(response.data);
    });
  }

  useEffect(() => {
    fetchArticle();
  }, []);

  return (
    <Container style={{ width: "60rem" }}>
      <h1>
        {article.type} - {article.name}
      </h1>

      {Object.keys(article).map((key) => (
        <>
          <div
            style={{
              width: "20%",
              backgroundColor: "lightgray",
              textAlign: "center",
              marginBottom: "1rem",
              borderRadius: "3px",
            }}
          >
            {" "}
            <h2>{key}</h2>
          </div>
          <p>{article[key]}</p>
        </>
      ))}
    </Container>
  );
}

export default DetailContentPage;
