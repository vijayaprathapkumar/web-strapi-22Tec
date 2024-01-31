export default {
    //
    graphql: {
      config: {
        endpoint: '/graphql',
        shadowCRUD: true,
        playgroundAlways: false,
        depthLimit: 15,
        amountLimit: 100,
        apolloServer: {
          tracing: false,
        },
      },
    },
  };