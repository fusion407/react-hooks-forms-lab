import React, { useCallback, useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";
import { v4 as uuid } from "uuid";



function ShoppingList({ items, setItems }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [result, searchResult] = useState("");
  const [name, setName] = useState("");
  const [category, setCategory] = useState("Produce");



  function handleCategoryChange(event) {
    event.preventDefault();
    setSelectedCategory(event.target.value);
    console.log(event.target.value)
  }
  function handleSearchChange(event) {
    event.preventDefault();
    searchResult(event.target.value)
    console.log(event.target.value)
  }

  const onItemFormSubmit = useCallback((e) => {
    e.preventDefault();
    const newItem = {
      id: uuid(), // the `uuid` library can be used to generate a unique id
      name: name,
      category: category,
    };
    console.log(newItem)
    setItems(newItem)

  })
  function handleSetName(event) {
    event.preventDefault();
    setName(event.target.value)
    console.log(event.target.value)
  }
  function handleSetCategory(event) {
    event.preventDefault();
    setCategory(event.target.value)
    console.log(event.target.value)
  }


  const itemsToDisplay = items.filter((item) => {
    if (selectedCategory === "All") return true;
    return item.category === selectedCategory 
  });

  return (
    <div className="ShoppingList">
      <ItemForm setName={handleSetName} setCategory={handleSetCategory} onItemFormSubmit={onItemFormSubmit} />
      <Filter onCategoryChange={handleCategoryChange} onSearchChange={handleSearchChange} search={result}/>
      <ul className="Items">
        {itemsToDisplay
          .filter((item) => (
            item.name.toLowerCase().includes(result.toLowerCase())))
          .map((item) => (
            <Item key={item.id} name={item.name} category={item.category} />))
        }
      </ul>
    </div>
  );
}

export default ShoppingList;
