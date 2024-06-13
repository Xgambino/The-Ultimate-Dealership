import { Container, Carousel } from "react-bootstrap";
import NavigationBar from "../components/NavBar";

function Home() {
  return (
    <Container
      fade
      fluid
      style={{
        display: "flex",
        flexDirection: "column",
        maxHeight: "100vh",
        padding: 0,
        backgroundImage: 'url(https://cdn2.yamaha-motor.eu/prod/product-assets/2024/YZF1000R1SPL/2024-Yamaha-YZF1000R1SPL-EU-Icon_Performance-Action-004-03.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <NavigationBar />
      <Carousel style={{ display: "flex" }}>
        <Carousel.Item>
          <img
            className="headerImg d-block mx-auto"
            src="https://cdn2.yamaha-motor.eu/prod/product-assets/2024/YZF600R6RCOMP/2024-Yamaha-YZF600R6RCOMP-EU-Tech_Black-Studio-001-03.jpg"
            alt=""
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="headerImg d-block mx-auto"
            src="https://i0.wp.com/www.asphaltandrubber.com/wp-content/uploads/2014/11/2015-Yamaha-YZF-R1M-35.jpg"
            alt=""
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Container>
  );
}

export default Home;
