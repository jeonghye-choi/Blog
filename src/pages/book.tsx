import Layout from 'components/Layout';
import Seo from 'components/Seo';
import Book from 'containers/Book/Book';
import * as React from 'react';
import 'styles/page.scss';

function BookPage() {
  return (
    <Layout page="Book">
      <Seo title="Book" />
      <Book />
    </Layout>
  );
}

export default BookPage;
