export type FormValues = {
  name: string;
  publisher: string;
  publicationDate: string;
  genre: string;
  authors: {
    name: string;
    lastName: string;
    birthDate: string;
    deathDate: string;
  }[];
  cover: string;
};
