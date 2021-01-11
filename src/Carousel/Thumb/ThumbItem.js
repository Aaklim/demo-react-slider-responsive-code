import React from 'react'
import Radium from 'radium'

const ThumbItem = ({ id, handler, current }) => {
    const currentItem = Radium.keyframes({
        '0%': { opacity: 0.2 },
        '50%': { opacity: 0.5 },
        '100%': { opacity: 1 }
    })
    const styles = {
        main: {
            width: '10px',
            height: '10px',
            borderRadius: '50%',
            backgroundColor: 'white',
            margin: '1%',
            opacity: 0.2,
            boxShadow: ' 0 0 10px rgba(0,0,0,0.5)',
            ':hover': {
                cursor: 'pointer',
                opacity: 0.5,
            }
        },
        current: {
            opacity: 1,
            animationName: currentItem,
            animationDuration: '1s',
            animationIterationCount: 1,
        }
    }
    return (
        <div style={[styles.main, current ? styles.current : null]} id={id} onClick={handler} >
        </div>
    )
}
export default Radium(ThumbItem);
