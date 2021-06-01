export interface IBookProps {
    kind: string;
    id: string;
    etag: string;
    selfLink: string;
    volumeInfo: {
        title: string;
        authors: string[];
        publishedDate: string;
        description: string;
        imageLinks: {
            thumbnail: string;
        }
    }
    accessInfo: {
        pdf: {
            isAvailable: boolean;
            acsTokenLink: string;
        }
        webReaderLink: string;
    },
    saleInfo: Object;
    searchInfo: Object;
}

export interface BookProps {
    book: IBookProps;
}