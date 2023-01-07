export type Article = {
    title:string,
    content:string,
    link:string,
    image_url:string,
    description:string,
    pubDate:string,
    creator:string[]
}

export type ArticlesDTO = {
    status: string,
    results: Article[]
}