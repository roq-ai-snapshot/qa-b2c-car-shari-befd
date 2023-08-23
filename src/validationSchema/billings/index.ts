import * as yup from 'yup';

export const billingValidationSchema = yup.object().shape({
  billing_invvoice: yup.number().integer().nullable(),
  user_id: yup.string().nullable().required(),
});
