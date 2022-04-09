import { faAngleDoubleUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon as FAIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'gatsby';
import { throttle } from 'lodash';
import * as React from 'react';
import { useCallback, useEffect, useState } from 'react';
import GithubIcon from 'static/image/icons/github-icon.svg';
import InstagramIcon from 'static/image/icons/instagram-icon.svg';
import LinkedInIcon from 'static/image/icons/linkedin-icon.svg';
import 'styles/global.scss';

import './layout.scss';

interface LayoutPropsType {
  children: React.ReactNode;
  page: string;
}

function Layout(props: LayoutPropsType) {
  const { children, page } = props;
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
      <header>
        <Link to={'/'}>
          <div className="logo">Jeonghye</div>
        </Link>
        <div className="sns-links">
          <a href="">
            <img src={GithubIcon} />
          </a>
          <a href="" className="linkedin">
            <img src={LinkedInIcon} />
            <a href="">
              <img src={InstagramIcon} />
            </a>
          </a>
          <a href="">
            <span>Portfolio</span>
          </a>
        </div>
      </header>
      <nav>
        <Link to={'/dev'}>
          <ul className={page === 'Dev' ? 'clicked' : ''}>Dev</ul>
        </Link>
        <Link to={'/log'}>
          <ul className={page === 'Log' ? 'clicked' : ''}>Log</ul>
        </Link>
        <Link to={'/write'}>
          <ul className={page === 'Write' ? 'clicked' : ''}>Write</ul>
        </Link>
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
        <a href="https://github.com/jeonghye-choi">Jeonghye-Choi</a>
        <span>{` | Built with `}</span>
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </footer>
    </div>
  );
}

export default Layout;
