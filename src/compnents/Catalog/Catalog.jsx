import React, { Component } from 'react';
import Movie from '../Movie/Movie';

class Catalog extends Component {
    constructor(){
        super()
        this.state={
            Budget: 10,
        }
    }
    addBudget = () => {
        let Budget = this.state.Budget + 3;
        if(Budget<0) {
            this.alertMessage()
            Budget=0
        }
        this.setState({ Budget });
    };
    
    subBudget = () => {
        let Budget = this.state.Budget - 3;
        if(Budget<0) {
            this.alertMessage()
            Budget=0
        }
        this.setState({ Budget });
    };

    search=(e)=>{
        this.props.search(e)
    }
    render() {
        const movies = this.props.movies
        const {Budget} =this.state
        return (
            <div>
                <div className='input-area'>
                    <input id='search' placeholder='Search' value={this.props.searchInput} onChange={this.search}/>
                </div>
                <div>
                    <h2>Budget</h2>
                    <h2>{Budget}</h2>
                </div>
                <hr/>
                {movies.find(m=>m.isRented === true) ? <h2>Rented</h2> : <h2></h2>}
                <div className='Catalog-container'>
                    {movies.filter(m=>m.isRented).map(m =>(
                        <Movie movie={m} key={Math.random()} rentMovie={this.props.rentMovie} addBudget={this.addBudget} subBudget={this.subBudget} Budget={Budget}/>
                    ))}
                    
                </div>
                <hr />
                <h2>Catalog</h2>
                <div className='Catalog-container'>
                    {movies.map(m =>(
                        <Movie movie={m} key={Math.random()} rentMovie={this.props.rentMovie} addBudget={this.addBudget} subBudget={this.subBudget} Budget={Budget}/>
                    ))}
                </div>
            </div>
        );
    }
}

export default Catalog;