import React, { Component } from 'react';

export class Input extends Component {
    constructor() {
        super();
        this.state = {
            item: 'test'
        }
    }


    render(){

        return (
            <div>
                {this.state.item}
            </div>
            )
    }

}