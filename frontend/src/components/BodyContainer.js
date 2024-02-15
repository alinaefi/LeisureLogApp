import LoginForm from "./LoginForm";
import RegistrationForm from "./RegistrationForm";
import { useState } from "react";
import {
  Container,
  Row,
  Col,
  Button
} from "reactstrap";

const BodyContainer = (props) => {
  const [showLoginForm, setShowLoginForm] = useState(true);

  const toggleForm = () => {
    setShowLoginForm((showLoginForm) => (!showLoginForm));
  }

  return (
    <Container>
      <Row>
        <Col md={{ offset: 3, size: 6 }} sm="12">
          <h1 className="my-main-heading">
            {props.msg}
          </h1>
        </Col>
      </Row>
      <Row>
        <Col md={{ offset: 3, size: 6 }} sm="12">
          {showLoginForm ? <LoginForm /> : <RegistrationForm />}
        </Col>
      </Row>
      <Row>
        <Col md={{ offset: 3, size: 6 }} sm="12">
          <Button color="link" onClick={toggleForm}>
            {showLoginForm ? `Don't have an Account? Sign Up here!` : 'Already have an Account? Log In'}
          </Button>
        </Col>
      </Row>
    </Container>
  )
};

export default BodyContainer;