import React from 'react';
import CarouselContainer from './Carousel/CarouselContainer';

const App = () => {
  return (
    <div style={{maxWidth: '600px', margin: '0 auto'}}>
      <CarouselContainer multiply={4} demo={1000}>
        <div>
          <img src="img/img1.jpg"></img>
        </div>
        <div>
          <img src="img/img2.jpg"></img>
        </div>
        <div>
          <img src="img/img3.jpg"></img>
        </div>
        <div>
          <img src="img/img4.jpg"></img>
        </div>
        <div>
          <img src="img/img5.jpg"></img>
        </div>
        <div>
          <img src="img/img6.jpg"></img>
        </div>
        <div>
          <img src="img/img7.jpg"></img>
        </div>
        <div>
          <img src="img/img8.jpg"></img>
        </div>
      </CarouselContainer>
      <CarouselContainer
        demo={5000}
        arrowPrev={'CustomPrev'}
        arrowNext={'CustomNext'}
      >
        <div>
          <img src="img/img1.jpg"></img>
          <div>Labelfgkdflgkdflgkdf;gldkfgl;d</div>
        </div>
        <div>
          <img src="img/img2.jpg"></img>
        </div>
        <div>
          <img src="img/img3.jpg"></img>
        </div>
        <div>
          <img src="img/img4.jpg"></img>
        </div>
        <div>
          <img src="img/img5.jpg"></img>
        </div>
        <div>
          <img src="img/img6.jpg"></img>
        </div>
        <div>
          <img src="img/img7.jpg"></img>
        </div>
        <div>
          <img src="img/img8.jpg"></img>
        </div>
        <div>
          <img src="img/img1.jpg"></img>
        </div>
        <div>
          <img src="img/img2.jpg"></img>
        </div>
        <div>
          <img src="img/img3.jpg"></img>
        </div>
        <div>
          <img src="img/img4.jpg"></img>
        </div>
        <div>
          <img src="img/img5.jpg"></img>
        </div>
        <div>
          <img src="img/img6.jpg"></img>
        </div>
        <div>
          <img src="img/img7.jpg"></img>
        </div>
        <div>
          <img src="img/img3.jpg"></img>
        </div>
        <div>
          <img src="img/img1.jpg"></img>
        </div>
        <div>
          <img src="img/img2.jpg"></img>
        </div>
        <div>
          <img src="img/img3.jpg"></img>
        </div>
        <div>
          <img src="img/img4.jpg"></img>
        </div>
        <div>
          <img src="img/img5.jpg"></img>
        </div>
        <div>
          <img src="img/img6.jpg"></img>
        </div>
        <div>
          <img src="img/img7.jpg"></img>
        </div>
        <div>
          <img src="img/img3.jpg"></img>
        </div>
      </CarouselContainer>
      <CarouselContainer demo multiply={2}>
        <div>
          <img src="img/img1.jpg"></img>
          <img src="img/img2.jpg"></img>
        </div>

        <div>
          <img src="img/img3.jpg"></img>
          <img src="img/img4.jpg"></img>
        </div>

        <div>
          <img src="img/img5.jpg"></img>
          <img src="img/img6.jpg"></img>
        </div>

        <div>
          <img src="img/img7.jpg"></img>
          <img src="img/img8.jpg"></img>
        </div>
      </CarouselContainer>
    </div>
  );
};

export default App;
