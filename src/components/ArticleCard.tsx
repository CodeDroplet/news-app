import { Article } from '../types';

type NewsCardProps = {
	article: Article;
	onReadMore: (article: Article) => void;
};

const ArticleCard: React.FC<NewsCardProps> = ({ article, onReadMore }) => {
	return (
		<div className="border border-gray-700 grid-cols-1 flex flex-col">
			<img
				src={article.urlToImage || 'https://via.placeholder.com/300/000000/FFFFFF/?text=Image%20Not%20Found'}
				alt={article.title}
				className="w-full aspect-video object-cover"
			/>
			<div className="py-2 px-3  flex-1">
				<h2 className="text-lg font-display font-semibold">{article.title}</h2>
				<p className="text-sm font-display">{article.description}</p>
			</div>
			<div className="flex justify-end">
				<button
					className="px-2 hover:bg-gray-400 transition-all cursor-pointer bg-gray-300"
					onClick={() => onReadMore(article)}
				>
					Read More
				</button>
			</div>
		</div>
	);
};

export default ArticleCard;
