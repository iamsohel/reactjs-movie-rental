import React, { Component } from 'react';
import { getMovies } from '../services/fakeMovieService'
import Like from './common/like'

class Movies extends Component {
    state = {  
        movies : getMovies()
    };

    handleDelele = movie => {
        const movies = this.state.movies.filter(m => m._id !== movie._id);
        this.setState({movies});
    }

    handleLike = () => {
       console.log('s');
    }

    render() { 
        if(this.state.movies.length === 0) return <p> there is no movie in database.</p>;
        return (
            <React.Fragment>
                <p>showing {this.state.movies.length} movie in the database</p>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Genre</th>
                        <th>Stock</th>
                        <th>Rate</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.movies.map( movie => (
                    <tr key ={movie._id}>
                        <td>{movie.title}</td>
                        <td>{movie.genre.name}</td>
                        <td>{movie.numberInStock}</td>
                        <td>{movie.dailyRentalRate}</td>
                        <td><Like liked={movie.liked} onClick={this.handleLike} /></td>
                        <td><button onClick={() => this.handleDelele(movie)} className="btn btn-danger btn-sm">Delete</button></td>
                    </tr>
                    )
                    )}
                </tbody>
            </table>
            </React.Fragment>
        );
    }
}
 
export default Movies;