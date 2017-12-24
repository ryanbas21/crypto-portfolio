import React from 'react';
import PropTypes from 'prop-types'
import { FormControl, FormGroup, Button } from 'react-bootstrap';

export default function Search(props) {
    return (
            <FormGroup>
                <FormControl
                    type="text"
                    label={ "Lookup Coin" }
                    onSubmit={ props.onEnter }
                    placeholder={ "Search" }
                />
                <Button
                    bsStyle="info"
                    type="submit"
                    onClick={ props.onSubmit }
                >
                Search
            </Button>
        </FormGroup>
    );
}

Search.propTypes = {
    onEnter: PropTypes.func.isRequired
}
