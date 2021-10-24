export interface Film {
  id: string;
  title: string;
  original_title: string;
  original_title_romanised: string;
  image: string;
  movie_banner: string;
  description: string;
  director: string;
  producer: string;
  release_date: string;
  running_time: string;
  rt_score: string;
  people: string[];
  species: string[];
  locations: string[];
  vehicles: string[];
  url: string;
}

export interface Person {
  age: string;
  eye_color: string;
  films: string[];
  gender: string;
  hair_color: string;
  id: string;
  name: string;
  species: string;
  url: string;
}
