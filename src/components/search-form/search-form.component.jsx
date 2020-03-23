import React from 'react';

import { Form, InputGroup } from 'rsuite';
import 'rsuite/dist/styles/rsuite-default.css';

import { styles, StyledInput } from './search-form.styles';

const SearchForm = ({ name, value, handleChange }) => (
  <Form fluid>
    <InputGroup style={styles}>
      <StyledInput placeholder='Search Country' type={'search'} name={name} onChange={(e) => handleChange(e)} value={value} />
    </InputGroup>
  </Form>
);

export default SearchForm;