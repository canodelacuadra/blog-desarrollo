import type { ImageMetadata } from 'astro';
import demoCartelera from '../assets/blog-github-pages.jpg';
import demoGestor from '../assets/blog-estructura.jpg';
import demoClima from '../assets/blog-astro.jpg';

export interface Project {
	title: string;
	description: string;
	date: string;
	order: string;
	image: ImageMetadata;
	tags: string[];
	demoUrl?: string;
	repoUrl?: string;
}

export const projects: Project[] = [
	{
		title: 'Cartelera de eventos',
		description:
			'Web estática que consume una API pública y filtra eventos por fecha y categoría. Incluye búsqueda y diseño adaptable a móvil.',
		date: 'jun 2026',
		order: '2026-06',
		image: demoCartelera,
		tags: ['Astro', 'JavaScript', 'CSS'],
		demoUrl: 'https://example.com/cartelera',
		repoUrl: 'https://github.com/canodelacuadra/cartelera',
	},
	{
		title: 'Gestor de tareas',
		description:
			'Aplicación para organizar tareas por proyectos, con filtros por prioridad y persistencia en el navegador.',
		date: 'mar 2026',
		order: '2026-03',
		image: demoGestor,
		tags: ['JavaScript', 'LocalStorage', 'HTML'],
		repoUrl: 'https://github.com/canodelacuadra/gestor-tareas',
	},
	{
		title: 'Consulta del tiempo',
		description:
			'Herramienta pequeña que muestra el pronóstico de varios días a partir de una API REST, con estados de carga y errores.',
		date: 'ene 2026',
		order: '2026-01',
		image: demoClima,
		tags: ['JavaScript', 'API REST', 'CSS'],
	},
].sort((a, b) => b.order.localeCompare(a.order));
