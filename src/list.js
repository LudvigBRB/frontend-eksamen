import React from "react";

export default function AllInfo(props) {
  const { recipes } = props;

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th>Navn</th>
            <th>Beskrivelse</th>
            <th>Forberedelsestid</th>
          </tr>
        </thead>
        <tbody>
          {recipes.map(recipe => (
            <tr key={recipe.id}>
              <td>{recipe.id}</td>
              <td>{recipe.description}</td>
              <td>{recipe.prep_time}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
