import React from 'react';

import Filters from './Filters';
import PetBrowser from './PetBrowser';

class App extends React.Component {
  constructor() {
    super();
    
    this.state = {
      pets: [],
      adoptedPets: [],
      filters: {
        type: 'all',
      }
    };

    this.setInitialPetsState()
  }

  setInitialPetsState = () => {
    let url = `/api/pets`
    fetch(url).then( (response)=> {
      return response.json()
    }).then((data) => {
      this.setState({
        pets: data
      })
    })
  }

  onChangeType = (value) => {
    this.setState({
      filters: {
        type: value
      }
    }, ()=>console.log(`changed app type to ${this.state.filters.type}`))
  }

  getPets = (petsArr) => {
    console.log(petsArr)
    this.setState({
      pets: petsArr
    })
  }

  onAdoptPet = (id) => {
    this.setState({
      adoptedPets: [...this.state.adoptedPets, id]
    },()=>console.log(this.state.adoptedPets))

  }
  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters onChangeType={this.onChangeType} onFindPetsClick={this.getPets}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.onAdoptPet} adoptedPets={this.state.adoptedPets}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
