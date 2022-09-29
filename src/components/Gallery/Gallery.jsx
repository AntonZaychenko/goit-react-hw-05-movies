
import { NavLink} from 'react-router-dom';
 const Gallery = ({movies}) => {
    return (
        <div>
            <ul>
               {movies.map(({id, title}) => (
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
export default Gallery