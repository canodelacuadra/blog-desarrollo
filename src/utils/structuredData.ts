import { AUTHOR_NAME, AUTHOR_URL, SITE_TITLE } from '../consts';

const CONTEXT = 'https://schema.org';

interface BlogPostingParams {
	title: string;
	description: string;
	imageUrl: string;
	url: string;
	pubDate: Date;
	updatedDate?: Date;
}

export function getBlogPostingSchema({
	title,
	description,
	imageUrl,
	url,
	pubDate,
	updatedDate,
}: BlogPostingParams): Record<string, unknown> {
	return {
		'@context': CONTEXT,
		'@type': 'BlogPosting',
		headline: title,
		description,
		image: [imageUrl],
		mainEntityOfPage: url,
		datePublished: pubDate.toISOString(),
		...(updatedDate ? { dateModified: updatedDate.toISOString() } : {}),
		inLanguage: 'es',
		author: {
			'@type': 'Person',
			name: AUTHOR_NAME,
			url: AUTHOR_URL,
			sameAs: [AUTHOR_URL],
		},
		publisher: {
			'@type': 'Organization',
			name: SITE_TITLE,
		},
	};
}

export function getPersonSchema(description: string): Record<string, unknown> {
	return {
		'@context': CONTEXT,
		'@type': 'Person',
		name: AUTHOR_NAME,
		url: AUTHOR_URL,
		sameAs: [AUTHOR_URL],
		jobTitle: 'Desarrollador web',
		description,
		knowsAbout: ['Astro', 'HTML', 'CSS', 'JavaScript'],
	};
}
