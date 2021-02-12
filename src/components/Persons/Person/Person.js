import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Aux from '../../../hoc/Auxiliary';
import classes from './Person.module.css';
import withClass from '../../../hoc/withClass';

class Person extends Component {
    //Ref types for newer react versions since 16.3
    constructor(props) {
        super(props);
        this.inputElementRef = React.createRef();
    }

    componentDidMount() {
        // document.querySelector("input").focus();   //using DOM Ref..But the focus will be on the first input element
        // this.inputElement.focus();  //Ref in older React versions
        this.inputElementRef.current.focus(); // Ref in newer React versions
    }
    render() {
        console.log('[Person.js] rendering...')
        console.log("Person Name = ", this.props.name);
        return (
            
            <Aux>
                <p key='i1' onClick={this.props.click}>
                    I'm {this.props.name} and I am {this.props.age} years old.
                </p>
                <p key='i2'>{this.props.children}</p>
                <input
                    key='i3'
                    // ref={(inputEl) => {this.inputElement = inputEl}}   older React versions before 16.3
                    ref = {this.inputElementRef}
                    type='text' 
                    onChange={this.props.changed} 
                    value={this.props.name}
                />
            </Aux>
            
        );
    }
}

Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
};

export default withClass(Person, classes.Person);