import React from 'react';

import { Form, InputGroup } from 'rsuite';
import 'rsuite/dist/styles/rsuite-default.css';

import { styles, inputStyles } from './search-form.styles';

const SearchForm = ({ name, value, handleChange }) => (
  <Form fluid>
    <InputGroup style={styles}>
      <input placeholder='Search Country' style={inputStyles} type={'search'} name={name} onChange={(e) => handleChange(e)} value={value} />
    </InputGroup>
  </Form>
);

export default SearchForm;