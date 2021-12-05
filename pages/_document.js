import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang='fr'>
        <Head>
          <link
            href='https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap'
            rel='stylesheet'
          />
          <link
            href='https://fonts.googleapis.com/css2?family=Lobster+Two&display=swap'
            rel='stylesheet'
          />
          <meta
            name='description'
            content='conciergerie saint gervais gestion de vos locations en courte duree'
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
