import React from "react";
import { connect } from "react-redux";

const CantidadPokemon = ({game_shop}) => {
  return (
    <React.Fragment>
      Unidades: {game_shop.pokemon}
      </React.Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    game_shop: state.game_shop,
  };
};

export default connect(mapStateToProps)(CantidadPokemon);
