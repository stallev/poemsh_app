import { RoutePath } from "./RoutePath";

export const NavBarLinksNames = {
  HomeLinkName: "Главная",
  AuthorsLinkName: "Авторы",
  PostsLinkName: "Произведения",
  AboutLinkName: "О нас",
  ShortPoemsLinkName: "Стихи",
  LongPoemsLinkName: "Поэмы",
};

export const MainNavBarLinks = {
  AuthorsLinkName: {
    link: RoutePath.Authors,
    label: NavBarLinksNames.AuthorsLinkName,
    children: {},
  },
  
  AboutUsLinkName: {
    link: RoutePath.AboutUs,
    label: NavBarLinksNames.AboutLinkName,
    children: {},
  },

  Posts: {
    link: "",
    label: NavBarLinksNames.PostsLinkName,
    children: {
      ShortPoemsLink: {
        link: RoutePath.Poems,
        label: NavBarLinksNames.ShortPoemsLinkName,
      },
      LongPoemsLink: {
        link: RoutePath.Poems,
        label: NavBarLinksNames.LongPoemsLinkName,
      },
    },
  },
};
