import { useState } from "react";
import "./App.css";

function App() {
  const [tarefa, setTarefa] = useState("");
  const [tarefas, setTarefas] = useState([]);

  function adicionarTarefa() {
    if (tarefa.trim() === "") return;

    setTarefas([
      ...tarefas,
      {
        id: Date.now(),
        texto: tarefa,
      },
    ]);

    setTarefa("");
  }

  function removerTarefa(id) {
    setTarefas(tarefas.filter((item) => item.id !== id));
  }

  return (
    <main className="app">
      <div className="conteudo">

        <header className="header">
          <div>
            <span className="tag">REACT PROJECT</span>

            <h1>
              Minha rotina<span>.</span>
            </h1>

            <p>
              Organize suas tarefas e mantenha tudo sob controle.
            </p>
          </div>

          <div className="contador">
            <strong>{tarefas.length}</strong>
            <span>tarefas</span>
          </div>
        </header>

        <div className="entrada">
          <input
            type="text"
            placeholder="O que você precisa fazer?"
            value={tarefa}
            onChange={(e) => setTarefa(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                adicionarTarefa();
              }
            }}
          />

          <button onClick={adicionarTarefa}>
            Adicionar
          </button>
        </div>

        <section className="tarefas">

          {tarefas.length === 0 ? (
            <div className="vazio">
              <div className="icone">✓</div>

              <h2>Nenhuma tarefa ainda</h2>

              <p>
                Adicione sua primeira tarefa para começar.
              </p>
            </div>
          ) : (
            <>
              <div className="cabecalho-tarefas">
                <h2>Suas tarefas</h2>

                <span>
                  {tarefas.length} adicionada(s)
                </span>
              </div>

              <ul>
                {tarefas.map((item, index) => (
                  <li key={item.id} className="tarefa">

                    <div className="numero">
                      {String(index + 1).padStart(2, "0")}
                    </div>

                    <span>{item.texto}</span>

                    <button
                      className="remover"
                      onClick={() => removerTarefa(item.id)}
                    >
                      ×
                    </button>

                  </li>
                ))}
              </ul>
            </>
          )}

        </section>

        <footer>
          Desenvolvido com React • Vite + JavaScript
        </footer>

      </div>
    </main>
  );
}

export default App;