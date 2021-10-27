import { Switch, Route } from 'react-router';
import { route } from './router';
function App() {
  return (
    <Switch>
      {route.map((itemData, index) => {
        return (
          <Route key={index} path={itemData.path} exact={itemData.exact} render={(props) => itemData.render(props)} />
        );
      })}
    </Switch>
  );
}

export default App;
