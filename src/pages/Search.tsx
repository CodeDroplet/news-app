import { useState } from 'react';
import { useAppSelector } from '../store';
import useTopNews from '../hooks/useTopNews';
import { useDebounce } from 'use-debounce';
import ArticlesGrid from '../components/ArticlesGrid';
import { Article } from '../types';
import ArticleView from '../components/ArticleView';

const Search = () => {
	const country = useAppSelector((state) => state.country.current);
	const [search, setSearch] = useState<string>('');
	const [q] = useDebounce(search, 1000);

	const [activeArticle, setActiveArticle] = useState<Article | null>(null);

	const filteredNews = useTopNews({ country: country.code, q });

	return (
		<>
			{activeArticle ? (
				<ArticleView article={activeArticle} onBack={() => setActiveArticle(null)} />
			) : (
				<>
					<h1 className="font-display text-2xl font-bold text-black">
						Search top news from {country.name} by term
					</h1>
					<div>
						<input
							type="text"
							placeholder="Search"
							className="h-10 w-full md:w-5/12 px-4 bg-gray-200 focus:bg-gray-100 placeholder:text-gray-600 border-2 border-gray-700 outline-none"
							onChange={(e) => setSearch(e.target.value)}
							value={search}
						/>
					</div>
					<ArticlesGrid
						articles={filteredNews.data?.articles || []}
						isLoading={filteredNews.isLoading}
						error={
							filteredNews.data?.status === 'error'
								? filteredNews.data.message || 'Unknown error'
								: (filteredNews.isError && filteredNews.error?.toString()) || null
						}
						setActiveArticle={setActiveArticle}
					/>
				</>
			)}
		</>
	);
};

export default Search;
