import { promises as fs } from 'fs';
import { resolve } from 'path';
import type { RequestHandler } from '@sveltejs/kit';
import parseFrontMatter from 'gray-matter';
import { getFiles } from '../util/fs';

const POST_DIR = resolve(process.cwd(), 'src/routes/posts');

export const get: RequestHandler = async () => {
	const files = await fs.readdir(POST_DIR, { withFileTypes: true });
	const posts = await Promise.all(
		files
			.filter((item) => item.isDirectory())
			.map(async (dir) => {
				const files = await getFiles(resolve(POST_DIR, dir.name));
				const file = files.find((f) => f.endsWith('index.svx'));
				const bz = await fs.readFile(file);
				const { content, data } = parseFrontMatter(bz, { excerpt: true });
				const { title, excerpt } = data;
				return {
					slug: dir.name,
					title,
					excerpt: !!excerpt ? excerpt : content.split('\n').slice(0, 4).join(' ')
				};
			})
	);

	return {
		body: { posts }
	};
};
