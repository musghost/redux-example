import React, {Component, PropTypes} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as Actions from '../actions/index';

class Curso extends Component {

  componentWillMount() {
    console.log('me voy a montar');
  }

  componentDidMount() {
    this.props.actions.traerPersonas();
  }

  handleClick = () => {
    this.props.actions.incrementar();
  }

  render() {
    return (
      <div>
        <h1>Me han clickeado {this.props.numero} veces</h1>
        <button onClick={this.handleClick}>Sumar 1</button>
        <p>{this.props.catalogos.error}</p>
        {this.props.catalogos.loading ? 'Cargando...' : null}
        {this.props.catalogos.personas.map((person, index) => {
          return (
            <ul key={index}>
              <li>Nombre: {person.name}</li>
              <li>Genero: {person.gender}</li>
              <li>Cumpleanos: {person.birth_year}</li>
              <li>Color de ojos: {person.eye_color}</li>
              <li>Color de piel: {person.skin_color}</li>
            </ul>
          );
        })}
      </div>
    );
  }
}
Curso.propTypes = {
  numero: PropTypes.number.isRequired,
  actions: PropTypes.object.isRequired,
  catalogos: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    numero: state.numero,
    catalogos: state.catalogos
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Curso);
