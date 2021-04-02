import React from 'react';
import Moment from 'react-moment';

export default class MyComponent extends React.Component {
    
    render() {
        const dateToFormat = new Date();
        return (
            <Moment fromNow>{dateToFormat}</Moment>
        );
    }
}
