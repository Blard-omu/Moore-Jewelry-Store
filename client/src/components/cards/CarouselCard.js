import React from "react";
import img1 from "../../images/Frame 21 (2).png";
import img3 from "../../images/Frame 21.png";
import img2 from "../../images/Frame 30 (1).png";

const CarouselCard = () => {
  const caroStyle = {
    height: "300px",
  };
  return (
    <>
      <div
        div
        id="carouselExampleIndicators"
        class="carousel slide mx-auto mb-4 bg-black"
        style={caroStyle}
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to={0}
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          />
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to={1}
            aria-label="Slide 2"
          />
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to={2}
            aria-label="Slide 3"
          />
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active" style={caroStyle}>
            <img
              src={img1}
              className="d-block w-100"
              alt="..."
              height="300px"
            />
            <div class="carousel-caption d-none d-md-block">
              <h3>First slide label</h3>
              <p>
                Some representative placeholder content for the first slide.
              </p>
            </div>
          </div>
          <div className="carousel-item" style={caroStyle}>
            <img
              src={img2}
              className="d-block w-100"
              alt="..."
              height="300px"
            />
            <div class="carousel-caption d-none d-md-block">
              <h3>First slide label</h3>
              <p>
                Some representative placeholder content for the first slide.
              </p>
            </div>
          </div>
          <div className="carousel-item" style={caroStyle}>
            <img
              src={img3}
              className="d-block w-100"
              alt="..."
              height="300px"
            />
            <div class="carousel-caption d-none d-md-block">
              <h3>First slide label</h3>
              <p>
                Some representative placeholder content for the first slide.
              </p>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
};

export default CarouselCard;
