import Login from "./components/Login";
import './App.css'
import { QueryClient, QueryClientProvider } from "react-query";
import { Provider } from 'react-redux'
import { store } from "./store/store";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PrivateRoutes from "./PrivateRoutes";
import { UsersList } from "./components/Users";

// Create a client
const queryClient = new QueryClient()

function App() {

  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login />}></Route>
            <Route element={<PrivateRoutes />}>
              <Route path="/users" element={<UsersList />}></Route>
              <Route path="/" element={<Login />}></Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </Provider >
  )
}

export default App
