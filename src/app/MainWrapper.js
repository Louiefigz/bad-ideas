import React, {PureComponent} from 'react';
// import {connect} from 'react-redux';
// import classNames from 'classnames';

class MainWrapper extends PureComponent {

  render() {
    // let wrapperClass = classNames({
    //   'wrapper': true,
    //   'squared-corner-theme': this.props.customizer.squaredCorners,
    //   'blocks-with-shadow-theme': this.props.customizer.withBoxShadow,
    //   'top-navigation': this.props.customizer.topNavigation
    // });
    
    // const theme = this.props.theme.className;
    return (
      <div >
        <div >
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default MainWrapper;