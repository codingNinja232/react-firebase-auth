import React, { useEffect, useState } from "react";
import { useAuth } from '../../contexts/authContext';
import axios from "axios";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const Home = () => {
    const { currentUser } = useAuth();
    const [books, setBooks] = useState([]);

    useEffect(() => {
  
      axios.get("/data.json").then((res) => {
  
        setBooks(res.data.books);
      });
    }, []);

    return (
        <div>
        <div className='text-2xl font-bold pt-14'>Hello {currentUser.displayName ? currentUser.displayName : currentUser.email}, you are now logged in.</div>
        <div>
      <h1 className="text-center">List of Books</h1>
      <br />
      <Row xs={1} md={2} className="g-4">
        {books &&
          books.map((book, id) => (
            <Col key={id}>

              <Card key={id}>
                
                <Card.Body>
                  <Card.Title>{book.title}</Card.Title>
                  <Card.Text>{book.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
      </Row>
    </div>
    </div>
    )
}

export default Home