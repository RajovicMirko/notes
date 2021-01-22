import { BrowserRouter, Switch, Route } from "react-router-dom";
import Layout from "components/Layout";
import Notes from "pages/Notes";
import { NotesViewTypeProvider } from "contexts/NotesViewType";

const RouterView = () => {
  return (
    <Switch>
      <Route path="/" component={Notes} />
    </Switch>
  );
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NotesViewTypeProvider>
          <Layout>
            <RouterView />
          </Layout>
        </NotesViewTypeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
