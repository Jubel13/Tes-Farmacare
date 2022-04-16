function Pokemon({ pokemon }) {
  return (
    <>
      <tr>
        <td>{pokemon.name}</td>
        <td>{pokemon.stock}</td>
      </tr>
    </>
  );
}

export default Pokemon;
