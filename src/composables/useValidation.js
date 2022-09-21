// @ts-ignore
import { ERROR_MESSAGES, isEMailValid, isEmpty } from '../utils/validation.ts'
// import { refreshCookies } from '@/utils/cookieManagement.js'

export function validate(state, props, value) {
  console.log('VALIDATE', props)
  console.log('VALUE', isEmpty(value))
  // refreshCookies()
  state.valid = true
  state.errors = []
  if (props.required) {
    if (isEmpty(value)) {
      writeError(state, ERROR_MESSAGES.EMPTY)
    }
  }
  if (state.valid && props.type === 'email') {
    if (!isEMailValid(value)) {
      writeError(state, ERROR_MESSAGES.EMAIL)
    }
  }
}

function writeError(state, errorMessage) {
  state.valid = false
  state.errors.push(errorMessage)
}
