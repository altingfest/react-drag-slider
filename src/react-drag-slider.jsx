import './index.scss';
import React from 'react';

const { log } = console;

export class ReactScrollSlider extends React.Component {

  constructor(props) {
    super(props);
    this.handleMouseDown = this.handleMouseDown.bind(this);
    this.handleMouseUp = this.handleMouseUp.bind(this);
    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.setContentRef = this.setContentRef.bind(this);
    this.updateContentSizes = this.updateContentSizes.bind(this);

    this.state = {
      content: {
        width: 0,
        height: 0,
        displace: 0,
      },
      container: {
        width: this.props.width,
        height: 0,
      },
      scrollbar: {
        width: this.props.barSize.width || 40,
        height: this.props.barSize.height || 20,
      },
      startPosition: 0,
      currentPosition: 0,
      movingPosition: 0,
      percent: 0,
      delta: null,
    };
    this.contentRef = null;
    this.interval = null;
  }

  componentDidMount() {
    this.updateContentSizes();
    this.interval = setInterval(this.updateContentSizes, 2000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  setContentRef(el) {
    this.contentRef = el;
  }

  updateContentSizes() {
    const rect = this.contentRef.getBoundingClientRect();
    const { content } = this.state;
    content.width = rect.width;
    this.setState({
      content,
    });
  }


  startMouseListen() {
    window.addEventListener('mouseup', this.handleMouseUp);
    window.addEventListener('mousemove', this.handleMouseMove);
  }

  endMouseListen() {
    window.removeEventListener('mouseup', this.handleMouseUp);
    window.removeEventListener('mousemove', this.handleMouseMove);
  }

  handleMouseDown(event) {
    this.setState({
      startPosition: event.clientX,
      delta: 0,
    });
    this.startMouseListen();
  }

  handleMouseUp(event) {
    log(event.type, event);
    this.setState({
      currentPosition: this.state.movingPosition,
      delta: null,
    });
    this.endMouseListen();
  }

  handleMouseMove(event) {
    const delta = this.state.startPosition - event.clientX;
    const maxRightPosition = this.state.container.width - this.state.scrollbar.width;
    const movingPosition = Math.min(Math.max(0, this.state.currentPosition - delta), maxRightPosition);
    this.setState({
      movingPosition,
      percent: movingPosition / maxRightPosition,
    });
  }

  evalStyles() {
    return {
      container: {
        width: 0,
        height: 0,
        displace: 0,
      },
    };
  }

  render() {
    const { currentPosition, delta, movingPosition, percent, content, container } = this.state;
    const contentDisplace = Math.round((content.width - container.width) * percent);
    const containerStyle = {
      width: this.props.width,
    };
    const contentStyle = {
      transform: `translateX(${-contentDisplace}px)`,
    };
    const barStyle = {
      width: this.state.scrollbar.width,
      transform: `translateX(${delta === null ? currentPosition : movingPosition}px)`,
    };
    const scrollStyle = {
      height: this.state.scrollbar.height,
    };
    return (
      <div className="react-scroll-slider" style={containerStyle}>
        <div className="react-scroll-slider__content" ref={this.setContentRef} style={contentStyle}>
          {this.props.children}
        </div>
        <div className="react-scroll-slider__scroll" style={scrollStyle}>
          <div className="react-scroll-slider__rail"></div>
          <div
            className="react-scroll-slider__bar"
            onMouseDown={this.handleMouseDown}
            onMouseUp={this.handleMouseUp}
            style={barStyle}
          >{this.props.barElement || ''}</div>
        </div>
      </div>
    );
  }
}

