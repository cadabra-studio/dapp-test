import React from 'react';
import { Col, ListGroup } from 'reactstrap';
import PropTypes from 'prop-types'
import Message from "./Message";

const Messages = ({messages}) => {
  return (
    <>
      <Col>
        <ListGroup>
          { 
            messages.map((message, index) => 
              <Message key={index} message={message} />
            )
          }
        </ListGroup>
      </Col>
    </>
  );
}

Messages.propTypes = {
  messages: PropTypes.array.isRequired
};

export default Messages;
