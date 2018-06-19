import React from 'react';
import { FormGroup, InputGroup, Button, FormControl } from 'react-bootstrap';

export default class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };
  }

  handleChange = (event) => {
    if (this.props.onChange) {
      this.props.onChange(event.target.value);
    }
    this.setState({ value: event.target.value });
  }

  render() {
    const { value } = this.state;
    return (
      <form>
        <FormGroup>
          <InputGroup>
            <FormControl value={value} onChange={this.handleChange} placeholder="Type any recipe name" type="text" />
            <InputGroup.Button>
              <Button>Search</Button>
            </InputGroup.Button>
          </InputGroup>
        </FormGroup>
      </form>
    );
  }
}
