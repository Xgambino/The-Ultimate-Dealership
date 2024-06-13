
import {Container, Row, Col} from "react-bootstrap"
import ItemCard from "../components/ItemCard";
import NavigationBar from "../components/NavBar";

function ItemList() {
  return (
    <Container >
      <NavigationBar/>
      <Row className="mt-10" style={{marginTop : 20}}>
        {new Array(1).fill(Math.random()).map((_, index) => (
          <Col key={index} className="mb-5">
            <ItemCard />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default ItemList;
