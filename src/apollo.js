import ApolloClient, {createNetworkInterface} from "apollo-client";

const networkInterface = createNetworkInterface({
  uri: 'http://localhost:8000/graphql'
});

networkInterface.use([{
  applyMiddleware(req, next){
    if (!req.options.headers) {
      req.options.headers = {};
    }
    req.options.headers.authorization = localStorage.getItem('token', '');
    next();
  }
}]);

export const client = new ApolloClient({
  networkInterface,
});
