export interface Quote {
    _id: string;
    quoteText: string;
    quoteAuthor: string;
    quoteGenre: string;
    __v: number;
}

export interface Root {
    statusCode: number
    message: string
    pagination: Pagination
    totalQuotes: number
    data: Quote[]
}

export interface Pagination {
    currentPage: number
    nextPage: number
    totalPages: number
}