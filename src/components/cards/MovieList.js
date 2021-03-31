import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import MovieItem from './MovieItem'


function MovieList(props) {

    return (
        <div className="catalog__movies-list">
            {props.films.map(film => {
                return <MovieItem film={film} key={film} />
            })}
        </div>
    )
}



export default MovieList