import {
  Container,
  Row,
  Col
} from "reactstrap";
import MyCard from './MyCard';
import { useAuth } from './AuthProvider';
import axios from "axios";
import { useState, useEffect } from "react";
import NewPostForm from "./NewPostForm";

const Dashboard = () => {
  const { user } = useAuth();
  const [posts, setPosts] = useState([]);

  const getPosts = async () => {
    try {
      const result = await axios.get('http://127.0.0.1:8000/posts/', { withCredentials: true });
      console.log('result', result);
      setPosts(result.data.results);
    } catch (error) {
      // Handle errors
      console.error(error);
    }
  };
  useEffect(() => {
    getPosts();
  }, []);

  return (
    <Container>
      <Row>
        <Col md={{ offset: 3, size: 6 }} sm="12">
          <h1 className="my-main-heading">
            Welcome, {user.username}
          </h1>
          <h1 className="my-sub-heading">
            My Latest Posts:
          </h1>
        </Col>
      </Row>
      <Row>
        {posts.slice(-3).map((item, index) => (
          <Col key={index} sm="6">
            <MyCard item={item} />
          </Col>
        ))}
      </Row>
      <Row>
        <Col>
          <NewPostForm />
        </Col>
      </Row>
    </Container>
  )
};

export default Dashboard;