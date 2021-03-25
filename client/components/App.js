import React from 'react';
import Table from './Table';
import Header from './Header';
import Route from './Route'
import Food from './Food'
import Reviewers from './Reviewers';

const App = () => {

  return (

    <div>
      <Header />

      <Route path="/">
        <Table />
      </Route>

      <Route path="/Reviewer_statistics">
        <Reviewers/>
      </Route>

      <Route path="/Food_statistics">
        <Food />
      </Route>
    </div>
  );
};



export default App;
