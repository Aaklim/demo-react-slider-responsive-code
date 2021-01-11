import React from 'react'
import Radium from 'radium'
import ThumbItem from './ThumbItem'

const Thumb = (props) => {
    const styles = {
        // position: 'absolute',
        // bottom: 0,
        width: '100%',
        maxHeight: '20px',
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'black'
    }
    const createThumbItems = (Component, itemsNumber, itemHandler, currentItem) => {
        let thumbItems = []
        for (let i = 1; i <= itemsNumber; i++) {
            thumbItems.push(<Component
                key={i}
                id={i}
                handler={itemHandler}
                current={i === currentItem}
            />)
        }
        return thumbItems;
    }
    const thumbItems = createThumbItems(ThumbItem, props.thumb.itemsNumber, props.thumb.handler, props.thumb.activeItem)
    return (
        <div style={styles} >
            {thumbItems}
        </div>
    )
}

export default Radium(Thumb);
