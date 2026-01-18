// esta função é chamada toda vez que alguem clica no botão "adicionar"
function adicionarTarefa(){

    // busca o campo de texto (input) pelo ID dele
    const input = document.getElementById('tarefaInput');

    // busca a lista (ul) onde as tarefas serão colocadas
    const lista = document.getElementById('ListaTarefas');

    //o.trim() remove espaços vazio. se o valor for vazio, ele avisa o usuário
    if (input.value.trim() === "") {
        alert("Digite algo Primeiro!");
        return; // o return para a função aqui mesmo
    }

    // document.creareElement cria um novo elemento HTML 'li' (item de lista) na memória
    const novaTarefa = document.createElement('li');

    // o .innerHTML define o que vai ter dentro desse 'li' novo
    // usamos crases ( ` ) para conseguir misturar texto com o valor que o usuário digitou
    novaTarefa.innerHTML = `
    <span onclick="this.parentElement.classList.toggle('concluida')">${input.value}</span>
    <button onclick="this.parentElement.remove()" style="background: #dc3545; padding: 5px 10px;">X</button>
     
    `;

    //Coloca na lista e limpa o campo
    lista.appendChild(novaTarefa);
    input.value = "";
    

}