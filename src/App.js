import React from 'react';
import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom';
import AdminLayout from './Container/Layouts/Admin/AdminLayout';

function App() {
  return (
    <div className='App'>
      <Switch>
        <Route
          path='/testcenter'
          render={(props) => <AdminLayout {...props} />}
        />
        <Redirect from='/' to='/testcenter' />
      </Switch>
    </div>
  );
}

export default App;
