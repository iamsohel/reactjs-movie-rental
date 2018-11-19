import React, { Component } from 'react';
import { getMovies } from '../services/fakeMovieService';
import { getGenres } from '../services/fakeGenreService';
import Pagination from './common/pagination';
import ListGroup from './common/listGroup';
import {paginate} from '../utils/paginate';
import MoviesTable from './moviesTable';
import _ from 'lodash';

class Movies extends Component {
    state = {  
        movies : [],
        genres : [],
        pageSize: 4,
        currentPage :1,
        sortColumn: {path: 'title', order: 'asc'}
    };

    getPageData = () =>{
        const {pageSize, currentPage, movies:allMovies, selectedGenre, sortColumn} = this.state;

        const filtered = selectedGenre && selectedGenre._id ? (allMovies.filter(m => m.genre._id === selectedGenre._id)) : allMovies;
        const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order] );
        const movies = paginate(sorted, currentPage, pageSize);

        return {totalCount: filtered.length, data: movies};
    }

    componentDidMount(){
        const genres = [{_id: "", name : 'All Genres'},...getGenres()]
        this.setState({movies: getMovies(), genres});
    }

    handleDelele = movie => {
        const movies = this.state.movies.filter(m => m._id !== movie._id);
        this.setState({movies});
    }

    handlePageChange = (page) =>{
        this.setState({currentPage: page});
    }

    handleGenreSelect = (genre) => {
        this.setState({selectedGenre: genre, currentPage: 1});
    }

    handleSort = (sortColumn) => {
        this.setState({sortColumn});
    }

    handleLike = (movie) => {
       const movies = [...this.state.movies];
       const index = movies.indexOf(movie);
       movies[index] = {...movies[index]};
       movies[index].liked = !movies[index].liked;
       this.setState({movies});

    }

    render() { 
        const {pageSize, currentPage, sortColumn} = this.state;

        if(this.state.movies.length === 0) return <p> there is no movie in database.</p>;
        const {totalCount, data: movies} = this.getPageData();
        
        return (
            <div className="row">
            <div className="col-2">
                <ListGroup 
                    items={this.state.genres} 
                    selectedItem={this.state.selectedGenre}
                    onItemSelect={this.handleGenreSelect}
                />
            </div>
            <div className="col">
            <p>showing {totalCount} movie in the database</p>
            
            <MoviesTable
                movies={movies}
                sortColumn={sortColumn}
                onLike={this.handleLike}
                onDelete={this.handleDelele}
                onSort={this.handleSort}
            />
            <Pagination 
               itemsCount={totalCount}
               pageSize={pageSize} 
               onPageChange={this.handlePageChange}
               currentPage={currentPage}
             />
            </div>  
            </div>
        );
    }
}
 
export default Movies;