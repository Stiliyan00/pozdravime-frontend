import React, { useEffect, useRef } from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import './Page.scss'

const Page = ({ header = true, footer = true, children }) => {
  const ref = useRef();

  useEffect(() => {
    ref.current.scrollIntoView(true);
  }, []);

  return (
    <>
      {header && <Header />}
      <main ref={ref}>
        <section className="Page">
          {children}
        </section>
      </main>
      {footer && <Footer />}
    </>
  );
};

export default Page;