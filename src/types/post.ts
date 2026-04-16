export interface Post {
  title: string;
  author: string;
  date: string;
  content?: string;
  image?: string;
  video?: string;
  socials?: { url: string; platform: string }[];
  tags?: string[];
}