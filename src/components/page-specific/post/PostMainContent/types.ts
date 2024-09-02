import { PostType } from "@/types/Post";
import { Locale } from "@/i18n.config";

export interface PostMainContentDataProps {
  data: PostType
  lang: Locale
}