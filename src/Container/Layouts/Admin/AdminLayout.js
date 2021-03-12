import React from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import AdminNavbar from './AdminNavbar';
import Session from '../../../Components/Session/Session';
import './AdminLayout.css';

const AdminLayout = () => {
  let { path } = useRouteMatch();
  return (
    <>
      <AdminNavbar />
      <div>
        <h1>Test Centers</h1>
      </div>

      <Switch>
        <Route
          exact
          path={path}
          render={() => <h3>INDEX Tescenter PAGE</h3>}
        ></Route>
        <Route
          exact
          path={`${path}/schedules`}
          render={() => <h3>Schedule PAGE</h3>}
        ></Route>
        <Route
          exact
          path={`${path}/all`}
          render={() => <h3>All Testcenter PAGE</h3>}
        ></Route>{' '}
        <Route
          exact
          path={`${path}/alerts`}
          render={() => <h3>Alerts PAGE</h3>}
        ></Route>{' '}
        <Route
          exact
          path={`${path}/:testcenterId/sessions`}
          render={() => <Session />}
        ></Route>
      </Switch>
    </>
  );
};

export default AdminLayout;
