export interface BookProps {
  id: number;
  name: string;
  author: BookAuthors[];
  genre: string;
  publisher: string;
  cover: string;
}

export interface BookAuthors {
  name: string;
  birthDate: string;
  deathDate: string;
}
