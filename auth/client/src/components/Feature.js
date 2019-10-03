import React, { Component } from 'react';
import requireAuth from './requireAuth';
import '../styles.css';

class Feature extends Component {
    render() {
        return (
            <div className="feature">
                this is Feature section.
            </div>
        );
    }
}

export default requireAuth(Feature);