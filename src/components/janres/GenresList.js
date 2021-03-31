import React from 'react'
import GenresItem from './GenresItem'

function GenresList(props) {
    return (
        <ul className="catalog__genres-list">
            {props.genres.map(genre => {
               return <GenresItem genre={genre} key={genre}/>
            })}
        </ul>
    )
}

export default GenresList