import React from 'react'
import PropsTypes from 'prop-types'
import styled from 'styled-components';
// Component Error Message
ErrorMessage.propTypes = {
  errors: PropsTypes.object,
  name: PropsTypes.string
}
const Message = styled.div`
  color: #ff424f;
  font-size: 1.2rem;
  padding-top: 0.5rem;
`

function ErrorMessage({errors, name}) {
  const error = errors[name];
  return (
    <Message>
      {error && error.message}
    </Message>
  )
}

export default ErrorMessage
