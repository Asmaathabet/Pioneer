import Document, {Html, Head, Main, NextScript} from 'next/document'

class MyDocument extends Document {
    render() {
        return (
        <Html lang="en">
            <Head>
                <meta name="description" content ="pioneer Store for products built by Next JS" />
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous"></link>
                <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
                <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" ></script>
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.min.js" ></script>
                <script src="https://kit.fontawesome.com/a076d05399.js"></script>
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
        )
    }
}

export default MyDocument;