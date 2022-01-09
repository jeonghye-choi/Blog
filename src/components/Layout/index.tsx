import { faAngleDoubleUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon as FAIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'gatsby';
import { throttle } from 'lodash';
import React, { useCallback, useEffect, useState } from 'react';
import 'styles/global.scss';

import './layout.scss';

interface LayoutPropsType {
  children: React.ReactNode;
}

function Layout(props: LayoutPropsType) {
  const { children } = props;
  const [isTop, setIsTop] = useState(true);

  const setTop = useCallback(
    throttle(() => setIsTop(window.scrollY < window.innerHeight / 2), 250),
    [],
  );

  useEffect(() => {
    document.addEventListener('scroll', setTop);
    console.log('is scrolling');
    return () => {
      document.removeEventListener('scroll', setTop);
    };
  }, []);

  return (
    <div className="layout-wrap">
      <nav>
        <Link to="/">
          <div className="nav-name">Jeonghye-Choi</div>
        </Link>
        <div className="nav-item-wrap">
          <Link to="/write">
            <div className="nav-item pocus">Write</div>
          </Link>
          <Link to="/draw">
            <div className="nav-item">Draw</div>
          </Link>
          <Link to="/log">
            <div className="nav-item">Log</div>
          </Link>
          <Link to="/dev">
            <div className="nav-item">Dev</div>
          </Link>
        </div>
      </nav>
      <main>{children}</main>
      <div
        id="top"
        style={{
          opacity: isTop ? '0' : '1',
          pointerEvents: isTop ? 'none' : 'all',
        }}
        onClick={() => {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}>
        <FAIcon icon={faAngleDoubleUp} />
      </div>
      <footer>
        <span>{`© ${new Date().getFullYear()} | Theme by `}</span>
        <a href="https://github.com/jeonghye-choi">JeonghyeChoi</a>
        <span>{` | Built with `}</span>
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </footer>
    </div>
  );
}

export default Layout;
