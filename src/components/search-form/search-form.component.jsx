import React from 'react';

import { Form, Affix, InputGroup } from 'rsuite';
import 'rsuite/dist/styles/rsuite-default.css';

import { styles, inputStyles } from './search-form.styles';

const SearchForm = ({ name, value, handleChange }) => (
  <Affix top={20}>
    <Form fluid>
      <InputGroup style={styles}>
        <input placeholder='Search Country' style={inputStyles} type={'search'} name={name} onChange={(e) => handleChange(e)} value={value} />
      </InputGroup>
    </Form>
  </Affix>
);

export default SearchForm;