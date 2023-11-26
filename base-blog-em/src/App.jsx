import { Posts } from "./Posts";

import { QueryClient, QueryClientProvider } from "react-query";
<<<<<<< HEAD
import { ReactQueryDevtools } from "react-query/devtools";
=======
>>>>>>> 7c0ab87b382f04c031a0f7d2587a08c1b43495b1

import "./App.css";

const queryClient = new QueryClient();

function App() {
  return (
    // provide React Query client to App
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <h1>Blog Posts</h1>
        <Posts />
      </div>
<<<<<<< HEAD
      <ReactQueryDevtools />
=======
>>>>>>> 7c0ab87b382f04c031a0f7d2587a08c1b43495b1
    </QueryClientProvider>
  );
}

export default App;
