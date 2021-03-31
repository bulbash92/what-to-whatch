import React from 'react'
import { func } from 'prop-types'

function GenresItem(props) {
    return (
        <li className="catalog__genres-item catalog__genres-item">
            <a href="#" className="catalog__genres-link">{props.genre}</a>
        </li>
    )
}

export default GenresItem