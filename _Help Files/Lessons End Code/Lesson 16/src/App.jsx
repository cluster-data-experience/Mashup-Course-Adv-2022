import { NebulaProvider } from './Context/Nebula';
import { RightFiltersProvider } from './Context/RightFilters';
import Layout from './Pages/Layout';

function App() {
  return (
    <NebulaProvider>
      <RightFiltersProvider>
        <Layout />
      </RightFiltersProvider>
    </NebulaProvider>
  );
}

export default App;
