//Usúario local
// const usuario = {
//     email   : "email@email.com",
//     senha   : "12345",
//     nome    : "José das Couve",
//     avatar  : "https://placehold.co/100x100/d1d5db/111827.png?text=Mobile%20Preview&font=inter"
// }

const usuarios = [
  {
    email: "lucas.bossi@email.com",
    senha: "123",
    nome: "Lucas Bossi Cruz",
    avatar:
      "https://placehold.co/100x100/d1d5db/111827.png?text=Lucas&font=inter",
  },
  {
    email: "email@email.com",
    senha: "12345",
    nome: "José das Couves",
    avatar:
      "https://placehold.co/100x100/d1d5db/111827.png?text=Theo&font=inter",
  },
  {
    email: "ana.silva@email.com",
    senha: "789",
    nome: "Ana Silva",
    avatar:
      "https://placehold.co/100x100/d1d5db/111827.png?text=Ana&font=inter",
  },
  {
    email: "carlos.oliveira@email.com",
    senha: "abc",
    nome: "Carlos Oliveira",
    avatar:
      "https://placehold.co/100x100/d1d5db/111827.png?text=Carlos&font=inter",
  },
  {
    email: "mariana.santos@email.com",
    senha: "def",
    nome: "Mariana Santos",
    avatar:
      "https://placehold.co/100x100/d1d5db/111827.png?text=Mariana&font=inter",
  },
  {
    email: "roberto.lima@email.com",
    senha: "ghi",
    nome: "Roberto Lima",
    avatar:
      "https://placehold.co/100x100/d1d5db/111827.png?text=Roberto&font=inter",
  },
  {
    email: "julia.ferreira@email.com",
    senha: "jkl",
    nome: "Julia Ferreira",
    avatar:
      "https://placehold.co/100x100/d1d5db/111827.png?text=Julia&font=inter",
  },
  {
    email: "fernando.souza@email.com",
    senha: "mno",
    nome: "Fernando Souza",
    avatar:
      "https://placehold.co/100x100/d1d5db/111827.png?text=Fernando&font=inter",
  },
  {
    email: "patricia.costa@email.com",
    senha: "pqr",
    nome: "Patricia Costa",
    avatar:
      "https://placehold.co/100x100/d1d5db/111827.png?text=Patricia&font=inter",
  },
  {
    email: "ricardo.mendes@email.com",
    senha: "stu",
    nome: "Ricardo Mendes",
    avatar:
      "https://placehold.co/100x100/d1d5db/111827.png?text=Ricardo&font=inter",
  },
];

  const botaoEntrar = document.getElementById("btnEntrar");
  const modalDialog = document.getElementById("meu-modal");
  const divMsg = document.getElementById("msg");
  const botaoFecharModal = document.getElementById("fechar-modal");

  botaoFecharModal.addEventListener("click", function () {
    modalDialog.close();
  });

botaoEntrar.addEventListener("click", function (evento) {
  evento.preventDefault();

  const email = document.getElementById("idEmail");
  const senha = document.getElementById("idSenha");

  console.log(email.value);
  console.log(senha.value);

  try {
    if (usuarios !== null) {
      for (let x = 0; x < usuarios.length; x++) {
        if (
          usuarios[x].email === email.value &&
          usuarios[x].senha === senha.value
        ) {
          let contador = 5;

          divMsg.classList.remove("msg-erro");
          divMsg.classList.add("msg-sucesso");

          modalDialog.setAttribute(
            "aria-label",
            "Mensagem de sucesso no login"
          );

          divMsg.innerHTML = `
            <p class="login-sucesso">Login realizado com sucesso!</p>
            <p class="login-sucesso">Você será redirecionado em ${contador} segundos!</p>
          `;

          modalDialog.showModal();

          const intervalo = setInterval(() => {
            contador--;

            divMsg.innerHTML = `
              <p class="login-sucesso">Login realizado com sucesso!</p>
              <p class="login-sucesso">Você será redirecionado em ${contador} segundos!</p>
            `;

            if (contador === 0) {
              clearInterval(intervalo);
              window.location.href = "../index.html";
            }
          }, 1000);

          return;
        }
      }

      throw new Error("Email ou senha incorretos!");
    }
  } catch (error) {
    console.error(error);

    divMsg.classList.remove("msg-sucesso");
    divMsg.classList.add("msg-erro");

    modalDialog.setAttribute("aria-label", "Mensagem de erro no login");

    divMsg.innerHTML = `
      <p class="login-erro-titulo">Erro no login</p>
      <p class="login-erro-msg">${error.message}</p>
      <p class="login-erro-ajuda">Verifique seu e-mail e sua senha e tente novamente.</p>
    `;

    modalDialog.showModal();
  }
});