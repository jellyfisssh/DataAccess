import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Container, Col } from "react-bootstrap";
import server from "../server";

function EditPage() {
  const navigate = useNavigate();
  const [input, setInput] = useState({
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

  function handleChange(e) {
    const { name, value } = e.target;

    setInput((prevInput) => {
      return {
        ...prevInput,
        [name]: value,
      };
    });
  }
  // "update"
  const onSubmit = (e) => {
    const newArticle = {
      category: input.category,
      type: input.type,
      name: input.name,
      born: input.born,
      died: input.died,
      nationality: input.nationality,
      known_for: input.known_for,
      notable_work: input.notable_work,
      about: input.about,
      year: input.year,
      medium: input.medium,
      dimensions: input.dimensions,
      location: input.location,
      designed_by: input.designed_by,
      developer: input.developer,
    };
    alert("Article Successfully Updated");
    server.post("/add-new", newArticle);
  };

  return (
    <Container fluid className="container">
      <Col>
        <h1 className="title">Edit Article</h1>
      </Col>
      <form onSubmit={onSubmit}>
        <label>Category</label>
        <br />

        <select
          className="input"
          name="category"
          value={input.category}
          onChange={handleChange}
        >
          <option value="arts">Arts</option>
          <option value="mathematics">Mathematics</option>
          <option value="technology">Technology</option>
        </select>
        <br />
        <label>Type</label>
        <br />
        <input
          className="input"
          name="type"
          type="text"
          value={input.type}
          onChange={handleChange}
        />
        <br />
        <label>Name</label>
        <br />
        <input
          className="input"
          name="name"
          type="text"
          value={input.name}
          onChange={handleChange}
        />
        <br />
        <label>Born</label>
        <br />
        <input
          className="input"
          name="born"
          type="text"
          value={input.born}
          onChange={handleChange}
        />
        <br />
        <label>Died</label>
        <br />
        <input
          className="input"
          name="died"
          type="text"
          value={input.died}
          onChange={handleChange}
        />
        <br />
        <label>Nationality</label>
        <br />
        <input
          className="input"
          name="nationality"
          type="text"
          value={input.nationality}
          onChange={handleChange}
        />
        <br />
        <label>Known For</label>
        <br />
        <input
          className="input"
          name="known_for"
          type="text"
          value={input.known_for}
          onChange={handleChange}
        />
        <br />
        <label>Notable Work</label>
        <br />
        <input
          className="input"
          name="notable_work"
          type="text"
          value={input.notable_work}
          onChange={handleChange}
        />
        <br />
        <label>About</label>
        <br />
        <textarea
          className="input"
          name="about"
          type="text"
          value={input.about}
          onChange={handleChange}
        />
        <br />
        <label>Year</label>
        <br />
        <input
          className="input"
          name="year"
          type="text"
          value={input.year}
          onChange={handleChange}
        />
        <br />
        <label>Medium</label>
        <br />
        <input
          className="input"
          name="medium"
          type="text"
          value={input.medium}
          onChange={handleChange}
        />
        <br />
        <label>Dimensions</label>
        <br />
        <input
          className="input"
          name="dimensions"
          type="text"
          value={input.dimensions}
          onChange={handleChange}
        />
        <br />
        <label>Location</label>
        <br />
        <input
          className="input"
          name="location"
          type="text"
          value={input.location}
          onChange={handleChange}
        />
        <br />
        <label>Designed By</label>
        <br />
        <input
          className="input"
          name="designed_by"
          type="text"
          value={input.designed_by}
          onChange={handleChange}
        />
        <br />
        <label>Developer</label>
        <br />
        <input
          className="input"
          name="developer"
          type="text"
          value={input.developer}
          onChange={handleChange}
        />
        <br />
        <Button variant="success" className="btn" type="submit">
          Save Changes
        </Button>
      </form>
      <Button
        onClick={() => navigate("/main-content/admin")}
        variant="primary"
        className="btn"
      >
        Back
      </Button>
      <br />
    </Container>
  );
}

export default EditPage;
