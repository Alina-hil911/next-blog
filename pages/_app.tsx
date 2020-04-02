import App, { AppContext } from "next/app";
import { Provider } from "react-redux";
import withRedux from "next-redux-wrapper";
import { Store } from "redux";

import { makeStore } from "../redux/store";
import GlobalStyle from "../GlobalStyle";
import Layout from "../components/Layout/Layout";
interface Props {
  store: Store;
}

class MyApp extends App<Props> {
  static async getInitialProps({ Component, ctx }: AppContext) {
    return {
      pageProps: Component.getInitialProps
        ? await Component.getInitialProps(ctx)
        : {},
    };
  }

  render() {
    const { Component, pageProps, store } = this.props;

    return (
      <Provider store={store}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
        <GlobalStyle></GlobalStyle>
      </Provider>
    );
  }
}

export default withRedux(makeStore)(MyApp);
