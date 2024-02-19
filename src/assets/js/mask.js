export function formatarCPF(cpf) {
  cpf = cpf.replace(/\D/g, "");

  if (cpf.length > 11) {
    // Máscara de CNPJ
    cpf = cpf.replace(
      /^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})$/,
      "$1.$2.$3/$4-$5"
    );
  } else {
    // Máscara de CPF
    cpf = cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
  }

  return cpf;
}
