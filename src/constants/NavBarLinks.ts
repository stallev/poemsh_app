import { RoutePath } from "./RoutePath";

export const NavBarLinksNames = {
  HomeLinkName: "Главная",
  AuthorsLinkName: "Авторы",
  PostsLinkName: "Произведения",
  AboutLinkName: "О нас",
  ShortPoemsLinkName: "Стихи",
  LongPoemsLinkName: "Поэмы",
  Login: "Войти",
  SignUp: "Регистрация",
};

export const MainNavBarLinks = {
  AuthorsLinkName: {
    link: RoutePath.Authors,
    label: NavBarLinksNames.AuthorsLinkName,
    children: {},
    isUnauthorised: false,
  },
  
  AboutUsLinkName: {
    link: RoutePath.AboutUs,
    label: NavBarLinksNames.AboutLinkName,
    children: {},
    isUnauthorised: false,
  },

  Posts: {
    link: "",
    label: NavBarLinksNames.PostsLinkName,
    isUnauthorised: false,
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

  Login: {
    link: RoutePath.Login,
    label: NavBarLinksNames.Login,
    children: {},
    isUnauthorised: true,
  },

  SignUp: {
    link: RoutePath.SignUp,
    label: NavBarLinksNames.SignUp,
    children: {},
    isUnauthorised: true,
  },
};
