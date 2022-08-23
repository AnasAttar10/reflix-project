import React, { Component } from 'react';

class MovieDetail extends Component {
    render() {
        const {movies} = this.props
        const {match}=this.props
        const Id = match.params.id
        const targetMovie = movies[Id]
        return (
            <div className='movie-detail'>
                <h2>{targetMovie.title}</h2>
                <h3>({targetMovie.year})</h3> 
                <div className='img-container'>
                    <img src={targetMovie.img} alt="" />
                </div>
                <div className='movie-description'>{targetMovie.descrShort}</div>
            </div>
        );
    }
}

export default MovieDetail;