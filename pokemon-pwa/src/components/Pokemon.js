import { Link } from "react-router-dom";

function Pokemon({ pokemon }) {
  return (
    <>
      <tr>
        <td>
          <Link to={`/pokemon/${pokemon.id}`}>{pokemon.name}</Link>
        </td>
        <td>{pokemon.stock} pcs</td>
      </tr>
    </>
  );
}

export default Pokemon;
