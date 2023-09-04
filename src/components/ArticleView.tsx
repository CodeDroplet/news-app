import { Article } from '../types';

type ArticleViewProps = {
	article: Article;
	onBack: () => void;
};

const ArticleView: React.FC<ArticleViewProps> = ({ article, onBack }) => {
	return (
		<div className="flex flex-col gap-3">
			<h1 className="font-display text-2xl font-bold text-black">{article.title}</h1>
			<img
				src={article.urlToImage || 'https://via.placeholder.com/300/000000/FFFFFF/?text=Image%20Not%20Found'}
				alt={article.title}
				className="w-full aspect-[2.5/1] object-cover"
			/>
			<p className="text-lg font-display">{article.content}</p>
			<div>
				<button className="bg-gray-300 px-4 py-2 inline transition-all hover:bg-gray-400" onClick={onBack}>
					Back to list
				</button>
			</div>
		</div>
	);
};

export default ArticleView;
