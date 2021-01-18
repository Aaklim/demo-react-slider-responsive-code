import React from 'react'
import PropTypes from 'prop-types'
import classes from './Card.module.css'

const Card = ({ number }) => (
  <div className={classes.main}>
    <div className={classes.title}>{`Card ${number}`}</div>
    <div className={classes.content}>
      <p>
        <img src={`img/img${number}.jpg`} className={classes.img} alt="card" />
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin volutpat
        malesuada tellus ut luctus. Maecenas at nisi nisi. Phasellus a urna ex.
        Mauris eget orci in ligula congue ornare at quis nulla. Etiam vulputate
        in nibh vehicula sollicitudin. Mauris vitae ante eget justo dapibus
        dignissim non non nibh. Integer scelerisque, ligula nec elementum
        condimentum, nunc dolor venenatis nulla, id varius metus dolor ac dui.
        Nulla finibus elit eros, sed convallis sem sodales vel. Sed hendrerit
        quam eget neque aliquet, vitae ultrices diam interdum. Sed tempus est
        lectus, a volutpat purus sagittis eget. Nunc non elit scelerisque tortor
        faucibus iaculis. Donec faucibus tristique purus, vitae condimentum
        massa aliquam nec. Aenean nisi tellus, aliquam ac tristique at, blandit
        dignissim enim. Orci varius natoque penatibus et magnis dis parturient
        montes, nascetur ridiculus mus.
      </p>
    </div>
  </div>
)
Card.propTypes = {
  number: PropTypes.number.isRequired,
}

export default Card
