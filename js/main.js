document.addEventListener("click", function(e){
  const el = e.target;
  if(el.classList.contains("btn-calc")){
    function validarCPF(cpf) {
      // Remove caracteres especiais do CPF
      cpf = cpf.replace(/[^\d]+/g,'');
      
      // Verifica se o CPF tem 11 dígitos
      if (cpf.length !== 11) {
        return false;
      }
      
      // Calcula o primeiro dígito verificador
      var soma = 0;
      for (var i = 0; i < 9; i++) {
        soma += parseInt(cpf.charAt(i)) * (10 - i);
      }
      var resto = 11 - (soma % 11);
      var digito1 = resto < 10 ? resto : 0;
      
      // Verifica se o primeiro dígito verificador é válido
      if (digito1 !== parseInt(cpf.charAt(9))) {
        return false;
      }
      
      // Calcula o segundo dígito verificador
      soma = 0;
      for (var i = 0; i < 10; i++) {
        soma += parseInt(cpf.charAt(i)) * (11 - i);
      }
      resto = 11 - (soma % 11);
      var digito2 = resto < 10 ? resto : 0;
      
      // Verifica se o segundo dígito verificador é válido
      if (digito2 !== parseInt(cpf.charAt(10))) {
        return false;
      }
      
      // CPF válido
      return true;
    }
    
    // Obtém o valor do input HTML
    var cpfInput = document.querySelector(".cpf");
    var cpf = cpfInput.value;
    
    // Valida o CPF
    if (validarCPF(cpf)) {
      alert("CPF válido!");
    } else {
      alert("CPF inválido!");
    }
    
  }
})






