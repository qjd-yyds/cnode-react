import { Layout } from 'antd';
import { Switch, Route } from 'react-router';
import Header from './components/Header';
import Footer from './components/Footer';
import { route } from './router';
function App() {
  return (
    <Layout>
      <Header />
      <Layout.Content>
        <div className="wrap">
          <Switch>
            {route.map((itemData, index) => {
              return (
                <Route
                  key={index}
                  path={itemData.path}
                  exact={itemData.exact}
                  render={(props) => itemData.render(props)}
                />
              );
            })}
          </Switch>
        </div>
      </Layout.Content>
      <Footer />
    </Layout>
  );
}

export default App;
