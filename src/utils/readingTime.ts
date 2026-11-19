const WORDS_PER_MINUTE = 200;

/**
 * Estima los minutos de lectura de un texto en Markdown.
 * Elimina bloques de código, enlaces e imágenes antes de contar palabras.
 */
export function getReadingTime(body: string | undefined): number {
	if (!body) {
		return 1;
	}

	const text = body
		.replace(/```[\s\S]*?```/g, ' ')
		.replace(/`[^`]*`/g, ' ')
		.replace(/!\[[^\]]*\]\([^)]*\)/g, ' ')
		.replace(/\[([^\]]*)\]\([^)]*\)/g, '$1')
		.replace(/[#>*_~|-]/g, ' ');

	const words = text.split(/\s+/).filter(Boolean).length;

	return Math.max(1, Math.round(words / WORDS_PER_MINUTE));
}
