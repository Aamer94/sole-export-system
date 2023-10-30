import React, { Component } from 'react';
import './ScrolToTop.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faCircleUp } from '@fortawesome/free-solid-svg-icons'

class ScrollToTopButton extends Component {
  scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // For smooth scrolling
    });
  };

  render() {
    return (
      <button className="scroll-to-top" onClick={this.scrollToTop}>
       <FontAwesomeIcon icon={faCircleUp} className='icon-top' />
      </button>
    );
  }
}

export default ScrollToTopButton;
