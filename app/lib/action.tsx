"use server";

export interface FormState {
  error?: boolean;
  success?: boolean;
  message?: string;
}

export async function SubmitForm(
  prevState: FormState | null,
  formData: FormData
): Promise<FormState> {
  const name = formData.get("name") as string;
  const tel = formData.get("tel") as string;

  if (!name || !tel) {
    return {
      error: true,
      success: false,
      message: "Preencha todos os campos!",
    };
  }

  console.log("Dados recebidos no servidor:", { name, tel });

  return {
    success: true,
    error: false,
    message: "Formulário enviado com sucesso! Entraremos em contato.",
  };
}
