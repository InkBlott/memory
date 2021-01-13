import React from 'react'

const Card = ({image, onClick, key, id}) => {

    const style = {
        maxWidth : '100px',
        maxHeight : '100px',
        objectFit: 'cover',
    }

    return (
        <img style={style} src={image} onClick={onClick} id={id} key={key} alt=''></img>
    )
}


export default Card;