import { apiKey, BASE_URL, categories } from "../configs"
import { Article, ArticlesDTO } from "../models/article"

const useListViewModel = () => {
    return {
        fetchArticles: async (categoryId:number,pageNumber:number = 1):Promise<Article[]> => {
            const category = categories[categoryId];
            const articlesDto:ArticlesDTO = await fetch(`${BASE_URL}?apikey=${apiKey}&category=${category}&language=${'en'}&page=${pageNumber}`).then(res => {
                return res.json();
            })
            return articlesDto.results;
        }
    }
}

export default useListViewModel