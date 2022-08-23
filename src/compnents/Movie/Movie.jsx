import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Movie extends Component {

    rentMovie=(isRented)=>{
        let Budget = this.props.Budget
        const MINMUM_BUDGET = 2 
        if(Budget > MINMUM_BUDGET){
            if(!isRented){
                console.log("! re");
                this.props.rentMovie(this.props.movie.id)  
                this.props.subBudget()
            }  
        }
        if(isRented){
            console.log("reg");
            this.props.rentMovie(this.props.movie.id)  
            this.props.addBudget()     
        }
        else if(Budget <= MINMUM_BUDGET){
            this.alertMessage()
        }
    }
    alertMessage=()=>{
        alert("Your Budget not enough ")
    }

    render() {
        const {movie}=this.props
        const img= movie.img
        return (
            <div className='movie'>
                <Link to={`/movies/${movie.id}`}>
                    <img src={img} />
                </Link>
                <span className='btnAddRemove' onClick={()=>this.rentMovie(movie.isRented)}>
                    {movie.isRented?"-":"+"}</span>
            </div>
        );
    }
}

export default Movie;