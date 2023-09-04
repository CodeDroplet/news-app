import ArticleCard from './ArticleCard';
import ErrorMessage from './ErrorMessage';
import { Article } from '../types';

type ArticlesGridProps = {
	articles: Article[];
	isLoading: boolean;
	error: string | null;
	setActiveArticle: (article: Article) => void;
};

const ArticlesGrid: React.FC<ArticlesGridProps> = ({ articles, isLoading, error, setActiveArticle }) => {
	return (
		<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
			{isLoading ? (
				[...Array(20)].map((_, idx) => (
					<div className="aspect-[5/4] bg-gray-300 animate-pulse" key={`skeleton-${idx}`} />
				))
			) : error ? (
				<ErrorMessage className="col-span-5" error={error || 'Unknown error'} />
			) : (
				<>
					{articles?.map((article, idx) => (
						<ArticleCard article={article} key={`article-${idx}`} onReadMore={setActiveArticle} />
					))}
				</>
			)}
		</div>
	);
};

export default ArticlesGrid;
