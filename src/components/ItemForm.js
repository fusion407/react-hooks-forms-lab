import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm({ setName, setCategory, onItemFormSubmit }) {

  
  return (
    <form onSubmit={(e) => onItemFormSubmit(e)} className="NewItem">
      <label>
        Name:
        <input onChange={setName} type="text" name="name" />
      </label>

      <label>
        Category:
        <select onChange={setCategory} name="category">
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
