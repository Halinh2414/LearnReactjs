import React, {useContext, useState} from 'react';
import { MovieContext } from '../../context/MovieContext';
function MovieForm() {
    const [name, setName] = useState('')
    const {AddMovie} = useContext(MovieContext);
    const onChangeInput = (event) => {
        setName(event.target.value);
    }
    return (
        <div>
            <h6>Movie Form</h6>
            <input type="text" name="movieName" onChange={onChangeInput} />
            <button type="submmit" onClick={() => AddMovie(name)}>Add Movie</button>
        </div>
    );
}

export default MovieForm;