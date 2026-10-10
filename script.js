// Máscaras de input para CPF, telefone e CEP
function soNumeros(valor) {
  return valor.replace(/\D/g, "");
}

function mascaraCPF(v) {
  v = soNumeros(v).slice(0, 11);
  return v
    .replace(/^(\d{3})(\d)/, "$1.$2")
    .replace(/^(\d{3})\.(\d{3})(\d)/, "$1.$2.$3")
    .replace(/\.(\d{3})(\d)/, ".$1-$2");
}

function mascaraTelefone(v) {
  v = soNumeros(v).slice(0, 11);
  if (v.length > 10) return v.replace(/^(\d{2})(\d{5})(\d{0,4})/, "($1) $2-$3");
  if (v.length > 6)  return v.replace(/^(\d{2})(\d{4})(\d{0,4})/, "($1) $2-$3");
  if (v.length > 2)  return v.replace(/^(\d{2})(\d{0,5})/, "($1) $2");
  return v;
}

function mascaraCEP(v) {
  v = soNumeros(v).slice(0, 8);
  return v.replace(/^(\d{5})(\d)/, "$1-$2");
}

document.getElementById("cpf").addEventListener("input", function () {
  this.value = mascaraCPF(this.value);
});
document.getElementById("telefone").addEventListener("input", function () {
  this.value = mascaraTelefone(this.value);
});
document.getElementById("cep").addEventListener("input", function () {
  this.value = mascaraCEP(this.value);
});