import is from 'is_js'

// The list of predefined rules available with is_js : https://github.com/arasatasaygin/is.js
const emailRules = v => is.email(v) || 'E-mail must be valid'
const urlRules = v => is.url(v) || 'URL must be valid'

const validationRules = {emailRules, urlRules}

export default validationRules
