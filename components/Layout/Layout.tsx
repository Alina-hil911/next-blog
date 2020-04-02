import Link from "next/link";

import { Header, Footer } from "./styled";

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Header>
        <nav>
          <Link href="/">
            <a>Home</a>
          </Link>
          <Link href="/posts/new">
            <a>Create a new post</a>
          </Link>
        </nav>
      </Header>
      {children}
      <Footer>
        <p>{new Date().getFullYear()}</p>
      </Footer>
    </>
  );
};

export default Layout;
