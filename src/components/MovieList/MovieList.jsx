import { NavLink} from 'react-router-dom';


export const  MovieList = ({films}) => {
    return (
        <div>
            <ul>
            {films.map(({id, title}) => (
                <li key={id}>
                    <NavLink
                        to={`/movies/${id}`}>
                        {title}
                    </NavLink>
              </li>
               ))}
            </ul>
        </div>
    )
}