import React from 'react';
import DatTable from './components/DatTable';
import data from './data/bj.json'


class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      data: data
    }
    }
    render() {

      return (
        <div
          className="page-container"
        >
          <DatTable
            data={this.state.data}
            sortBy={this.sortBy}
          />
        </div>
      );
    }
  }

export default App
