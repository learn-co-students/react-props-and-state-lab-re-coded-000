const React = require('react');

const Filters = require('./Filters');
const PetBrowser = require('./PetBrowser');

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
    this.fetchPets=this.fetchPets.bind(this)
    this.handleChangeFilterType=this.handleChangeFilterType.bind(this)
    this.handleAdoptPet=this.handleAdoptPet.bind(this)

  }
  fetchPets() {
    var url ;
    url = this.state.filters.type !== 'all' ?  `/api/pets?type=${this.state.filters.type}` : '/api/pets';
    fetch(url)
      .then(res => res.json())
      .then(pets => this.setState({ pets }));
  }

  handleChangeFilterType(type) {
    this.setState({
      filters: Object.assign({}, this.state.filters, {
        type: type,
      })
    });
  }
    handleAdoptPet(petId) {
    this.setState({
      adoptedPets: [...this.state.adoptedPets, petId],
    });
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
              <Filters filters={this.state.filters}
                       onChangeType={this.handleChangeFilterType}
                       onFindPetsClick={this.fetchPets}
              />
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} adoptedPets={this.state.adoptedPets} onAdoptPet={this.handleAdoptPet} />
            </div>
          </div>
        </div>
      </div>
    );
  }

}

module.exports = App;
