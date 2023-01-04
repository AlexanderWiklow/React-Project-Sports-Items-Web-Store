// import { Link } from "react-router-dom";

// Pretty simple component that returns the About-page.
export default function About() {
  return (
    <>
      {/* <Link to="/">Back</Link> */}
      <div className="about-outer-wrapper">
        <h1>ABOUT US</h1>
        <div className="content-wrapper">
          <img
            src="http://localhost:3000/assets/background_3.jpg"
            alt="about us"
          />

          <div className="about-content">
            <h2>WHO</h2>
            <p>
              Welcome to our sports shop! We are a locally owned and operated
              business that specializes in all things sports. Whether you are a
              seasoned athlete or just starting out, we have something for
              everyone. We carry a wide selection of sporting equipment,
              apparel, and accessories from top brands. Our knowledgeable staff
              is always happy to help you find the perfect gear for your needs.
              Stop by and see us today!
            </p>

            <h2>WHAT</h2>

            <p>
              At our sports business, we strive to provide our customers with
              everything they need to excel in their chosen sport. We offer a
              wide range of sporting equipment, including shoes, balls, and
              other gear. In addition to selling products, we also offer
              services such as custom fitting, repairs, and team sales. Our team
              of knowledgeable and passionate staff members is dedicated to
              helping athletes of all levels reach their full potential. Come
              visit us and see how we can support your sporting endeavors!
            </p>

            <h2>WHY</h2>

            <p>
              Our sports business is dedicated to supporting the sporting
              community and helping athletes reach their full potential. We aim
              to provide high-quality products and services to meet the needs of
              all types of athletes, from professionals to casual enthusiasts.
              In addition to helping our customers achieve their personal goals,
              we also strive to be a positive influence in the larger sporting
              community. Whether through sponsorships, charitable donations, or
              other forms of support, we aim to make a difference through our
              business.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
