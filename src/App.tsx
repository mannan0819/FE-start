import Login from "./components/Login";
import './App.css'
import { QueryClient, QueryClientProvider } from "react-query";
import { Provider } from 'react-redux'
import { store } from "./store/store";

// Create a client
const queryClient = new QueryClient()

function App() {

  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <Login history={[]} />
      </QueryClientProvider>
    </Provider>
  )
}

export default App
