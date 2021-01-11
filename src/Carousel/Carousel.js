import React from 'react';
import Radium from 'radium';
import Slide from './Slide';
import Thumb from './Thumb/Thumb';
import ArrowPrev from './Arrows/ArrowPrev';
import ArrowNext from './Arrows/ArrowNext';

const Carousel = (props) => {
  const styles = {
    wrapper: {
      position: 'relative',
      width: '100%',
      overflow: 'hidden',
    },
    slider: {
      position: 'relative',
      display: 'flex',
      width: '100%',
      margin: 0,
      padding: 0,
      transform: `translate(-${props.activeItem * 100}%)`,
      transitionProperty: 'transform',
      transitionDuration: props.transitionTime,
    },
    slideToggleButton: {
      position: 'absolute',
      padding: '10px',
      top: 0,
      height: '100%',
      backgroundColor: 'transparent',
      color: 'white',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      opacity: 0.3,
      zIndex: 10,
      ':hover': {
        opacity: 0.5,
        backgroundColor: 'black',
        cursor: 'pointer',
      },
      transitionProperty: 'opacity backgroundColor',
      transitionDuration: '1000ms',
    },
  };
  const createInitialArr = (multiply, items) => {
    let itemsArr = [];
    for (let i = 0; i < items.length; i += multiply) {
      itemsArr.push(items.slice(i, i + multiply));
    }
    return itemsArr;
  };
  const createSlidesArr = (initialArr) => {
    let extendArr = [...initialArr];
    extendArr.push(initialArr[0]);
    extendArr.unshift(initialArr[initialArr.length - 1]);
    let itemsArr = extendArr.map((item, index) => {
      return (
        <Slide
          key={index}
          id={index}
          multiply={props.multiply}
          swipeSlide={props.swipeSlide}
          onTouchStart={props.onTouchStart}
          onTouchMove={props.onTouchMove}
          onTouchEnd={props.onTouchEnd}
        >
          {item}
        </Slide>
      );
    });
    return itemsArr;
  };

  return (
    <div style={styles.wrapper}>
      <div
        key="prev"
        style={[styles.slideToggleButton, {left: 0}]}
        onClick={props.toggleSlide}
        name="prev"
      >
        {props.arrowPrev ? props.arrowPrev : <ArrowPrev />}
      </div>
      <ul style={styles.slider}>
        {createSlidesArr(createInitialArr(props.multiply, props.items))}
      </ul>
      <div
        key="next"
        style={[styles.slideToggleButton, {right: 0}]}
        onClick={props.toggleSlide}
        name="next"
      >
        {props.arrowNext ? props.arrowNext : <ArrowNext />}
      </div>
      <Thumb thumb={props.thumb} />
    </div>
  );
};
export default Radium(Carousel);
