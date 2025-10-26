// ❌ Exemplo 1 — Envio de formulário
const isButtonDisabled = true;

// ❌ Exemplo 2 — Carregamento de dados
const isSpinnerVisible = true;

// ❌ Exemplo 3 — Acesso negado
const isAccessDenied = true;

// ❌ Exemplo 4 — Estado de carregamento em tela
const isOverlayVisible = true;

// ❌ Exemplo 5 — Exibição de mensagem de erro
const isErrorMessageVisible = true;

// ❌ Exemplo 6 — Sessão de usuário
const isLoggedOut = true;

// ❌ Exemplo 7 — Botão de salvar
const isSaveButtonDisabled = true;

// ❌ Exemplo 8 — Atualização de dados
const isRefreshButtonHidden = true;


function Button() {
  // ❌ Efeito: o nome descreve o resultado, não o motivo
  const isButtonDisabled = true;

  return (
    <button disabled={isButtonDisabled}>
      <span></span>
      {/* O texto muda com base no estado, mas o nome não explica a causa */}
      {isButtonDisabled ? 'Carregando...' : 'Enviar'}
    </button>
  );
}
