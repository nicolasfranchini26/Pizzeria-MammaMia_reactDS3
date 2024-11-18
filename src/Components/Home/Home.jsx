import CardPizza from "../CardPizza/CardPizza";
import Header from "../Header/Header";
import { pizzas } from "../../pizzas";

const Home = () => {
  return (
    <>
      <Header />
      <div className="cardPizza d-flex justify-content-evenly flex-wrap m-2">
        <div className="row justify-content-center">
          {pizzas.map((pizza) => (
            <div key={pizza.id} className="col-12 col-md-4 col-lg-3 d-flex justify-content-center mb-3">
              <CardPizza
                name={pizza.name}
                price={pizza.price}
                ingredients={pizza.ingredients}
                img={pizza.img}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
