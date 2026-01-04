import React from "react";
import "./project.styles.scss";
import Carousel from "../carousel/carousel.component";

const Project = ({ data }) => {
  if (!data) return null; // avoids rendering if data is missing

  const { title, text, images, link } = data;

  const imagesDisplay = []

  images && images.length > 0 ? (
        images.map((item, index) => (
            imagesDisplay.push({id: index + 1, image: item})
        ))
      ) : (
        <p>No images available</p>
      )

  return (
    <div className="project">
      <a href={link} target="_blank" rel="noopener noreferrer">{title} <i class="fa-solid fa-link fa-beat fa-2xs"></i></a>
      <div className="project-content">
        <p>{text}</p>
        <Carousel ClassName="project-carousel" CarouselItems={imagesDisplay} />
      </div>
    </div>
  );
};

export default Project;
