import { useAppSelector } from '../store';
import { Article } from '../types';
import { useState } from 'react';
import ArticleView from '../components/ArticleView';
import useTopNews from '../hooks/useTopNews';
import ArticlesGrid from '../components/ArticlesGrid';

const App = () => {
	const country = useAppSelector((state) => state.country.current);
	const [activeArticle, setActiveArticle] = useState<Article | null>(null);

	const topNews = useTopNews({ country: country.code });

	return (
		<>
			{activeArticle ? (
				<ArticleView article={activeArticle} onBack={() => setActiveArticle(null)} />
			) : (
				<>
					<h1 className="font-display text-2xl font-bold text-black">Top news from {country.name}</h1>
					<ArticlesGrid
						articles={topNews.data?.articles || []}
						isLoading={topNews.isLoading}
						error={
							topNews.data?.status === 'error'
								? topNews.data.message || 'Unknown error'
								: (topNews.isError && topNews.error?.toString()) || null
						}
						setActiveArticle={setActiveArticle}
					/>
				</>
			)}
		</>
	);
};

export default App;
