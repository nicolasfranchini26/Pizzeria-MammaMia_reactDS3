import "./CardPizza.css";

const CardPizza = ({ name, price, ingredients, img }) => {
  return (
    <div className="Card-pizza">
      <img className={img} src={img} alt={name} />
      <div className="Titulo mb-3 m-lg-2">
        <h3>Pizza {name}</h3>
      </div>
      <hr />
      <p className="ingredients mb-1 text-center">Ingredientes:</p>
      {/* <hr />
      <p className="text-center">🍕 {ingredientes}</p> */}
      <ul>
        {ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}.</li>
        ))}
      </ul>
      <hr />
      <p className="text-center">
        <strong>${price.pizza}</strong>
      </p>

      <div className="btn">
        <button className="btn-vermas">Ver más 👀</button>
        <button className="btn-añadir">Añadir 🛒</button>
      </div>
    </div>
  );
};

export default CardPizza;
