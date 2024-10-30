import { PostFormFields } from "../enums/PostFormEnums";

export const PostFormDefaultValues = {
  [PostFormFields.Title]: '',
  [PostFormFields.Category]: '',
  [PostFormFields.Description]: '',
  [PostFormFields.ImageURL]: '',
}

export const PostTitleParams = {
  MinLength: 2,
  MaxLength: 150,
}

export const PostContentParams = {
  MinLength: 6,
}