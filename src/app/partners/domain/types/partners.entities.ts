export type PartnerInstaFeed = {
  posts: PartnerInstaCard[],
  account: PartnerInstaAccount;
};

export type PartnerInstaAccount ={
  link: string;
  name: string;
}
export type PartnerInstaCard = {
  image: string;
  link: string;
  alt: string;
}