export type NavBarItemModel = {
  value: string;
  label: string;
}

export type InstaFeed = {
  posts: InstaCard[],
  account: InstaAccount;
};

export type InstaAccount ={
  link: string;
  name: string;
}
export type InstaCard = {
  image: string;
  link: string;
  alt: string;
}