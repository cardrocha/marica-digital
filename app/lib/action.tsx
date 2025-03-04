"use server";

import { z } from "zod";

const validationSchema = z.object({
  name: z.string().min(6, { message: "Nome está muito curto!" }),
  tel: z.string().min(15, { message: "Digite um número válido!" }),
});

export interface FormState {
  error?: boolean;
  success?: boolean;
  message?: string;
}

export async function SubmitForm(
  prevState: FormState | null,
  formData: FormData
): Promise<FormState> {
  const formDataObject = Object.fromEntries(formData);

  const result = validationSchema.safeParse(formDataObject);

  if (!result.success) {
    return {
      error: true,
      success: false,
      message: result.error.errors[0].message,
    };
  }

  console.log("Dados recebidos no servidor:", formDataObject);

  return {
    success: true,
    error: false,
    message: "Formulário enviado com sucesso! Entraremos em contato.",
  };
}
