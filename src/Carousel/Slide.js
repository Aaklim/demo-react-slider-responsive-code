import React from 'react'
import Radium from 'radium'
import classes from './Slide.module.css'

const Slide = (props) => {

    const styles = {
        width: `100%`,
        flexShrink: 0,
        listStyle: 'none',
        backgroundColor: '#eeeeee',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'row',
    }
    return (
        <li style={styles}
            id={props.id}
            onTouchStart={props.onTouchStart}
            onTouchMove={props.onTouchMove}
            onTouchEnd={props.onTouchEnd}
            className={classes.item}
        >
            {props.children}
        </li>
    )
}

export default Radium(Slide);
