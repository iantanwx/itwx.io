import { promises as fs } from 'fs';
import { resolve } from 'path';

export const getFiles = async (dir: string) => {
  const entries = await fs.readdir(dir, { withFileTypes: true })
  return entries.filter((ent) => !ent.isDirectory()).map((file) => resolve(dir, file.name));
}