import { ERROR_MESSAGES, isEMailValid, isEmpty } from '../utils/validation'

type State = { valid: boolean; errors: string[] }
type Props = { [key: string]: any }
type Value = unknown
export type Rule = { (v: Value): string | boolean }

export function validate(state: State, props: Props, value?: Value) {
  // TODO: handle all input types
  state.valid = true
  state.errors = []
  if (props.required) {
    if (isEmpty(value)) {
      writeError(state, ERROR_MESSAGES.EMPTY)
    }
  }
  if (state.valid && props.type === 'email' && typeof value === 'string') {
    if (!isEMailValid(value)) {
      writeError(state, ERROR_MESSAGES.EMAIL)
    }
  }

  if (props.rules && props.rules.length > 0) {
    props.rules.forEach((rule: Rule) => validateRules(state, value, rule))
  }
}

function validateRules(state: State, value: Value, rule: Rule) {
  const errorMessage = rule(value)
  if (typeof errorMessage === 'string') {
    writeError(state, errorMessage)
  }
  if (errorMessage === false) {
    writeError(state, ERROR_MESSAGES.FAILED)
  }
}

function writeError(state: State, errorMessage: string) {
  state.valid = false
  state.errors.push(errorMessage)
}
