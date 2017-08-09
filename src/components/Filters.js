import React from 'react';

class Filters extends React.Component {
  constructor() {
    super();
    this.state = {
      type: 'all'
    }
  }

  filterChanged = (event) => {
    event.persist()
    console.log(event.target.value)
    this.setState({
      type: event.target.value
    }, ()=>{
      console.log(`Filter type is ${this.state.type}`)
      this.props.onChangeType(this.state.type)
    })
  }

  fetchPets = () => {
    //make fetch request using this.state.filter to form url
    let url = `/api/pets?type=${this.state.type}`
    if (this.state.type === 'all'){
      url = `/api/pets`
    }
    console.log('fetching ' + url)
    fetch(url).then( (response)=> {
      return response.json()
    }).then((data) => {
      this.props.onFindPetsClick(data)
    })


  }

  render() {
    return (
      <div className="ui form">
        <h3>Animal type</h3>
        <div className="field">
          <select name="type" id="type" onChange={this.filterChanged}>
            <option value="all">All</option>
            <option value="cat">Cats</option>
            <option value="dog">Dogs</option>
            <option value="micropig">Micropigs</option>
          </select>
        </div>

        <div className="field">
          <button className="ui secondary button" onClick={this.fetchPets}>Find pets</button>
        </div>
      </div>
    );
  }
}

export default Filters;
