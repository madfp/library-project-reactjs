export type authorValues = {
  name: string;
  lastName: string;
  birthDate: string;
  deathDate: string;
};

export type FormValues = {
  name: string;
  publisher: string;
  publicationDate: string;
  genre: string;
  authors: authorValues[];
  cover: string;
};
