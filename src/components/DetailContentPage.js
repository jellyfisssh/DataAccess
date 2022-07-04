import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
function DetailContentPage() {
  let { title } = useParams();
  //will be replaced with actual data feteched from database
  const MOCK_DATA = {
    About:
      'Euclid, sometimes given the name Euclid of Alexandria to distinguish him from Euclides of Megara, was a Greek mathematician, often referred to as the "founder of geometry" or the "father of geometry". He was active in Alexandria during the reign of Ptolemy I (323–283 BC). His Elements is one of the most influential works in the history of mathematics, serving as the main textbook for teaching mathematics (especially geometry) from the time of its publication until the late 19th or early 20th century. In the Elements, Euclid deduced the theorems of what is now called Euclidean geometry from a small set of axioms. Euclid also wrote works on perspective, conic sections, spherical geometry, number theory, and rigor.',
    Category: "Mathematics",
    Type: "Biography",
    Name: "Euclid",
    Born: "4th century BC",
    Died: "3rd century BC",
    KnownFor: "Euclidean geometry",
  };
  //will use useEffect to fetch data with {title }
  // useEffect(() => {

  // },[])

  return (
    <Container style={{ width: "60rem" }}>
      <h1>
        {MOCK_DATA.Type} - {MOCK_DATA.Name}
      </h1>
      {/* testing only */}
      {title && <h1 style={{ color: "gray" }}>{title}</h1>}

      {Object.keys(MOCK_DATA).map((key) => (
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
          <p>{MOCK_DATA[key]}</p>
        </>
      ))}
    </Container>
  );
}

export default DetailContentPage;
