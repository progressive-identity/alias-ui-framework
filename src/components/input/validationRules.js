const emailRules = [v => !!v || 'E-mail is required', v => /.+@.+/.test(v) || 'E-mail must be valid',]

const validationRules = {emailRules}

export default validationRules
