import { Switch, Route } from 'react-router-dom';
import { VIEWS } from './components/Routing/All';
import PrivateView from './components/Views/Controller/Private';
import PublicView from './components/Views/Controller/Public';

function App() {
  return (
    <>
      <Switch>
        {VIEWS.map( (view, i) => {

          return (
            <Route
              exact
              path={view.path}
              key={i}
              render={props => checkView(props, view)}
            />
          )

        })}
      </Switch>
    </>
  );
}

function checkView(props, elm) {
  if(elm.isProtected)
    return   <PrivateView {...elm} component={ <elm.component {...props} /> } />

  return <PublicView {...elm} component={ <elm.component {...props} /> } />
}

export default App;