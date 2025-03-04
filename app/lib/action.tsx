"use server";

export async function SubmitForm(prevState: any, formData: FormData) {
  const name = formData.get("name");
  const tel = formData.get("tel");

  if (!name || !tel) {
    return {
      error: true,
      message: "Preencha todos os campos!",
    };
  }

  console.log("Dados recebidos no servidor:", { name, tel });

  return {
    success: true,
    message: "Formulário enviado! Entraremos em contato. Obrigado!"
,
  };
}
