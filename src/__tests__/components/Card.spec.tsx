import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import Cards from '../../components/Cards';

const mockedHandleFavorite = jest.fn();
const mockedHandleDetails = jest.fn();

jest.mock('../../hooks/provider', () => {
    return {
        useProvider: () => ({
            handleFavorite: mockedHandleFavorite,
            handleRecent: mockedHandleDetails,
        })
    }
})

const book = {
    kind: "books#volume",
    id: "qoyUDwAAQBAJ",
    etag: "i5QNNR7xydQ",
    selfLink: "https://www.googleapis.com/books/v1/volumes/qoyUDwAAQBAJ",
    volumeInfo: {
        title: "Análise Preditiva Para Leigos",
        subtitle: "Tradução da 2a Edição",
        authors: ["Anasse Bari", "Mohamed Chaouchi", "Tommy Jung"],
        publisher: "Alta Books Editora",
        publishedDate: "2019-04-24",
        description: "Hoje, os negócios dependem do uso eficiente dos dados para prever tendências e vendas. A análise preditiva é uma ferramenta que torna isso realidade, e este livro mostra como usá-la e desvenda suas ciladas. Você aprenderá a preparar e processar seus dados, criar metas, construir um modelo preditivo, conquistar o apoio de todos os envolvidos e muito mais", "industryIdentifiers": [{ "type": "ISBN_13", "identifier": "9788550809007" }, { "type": "ISBN_10", "identifier": "8550809004" }], "readingModes": { "text": false, "image": true }, "pageCount": 464, "printType": "BOOK", "categories": ["Business & Economics"], "maturityRating": "NOT_MATURE", "allowAnonLogging": true, "contentVersion": "preview-1.0.0", "panelizationSummary": { "containsEpubBubbles": false, "containsImageBubbles": false }, "imageLinks": { "smallThumbnail": "http://books.google.com/books/content?id=qoyUDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api", "thumbnail": "http://books.google.com/books/content?id=qoyUDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api" }, "language": "pt", "previewLink": "http://books.google.com.br/books?id=qoyUDwAAQBAJ&printsec=frontcover&dq=Analise&hl=&as_brr=5&cd=72&source=gbs_api", "infoLink": "https://play.google.com/store/books/details?id=qoyUDwAAQBAJ&source=gbs_api", "canonicalVolumeLink": "https://play.google.com/store/books/details?id=qoyUDwAAQBAJ"
    },
    saleInfo: {
        country: "BR",
        saleability: "FOR_SALE",
        isEbook: true,
        listPrice: {
            amount: 70.32,
            currencyCode: "BRL"
        },
        retailPrice: {
            amount: 70.32,
            currencyCode: "BRL"
        },
        buyLink: "https://play.google.com/store/books/details?id=qoyUDwAAQBAJ&rdid=book-qoyUDwAAQBAJ&rdot=1&source=gbs_api",
        offers: [{
            finskyOfferType: 1,
            listPrice: { "amountInMicros": 70320000, "currencyCode": "BRL" },
            retailPrice: { "amountInMicros": 70320000, "currencyCode": "BRL" },
            giftable: true
        }]
    },
    accessInfo: {
        country: "BR", "viewability": "PARTIAL", "embeddable": true, "publicDomain": false, "textToSpeechPermission": "ALLOWED",
        epub: { "isAvailable": false },
        pdf: {
            "isAvailable": true,
            "acsTokenLink": "http://books.google.com.br/books/download/An%C3%A1lise_Preditiva_Para_Leigos-sample-pdf.acsm?id=qoyUDwAAQBAJ&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
        },
        webReaderLink: "http://play.google.com/books/reader?id=qoyUDwAAQBAJ&hl=&as_brr=5&printsec=frontcover&source=gbs_api",
        accessViewStatus: "SAMPLE",
        quoteSharingAllowed: false
    },
    searchInfo: {
        "textSnippet": "Hoje, os negócios dependem do uso eficiente dos dados para prever tendências e vendas."
    }
}


describe('Cards component', () => {
    it('should be able to render card component', () => {
        const cards = render(<Cards book={book} />);
        expect(cards).toBeTruthy();
    });

    it('should be able to handle favorites', async () => {
        const { getByTestId } = render(<Cards book={book} />);
        const favoriteButton = getByTestId('handleFavoriteButton');

        fireEvent.click(favoriteButton);

        await waitFor(() => {
            expect(mockedHandleFavorite).toHaveBeenCalled();
        })
    });

    it('should be able to handle details', async () => {
        const { getByTestId } = render(<Cards book={book} />);
        const recentButton = getByTestId('handleDetails');

        fireEvent.click(recentButton);

        await waitFor(() => {
            expect(mockedHandleDetails).toHaveBeenCalled();
        })
    });



});