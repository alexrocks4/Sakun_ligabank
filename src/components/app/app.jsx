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
          <UnderConstructionScreen />
        </Route>
        <Route exact path={AppRoute.CREDIT}>
          <UnderConstructionScreen />
        </Route>
        <Route exact path={AppRoute.CONVERTER}>
          <ConverterScreen />
        </Route>
        <Route exact path={AppRoute.CONTACTS}>
          <UnderConstructionScreen />
        </Route>
        <Route exact path={AppRoute.QUESTION}>
          <UnderConstructionScreen />
        </Route>
        <Route exact path={AppRoute.LOGIN}>
          <UnderConstructionScreen />
        </Route>
      </Switch>
    </PageLayout>
  );
}

export default App;
