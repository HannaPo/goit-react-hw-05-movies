import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Form, Input, Button } from './SearchForm.styled';

const SearchForm = ({ onSubmit }) => {
  const [value, setValue] = useState('');

  const handleChange = event => {
    setValue(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (!value) {
      alert('Type movie name');
      return; 
    }
    onSubmit(value);
    setValue('');
  };

  return (
    <div onSubmit={handleSubmit}>
      <Form>
      <Input type="text" placeholder="Type to search..." onChange={handleChange} />
      <Button type="submit">Search</Button>
    </Form>
    </div>
  );
};

SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default SearchForm;
