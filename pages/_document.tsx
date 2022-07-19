import React from 'react';
import Document, {Head, Html, NextScript, Main, DocumentContext, DocumentInitialProps} from "next/document";

class _Document extends Document {

    static async getInitialProps(ctx: DocumentContext):Promise<DocumentInitialProps> {
        const initialProps = await Document.getInitialProps(ctx);
        return {...initialProps};
    }

    render():JSX.Element {
        return (
            <Html lang='ru'>
                <Head />
                <body>
                <Main/>
                <NextScript/>
                </body>
            </Html>
        );
    }
}

export default _Document;