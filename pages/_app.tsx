import { AppContext } from "next/app";
import { Provider } from "react-redux";
import withRedux from "next-redux-wrapper";
import { makeStore } from "../redux/store";
import GlobalStyle from "../GlobalStyle";

import Layout from "../components/Layout/Layout";

const customApp = props => {
  const { Component, pageProps, store } = props;
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <GlobalStyle></GlobalStyle>
    </Provider>
  );
};

customApp.getInitialProps = async ({ Component, ctx }: AppContext) => {
  return {
    pageProps: Component.getInitialProps
      ? await Component.getInitialProps(ctx)
      : {},
  };
};

export default withRedux(makeStore)(customApp);
