export interface Sermon {
  id: Key | null | undefined;
  title: string;
  speaker: string;
  date: string;
  message?: string;
  video?: string;
  image?: string;
  videos?: { link: string; social: string }[];
}
