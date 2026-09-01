# Atividade — Desenvolvimento, Versionamento e Deploy de uma Aplicação React

## Descrição

Nesta atividade foi desenvolvida uma aplicação web utilizando **React** como framework Front-end e o **Visual Studio Code (VS Code)** como ambiente de desenvolvimento.

Após o desenvolvimento, o projeto foi versionado utilizando **Git**, publicado em um repositório no **GitHub** e, posteriormente, conectado à **Vercel** para realização do deploy e publicação da aplicação na internet.

A atividade teve como objetivo praticar o fluxo completo de desenvolvimento, versionamento e publicação de uma aplicação web.

---

## Objetivos

- Desenvolver uma aplicação utilizando React;
- Utilizar o Visual Studio Code como ambiente de desenvolvimento;
- Aplicar conceitos básicos de desenvolvimento com React;
- Versionar o projeto utilizando Git;
- Criar e utilizar um repositório no GitHub;
- Realizar commit e push do projeto;
- Conectar o repositório do GitHub à Vercel;
- Realizar o deploy da aplicação;
- Disponibilizar o projeto por meio de uma URL pública.

---

## Aplicação Desenvolvida

Para a realização da atividade foi desenvolvida uma aplicação de **Lista de Tarefas**.

A aplicação permite que o usuário:

- Adicione novas tarefas;
- Remova tarefas existentes;
- Visualize a quantidade de tarefas cadastradas;
- Adicione tarefas utilizando a tecla `Enter`;
- Interaja com uma interface responsiva.

A aplicação foi desenvolvida utilizando uma interface com tema escuro, detalhes em azul e tipografia baseada nas fontes **Poppins** e **Anton**.

---

## Tecnologias Utilizadas

| Tecnologia | Utilização |
|---|---|
| React | Desenvolvimento da aplicação |
| JavaScript | Lógica da aplicação |
| HTML | Estrutura da página |
| CSS | Estilização e responsividade |
| Vite | Criação e execução do projeto |
| Visual Studio Code | Ambiente de desenvolvimento |
| Git | Versionamento do projeto |
| GitHub | Hospedagem do código-fonte |
| Vercel | Deploy e hospedagem da aplicação |

---

## Estrutura do Projeto

atividade-react/
│
├── public/
│
├── src/
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
│
├── .gitignore
├── index.html
├── package.json
├── package-lock.json
└── README.md
Principais arquivos

App.jsx

Contém a estrutura principal da aplicação e a lógica de gerenciamento das tarefas.

App.css

Contém os estilos da aplicação, incluindo layout, cores, tipografia e responsividade.

index.css

Contém as configurações globais de CSS.

main.jsx

Responsável pelo ponto de entrada da aplicação React.

package.json

Contém as informações do projeto, scripts e dependências utilizadas.

Conceitos de React Utilizados
useState

Foi utilizado o useState para controlar os estados da aplicação.

const [tarefa, setTarefa] = useState("");
const [tarefas, setTarefas] = useState([]);

O primeiro estado controla o conteúdo digitado pelo usuário e o segundo armazena a lista de tarefas.

Renderização de listas

O método map() foi utilizado para percorrer as tarefas e renderizar cada item na interface.

tarefas.map((item, index) => (
  <li key={item.id}>
    {item.texto}
  </li>
))
Remoção de tarefas

O método filter() foi utilizado para remover uma tarefa específica da lista.

setTarefas(
  tarefas.filter((item) => item.id !== id)
);
Eventos

Foram utilizados eventos do React para permitir a interação do usuário com a aplicação, como:

onClick

e

onKeyDown

Esses eventos permitem adicionar e remover tarefas e também adicionar uma tarefa utilizando a tecla Enter.

Desenvolvimento

O projeto foi desenvolvido utilizando o Visual Studio Code como ambiente de desenvolvimento.

Após a criação e configuração da aplicação React, foram realizados testes localmente para verificar o funcionamento das funcionalidades implementadas.

Versionamento com Git

Após o desenvolvimento da aplicação, o projeto foi versionado utilizando Git.

O repositório Git foi inicializado com:

git init

Os arquivos foram adicionados para o controle de versão:

git add .

Em seguida, foi realizado o commit:

git commit -m "feat: cria aplicação React"

A branch principal utilizada no projeto foi:

main

O repositório local foi conectado ao GitHub utilizando:

git remote add origin https://github.com/mocotoTonin/atividade-react.git

Por fim, o projeto foi enviado para o GitHub utilizando:

git push -u origin main
Repositório GitHub

O código-fonte da aplicação está disponível no seguinte repositório:

GitHub:
https://github.com/mocotoTonin/atividade-react

Deploy na Vercel

Após a publicação do código no GitHub, o repositório foi conectado à Vercel para realizar o deploy da aplicação.

A Vercel foi utilizada para gerar uma versão de produção do projeto e disponibilizá-lo publicamente na internet.

O projeto também ficou integrado ao repositório do GitHub, permitindo que novas alterações enviadas ao repositório possam ser utilizadas para novos deploys.

Aplicação Online

A aplicação está disponível publicamente através da Vercel:

Vercel:
https://atividade-react-seven.vercel.app/

Fluxo do Projeto

O desenvolvimento da atividade seguiu o seguinte fluxo:

Visual Studio Code
        ↓
Desenvolvimento com React
        ↓
Testes da aplicação
        ↓
Git
        ↓
Commit
        ↓
GitHub
        ↓
Vercel
        ↓
Deploy
        ↓
Aplicação disponível online
Resultado Final

Ao final da atividade, foi possível desenvolver uma aplicação utilizando React, realizar seu versionamento com Git, publicar o código no GitHub e disponibilizar a aplicação online por meio da Vercel.

Links

Repositório:
https://github.com/mocotoTonin/atividade-react

Aplicação:
https://atividade-react-seven.vercel.app/

Projeto desenvolvido para fins acadêmicos.
