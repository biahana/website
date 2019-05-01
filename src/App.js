import React from 'react';
import Home from './Home';
import Contact from './Contact';
import Resume from './Resume';
import { BrowserRouter, Route, Link } from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="w3-padding-32">
          <div>
            <Route exact path="/" component={Home} />
            <Route path="/contact/" component={Contact} />
            <Route path="/resume/" component={Resume} />
          </div>
        </div>
      </div>
    );
  }
}
export default App;
