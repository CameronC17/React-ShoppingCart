var ItemStore = require('../stores/itemStore.js');

var ComponentTwo = React.createClass({

  componentDidMount: function() {

    ItemStore.on('update', this.handleDataChange);

  },

  handleDataChange : function() {

    this.setState({
      items: ItemStore.getItems()
    });

  },

  getInitialState: function() {

    return {
      items: ItemStore.getItems()
    }

  },

  render: function() {

    return (
      <div className="counter">
        There are {this.state.items.length} items in store.
      </div>
    )

  }

});

module.exports = ComponentTwo;
