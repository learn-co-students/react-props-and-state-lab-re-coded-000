const React = require('react');

class Filters extends React.Component {
  constructor() {
    super();
    this.callback=this.callback.bind(this)
  }
  callback(e){
     this.props.onChangeType(e.target.value);
  }
  render() {
    return (
      <div className="ui form">
        <h3>Animal type</h3>
        <div className="field">
          <select name="type" id="type" onChange={this.callback} value={this.props.filters.type} >
            <option value="all">All</option>
            <option value="cat">Cats</option>
            <option value="dog">Dogs</option>
            <option value="micropig">Micropigs</option>
          </select>
        </div>

        <div className="field">
          <button className="ui secondary button" onClick={this.props.onFindPetsClick} >Find pets</button>
        </div>
      </div>
    );
  }
}

module.exports = Filters;
