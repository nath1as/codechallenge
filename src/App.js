import {
  QueryClient,
  QueryClientProvider,
} from "react-query";
import GlobalStyle from "./global/style";
import Main from "./Main";

const App = () => {
  const queryClient = new QueryClient();
  return (
    <>
      <GlobalStyle />
      <QueryClientProvider client={queryClient}>
        <Main />
      </QueryClientProvider>
    </>
  );
};

export default App;
