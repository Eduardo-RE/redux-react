import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";
// import CantidadPokemon from "./components/CantidadPokemon";
// import CompraPokemon from "./components/CompraPokemon";
import { Provider } from "react-redux";
import store from "./redux/store";
import CantidadPokemonHook from "./components/CantidadPokemonHook";
import CompraPokemonHook from "./components/CompraPokemonHook";
import BuscadorPokemon from "./components/buscador/BuscadorPokemon";
import ResultadoPokemon from "./components/buscador/ResultadoPokemon";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <div className="row">
          <div className="col-12">
            <div className="card mt-5" style={{ maxWidth: "370px" }}>
              <div className="row no-gutters">
                <div className="col-4">
                  <img
                    src={require("./img/charizard.jpg")}
                    alt="pokemon"
                    className="card-img"
                  />
                </div>
                <div className="col-8">
                  <div className="crad-body">
                    <div className="card-title h3 text-center">
                      <CantidadPokemonHook />
                    </div>
                    <CompraPokemonHook />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 mt-4 border-top pt-3">
            <BuscadorPokemon />
          </div>
          <div className="col-12">
            <ResultadoPokemon />
          </div>
        </div>
      </div>
    </Provider>
  );
}

export default App;
