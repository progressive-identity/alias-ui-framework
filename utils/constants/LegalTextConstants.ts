export const routeName = 'LegalDocuments'

export const pagesRedirection = Object.freeze([
  {
    name: routeName,
    label: 'Toto',
    params: {
      slug: 'privacy-policy',
    },
    type: 'privacyPolicy',
  },
  {
    name: routeName,
    label: 'Toto',
    params: {
      slug: 'legal-notice',
    },
    type: 'legalNotice',
  },
  {
    name: routeName,
    label: 'Toto',
    params: {
      slug: 'terms-services',
    },
    type: 'generalTermsAndConditions',
  },
])
