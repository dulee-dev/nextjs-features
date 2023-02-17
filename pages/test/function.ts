import { REGEX } from "./data/regex"

export const errorMsgHandler = (input: string) => {
  if (input.length > 20 ) return "너무김"
  if (!REGEX.EMAIL.test(input)) return "이메일 양식 오류"
  return null
}