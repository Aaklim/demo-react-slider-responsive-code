import React, {PureComponent} from 'react';
import Carousel from './Carousel';
import {StyleRoot} from 'radium';
class CarouselContainer extends PureComponent {
  state = {
    itemsNumber: 0,
    activeItem: 1,
    transitionTime: '500ms',
    multiply: 1,
    interval: 2000,
    setintervalId: null,
    touchStart: null,
    touchMove: null,
    sliderSensitivity: 50,
  };
  componentDidMount() {
    this.setState((state) => ({
      multiply:
        typeof this.props.multiply === 'number' ? this.props.multiply : 1,
    }));
    this.setState((state) => ({
      sliderSensitivity:
        typeof this.props.sensitivity === 'number'
          ? this.props.sensitivity
          : 50,
    }));
    this.setState((state) => ({
      itemsNumber: Math.round(this.props.children.length / state.multiply),
    }));
    if (this.props.demo) {
      this.setState(
        (state) => ({
          interval:
            typeof this.props.demo === 'number'
              ? this.props.demo
              : this.state.interval,
        }),
        () => this.demoMode(),
      );
    }
  }
  demoMode = () => {
    const setintervalId = setInterval(
      () => this.toggleSlide('demo'),
      this.state.interval,
    );
    this.setState({setintervalId: setintervalId});
  };
  toggleSlide = (e) => {
    let toggleValue =
      typeof e === 'string' ? e : e.currentTarget.attributes.name.value;

    if (toggleValue === 'demo') {
      if (this.state.activeItem > 1) {
        this.setState(() => ({transitionTime: '500ms'}));
        this.setState((state) => ({activeItem: state.activeItem - 1}));
      } else {
        this.setState({activeItem: this.state.activeItem - 1});
        setTimeout(() => {
          this.setState((state) => ({transitionTime: '0.1ms'}));
          this.setState((state) => ({activeItem: state.itemsNumber}));
        }, 500);
      }
    }
    if (toggleValue === 'prev') {
      clearInterval(this.state.setintervalId);
      if (this.state.activeItem > 1) {
        this.setState(() => ({transitionTime: '500ms'}));
        this.setState((state) => ({activeItem: state.activeItem - 1}));
      } else {
        this.setState({activeItem: this.state.activeItem - 1});
        setTimeout(() => {
          this.setState((state) => ({transitionTime: '0.1ms'}));
          this.setState((state) => ({activeItem: state.itemsNumber}));
        }, 500);
      }
    }

    if (toggleValue === 'next') {
      clearInterval(this.state.setintervalId);
      if (this.state.activeItem < this.state.itemsNumber) {
        this.setState((state) => ({transitionTime: '500ms'}));
        this.setState((state) => ({activeItem: state.activeItem + 1}));
      } else {
        this.setState((state) => ({transitionTime: '500ms'}));
        this.setState((state) => ({activeItem: state.activeItem + 1}));
        setTimeout(() => {
          this.setState((state) => ({transitionTime: '0.1ms'}));
          this.setState((state) => ({activeItem: 1}));
        }, 500);
      }
    }
  };
  onTouchStart = (e) => {
    this.setState((state) => ({touchStart: e.targetTouches[0].screenX}));
  };
  onTouchMove = (e) => {
    this.setState((state) => ({touchMove: e.targetTouches[0].screenX}));
  };
  onTouchEnd = (e) => {
    if (
      this.state.touchMove !== null &&
      this.state.touchMove - this.state.touchStart > 50
    ) {
      this.toggleSlide('prev');
      this.setState((state) => ({
        touchStart: null,
        touchMove: null,
      }));
    } else if (
      this.state.touchMove !== null &&
      this.state.touchStart - this.state.touchMove > 50
    ) {
      this.toggleSlide('next');
      this.setState((state) => ({
        touchStart: null,
        touchMove: null,
      }));
    }
  };
  thumbItemHandler = (e) => {
    let activeItem = Number(e.target.attributes.id.value);
    this.setState((state) => ({activeItem: activeItem}));
  };

  render() {
    return (
      <StyleRoot>
        <Carousel
          items={this.props.children}
          thumb={{
            itemsNumber: this.state.itemsNumber,
            activeItem: this.state.activeItem,
            handler: this.thumbItemHandler,
          }}
          activeItem={this.state.activeItem}
          toggleSlide={this.toggleSlide}
          transitionTime={this.state.transitionTime}
          multiply={this.state.multiply}
          onTouchStart={this.onTouchStart}
          onTouchMove={this.onTouchMove}
          onTouchEnd={this.onTouchEnd}
          arrowPrev={this.props.arrowPrev}
          arrowNext={this.props.arrowNext}
        />
      </StyleRoot>
    );
  }
}

export default CarouselContainer;
