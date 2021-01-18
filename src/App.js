import React from 'react'
import Carousel from './Carousel'
import classes from './App.module.css'
import Card from './Card/Card'

const App = () => {
  const createImages = (rows) => {
    if (rows === 1) {
      const images = []
      for (let i = 1; i <= 8; i += 1) {
        images.push(
          <div key={i}>
            <img src={`img/img${i}.jpg `} alt="test-slide" />
          </div>,
        )
      }
      return images
    }
    const images = []
    for (let i = 1; i <= 8; i += 1) {
      images.push(
        <div key={i}>
          <img src={`img/img${i}.jpg `} alt="test-slide" />
          <img src={`img/img${i !== 8 ? i + 1 : 1}.jpg `} alt="test-slide" />
        </div>,
      )
    }
    return images
  }
  const createCards = (row) => {
    if (row === 1) {
      const cards = []
      for (let i = 1; i <= 8; i += 1) {
        cards.push(
          <div>
            <Card number={i} key={i} />
          </div>,
        )
      }
      return cards
    }
    const cards = []
    for (let i = 1; i <= 8; i += 1) {
      cards.push(
        <div>
          <Card number={i} key={i} />
          <Card number={i !== 8 ? i : 1} key={i} />
        </div>,
      )
    }
    return cards
  }

  return (
    <div className={classes.wrapper}>
      <div className={classes.header}>
        <h1 className={classes.title}>Demo react-slider-responsive</h1>
      </div>
      <p>
        <a
          href="https://github.com/Aaklim/react-slider-responsive/blob/master/README.md"
          target="_blank"
          rel="noreferrer"
        >
          React-slider-responsive{' '}
        </a>
        is responsive Carousel component for React Apps.This demo demоnstrates
        the ability to configure a component using special props: autoplay,
        multiply, color, arrowNext, arrowPrev.
      </p>
      <div className={classes.content}>
        <div>
          <h4>Default mode : </h4>
          <Carousel>{createImages(1)}</Carousel>
          <br />
          <Carousel>{createCards(1)}</Carousel>
        </div>
        <div>
          <h4>Autoplay : </h4>
          <Carousel autoplay>{createImages(1)}</Carousel>
          <br />
          <Carousel autoplay>{createCards(1)}</Carousel>
        </div>
        <div>
          <h4>Multiply mode with custom autoplay intervals : </h4>
          <Carousel autoplay={10000} multiply={2}>
            {createImages(1)}
          </Carousel>
          <br />
          <Carousel autoplay={5000} multiply={4}>
            {createImages(1)}
          </Carousel>
          <br />
          <Carousel autoplay={3000} multiply={4}>
            {createImages(2)}
          </Carousel>
        </div>
        <div>
          <h4>Custom color for arrows,status and indicators : </h4>
          <Carousel autoplay color="red" multiply={2}>
            {createCards(1)}
          </Carousel>
        </div>
      </div>
      <h4>
        For more information follow{' '}
        <a
          href="https://github.com/Aaklim/react-slider-responsive/blob/master/README.md"
          target="_blank"
          rel="noreferrer"
        >
          React-slider-responsive.{' '}
        </a>{' '}
      </h4>
    </div>
  )
}

export default App
