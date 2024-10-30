export const RoutePath = {
  Home: '/',
  Authors: '/authors',
  Poems: '/posts/poems',
  CreatePost: '/posts/new-post',
  UpdatePost: '/posts/update-post',
  AboutUs: '/about-us',
  Login: '/login',
  SignUp: '/register',
  NotFoundPage: '/404',
  Profile: '/profile',
};

export const PublicRoutes = [
  RoutePath.Home,
  RoutePath.Authors,
  RoutePath.AboutUs,
  RoutePath.NotFoundPage,
]

export const PrivateRoutes = [
  RoutePath.Profile,
  RoutePath.CreatePost,
  RoutePath.UpdatePost,
]

export const AuthRoutes = [
  RoutePath.Login,
  RoutePath.SignUp,
]
