import { useEffect, useState } from "react";
import { Article } from "../models/article";
import useListViewModel from "../view_models/list_view_model";
import {useNavigation} from '@react-navigation/native';
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { HomeStackParams } from "../pages/home/home";

type Props = NativeStackNavigationProp<HomeStackParams, 'List'>;

const useListController = () => {

    const { fetchArticles } = useListViewModel();

    const [articles, setArticles] = useState<Article[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const [category, setCategory] = useState<number>(0);
    const [pageNumber, setPageNumber] = useState<number>(1)

    const navigation = useNavigation<Props>();


    useEffect(() => {
        setArticles([])
        getArticles();
    }, [category])

    const getArticles = async () => {
        setIsLoading(true)
        const articles = await callFetchArticles();
        setArticles(articles);
        setIsLoading(false)
    }

    const callFetchArticles = async (): Promise<Article[]> => {
        const articles = await fetchArticles(category, pageNumber).then((articles) => articles);
        return articles;
    }

    const setCategoryTo = (categoryIndex: number) => {
        setCategory(categoryIndex)
    }

    const loadMore = async () => {
        setPageNumber((pageNumber) => pageNumber+1);
        setIsLoading(true);
        const articles = await callFetchArticles();
        setArticles((current) => [...current, ...articles]);
        setIsLoading(false);
    }

    const navigateTo = (article:Article) => {
        navigation.navigate('Details',{article});
    }

    return {
        category,
        setCategoryTo,
        articles,
        isLoading,
        loadMore,
        navigateTo
    };

}

export default useListController;