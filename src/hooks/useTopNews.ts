import { useQuery } from '@tanstack/react-query';
import { NewsResponse } from '../types';

type TopNewsParams = {
	country: string;
	q?: string;
};
const useTopNews = ({ country, q }: TopNewsParams) => {
	const newsQuery = useQuery<NewsResponse>({
		queryKey: ['news', country, 'top', q],
		queryFn: async () => {
			const url = `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${
				import.meta.env.VITE_NEWS_API_KEY
			}`;

			const response = await fetch(q ? `${url}&q=${q}` : url);
			return response.json();
		},
	});

	return newsQuery;
};

export default useTopNews;
