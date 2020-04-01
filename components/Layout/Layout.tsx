import Link from "next/link";

import { Header } from "./styled";

const Layout: React.FC = ({ children }) => {
  return (
    <div>
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
    </div>
  );
};

export default Layout;
