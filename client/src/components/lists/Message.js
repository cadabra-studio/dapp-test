import React from 'react';
import PropTypes from 'prop-types'
import { ListGroupItem } from 'reactstrap';

const Message = ({message}) => {
  return (
    <>
      <ListGroupItem>
        { message }
      </ListGroupItem>
    </>
  );
}

Message.propTypes = {
  message: PropTypes.string.isRequired
}

export default Message;
