export type Country = {
	name: string;
	code: string;
};

export type NewsResponse = {
	status: string;
	message?: string;
	totalResults: number;
	articles: Article[];
};

export type Article = {
	source: {
		id: string;
		name: string;
	};
	author: string;
	title: string;
	description: string;
	url: string;
	urlToImage: string;
	publishedAt: string;
	content: string;
};
