import RouterList from "./router/RouterList";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();
const App = () => {
  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <RouterList />
      </QueryClientProvider>
    </div>
  );
};

export default App;
