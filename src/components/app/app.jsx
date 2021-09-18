import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { AppRoute } from '../../const';
import UnderConstructionScreen from '../../under-construction-screen/under-construction-screen';
import ConverterScreen from '../converter-screen/converter-screen';
import PageLayout from '../page-layout/page-layout';

function App() {
  return (
    <PageLayout>
      <Switch>
        <Route exact path={AppRoute.ROOT}>
          <Redirect to={AppRoute.CONVERTER} />
        </Route>
        <Route exact path={AppRoute.SERVICES}>
          <Redirect to={AppRoute.UNDER_CONSTRUCTION} />
        </Route>
        <Route exact path={AppRoute.CREDIT}>
          <Redirect to={AppRoute.UNDER_CONSTRUCTION} />
        </Route>
        <Route exact path={AppRoute.CONVERTER}>
          <ConverterScreen />
        </Route>
        <Route exact path={AppRoute.CONTACTS}>
          <Redirect to={AppRoute.UNDER_CONSTRUCTION} />
        </Route>
        <Route exact path={AppRoute.QUESTION}>
          <Redirect to={AppRoute.UNDER_CONSTRUCTION} />
        </Route>
        <Route exact path={AppRoute.LOGIN}>
          <Redirect to={AppRoute.UNDER_CONSTRUCTION} />
        </Route>
        <Route exact path={AppRoute.UNDER_CONSTRUCTION}>
          <UnderConstructionScreen />
        </Route>
      </Switch>
    </PageLayout>
  );
}

export default App;
