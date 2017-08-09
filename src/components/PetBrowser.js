import React from 'react';

import Pet from './Pet';

class PetBrowser extends React.Component {


  makePets = () => {
    // debugger
    return this.props.pets.map((pet, index) => {
      return <Pet pet={pet} key={index} onAdoptPet={this.props.onAdoptPet} adoptedPets={this.props.adoptedPets} />
    })
  }

  render() {
    return (
      <div className="ui cards">
        {this.makePets()}
      </div>
    );
  }
}

export default PetBrowser;
