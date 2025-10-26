// ✅ Exemplo 1 — Envio de formulário
const isFormSubmitting = true;

// ✅ Exemplo 2 — Carregamento de dados
const isDataLoading = true;

// ✅ Exemplo 3 — Acesso negado
const hasPermission = false;

// ✅ Exemplo 4 — Estado de carregamento em tela
const isFetchingUserProfile = true;

// ✅ Exemplo 5 — Exibição de mensagem de erro
const hasRequestFailed = true;

// ✅ Exemplo 6 — Sessão de usuário
const hasSessionExpired = true;

// ✅ Exemplo 7 — Botão de salvar
const isFormInvalid = true;

// ✅ Exemplo 8 — Atualização de dados
const hasLatestData = true;


function Button() {
  // ✅ Causa: o nome explica o motivo da mudança no botão
  const isFormSubmitting = true;

  return (
    <button disabled={isFormSubmitting}>
      <span></span>
      {/* Agora fica claro: o botão está desabilitado porque o formulário está sendo enviado */}
      {isFormSubmitting ? 'Carregando...' : 'Enviar'}
    </button>
  );
}
