import { ERROR_MESSAGES, isEMailValid, isEmpty } from '../../utils/validation'

export function validate(state, props, value) {
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

  if (props.rules && props.rules.length > 0) {
    props.rules.forEach((rule) => validateRules(state, value, rule))
  }
}

function validateRules(state, value, rule) {
  const errorMessage = rule(value)
  if (typeof errorMessage === 'string') {
    writeError(state, errorMessage)
  }
  if (errorMessage === false) {
    writeError(state, ERROR_MESSAGES.FAILED)
  }
}

function writeError(state, errorMessage) {
  state.valid = false
  state.errors.push(errorMessage)
}
