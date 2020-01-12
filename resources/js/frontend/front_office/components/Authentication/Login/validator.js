export const validate = values => {
  const errors = {};
  if (!values.email) {
    errors.email = "Ce champ est requis";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Email invalide";
  }

  if (!values.password) {
    errors.password = "Ce champ est requis";
  } else if (values.password.length < 5) {
    errors.password = "5 caractères au moins pour le mot de passe";
  }

  return errors;
};
