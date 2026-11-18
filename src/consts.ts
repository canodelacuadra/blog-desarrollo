// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = 'Pagina de canodelacuadra';
export const SITE_DESCRIPTION = 'Push from Sanse';

export function withBase(path: string): string {
	const base = import.meta.env.BASE_URL.replace(/\/$/, '');
	const normalizedPath = path.startsWith('/') ? path : `/${path}`;
	return `${base}${normalizedPath}` || '/';
}
