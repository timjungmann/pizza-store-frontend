import React from 'react'

export default function PizzaItem({pizza, count}) {

  function capitalizeFirstLetter(item){
    const newItem = item.toLowerCase()
    .split(' ')
    .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
    .join(' ');
    return newItem;
  }

  return (
    <div key="" className="pizza-list-item">
      <div className="pizza-number">
          <h3>{count < 9 ? "0"+(count+1)+"." : (count+1)+"."}</h3>
        </div>
        <div className="pizza-image">
          <img src={pizza.image} alt="Pizza Image" />
        </div>
        <div className="pizza-details">
          <h3>{capitalizeFirstLetter(pizza.name)}</h3>
          <hr/>
          <p className="pizza-desc">{capitalizeFirstLetter(pizza.description)}</p>
          <p><b>Ingredients:</b> {capitalizeFirstLetter(pizza.ingredients.join(", "))}</p>
        </div>
        <div className="pizza-menu">
          <div className="price">
            <h4>{pizza.price} €</h4>
          </div>
          <div className="order">
            <button style={{
              borderTopLeftRadius: Math.ceil(Math.random()*(100-60)+60),
              borderTopRightRadius: Math.ceil(Math.random()*(100-60)+60),
              borderBottomLeftRadius: Math.ceil(Math.random()*(100-60)+60),
              borderBottomRightRadius: Math.ceil(Math.random()*(100-60)+60)
              }}>Order</button>
          </div>
        </div>
      </div>
  )
}