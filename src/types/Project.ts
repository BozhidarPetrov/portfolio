import { Tag } from './Tag';

export interface Project {
  id: number;
  title: string;
  description_short: string;
  description_long: string;
  project_link: string;
  pictures: string[];
  tags: Tag[];
}
