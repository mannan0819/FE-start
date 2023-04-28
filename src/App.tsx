import Login from "./components/Login";
import './App.css'
import { QueryClient, QueryClientProvider } from "react-query";

// Create a client
const queryClient = new QueryClient()

function App() {

  return (
    <QueryClientProvider client={queryClient}>
    <Login  history={[]}/>
    </QueryClientProvider>
  )
}

export default App
