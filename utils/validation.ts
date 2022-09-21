import is from 'is_js'

// TODO should use is_js https://www.npmjs.com/package/is_js
export function isEmpty(value: unknown) {
  return is.empty(value)
}

export function isEMailValid(email: string) {
  if (email === '') {
    return true
  }
  return is.email(email)
}

// TODO: handle multiple languages
export const ERROR_MESSAGES = {
  EMPTY: 'This field cannot be empty',
  EMAIL: 'This field should be an email',
  FAILED: 'The validation failed',
}
