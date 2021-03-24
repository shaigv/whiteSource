import React from 'react';
import Table from './Table';
import Header from './Header';
import Route from './Route'

const App = () => {

return (

  <div>
    <Header />

    <Route path="/">
      <Table />
    </Route>

    <Route path="/Reviewer_statistics">
      <div>/Cool graph</div>
    </Route>

    <Route path="/Food_statistics">
      <div>/Cool graph</div>
    </Route>
  </div>
);
};



export default App;
