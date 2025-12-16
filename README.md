# 🧪 Projeto de Automação EBAC - Page Objects com Cypress

Este repositório contém um projeto de automação de testes desenvolvido como parte do **Módulo 22** do curso da EBAC. O foco principal é a implementação do padrão **Page Object Model (POM)** utilizando o framework **Cypress** para criar testes de interface (UI) mais organizados, sustentáveis e de fácil manutenção.

## 🎯 Objetivo

Demonstrar a aplicação prática do padrão Page Objects no Cypress, separando claramente a estrutura das páginas (seletores e ações) da lógica dos casos de teste, seguindo as melhores práticas de automação.

## 📁 Estrutura do Projeto

A estrutura segue a organização recomendada pelo Cypress, com uma pasta dedicada para os Page Objects:

```
ebac-22-pageObjects/
├── cypress/
│   ├── e2e/                    # Onde ficam os arquivos de teste (specs)
│   ├── fixtures/               # Dados estáticos para os testes
│   ├── support/                # Comandos customizados e configurações globais
│   └── pages/                  # Pasta para os Page Objects (estrutura sugerida)
│       ├── LoginPage.js        # Exemplo: Page Object para a página de login
│       ├── HomePage.js         # Exemplo: Page Object para a página inicial
│       └── ...
├── cypress.config.js           # Arquivo de configuração principal do Cypress
├── package.json                # Dependências e scripts do projeto
└── .gitignore                  # Arquivos ignorados pelo Git
```

## 🛠️ Tecnologias Utilizadas

*   **Cypress**: Framework principal para automação de testes end-to-end.
*   **JavaScript (Node.js)**: Linguagem base para a escrita dos testes e Page Objects.
*   **Page Object Model (POM)**: Padrão de design aplicado para organizar o código.

## 🚀 Como Executar o Projeto

1.  **Pré-requisitos**: Ter o [Node.js](https://nodejs.org/) (que inclui o npm) instalado na sua máquina.

2.  **Clone o repositório e instale as dependências**:
    ```bash
    git clone https://github.com/RCajueiro/ebac-22-pageObjects.git
    cd ebac-22-pageObjects
    npm install
    ```

3.  **Abrir o Cypress no modo interativo** (recomendado para desenvolvimento):
    ```bash
    npx cypress open
    ```
    Isso abrirá a interface gráfica do Cypress, onde você pode selecionar e executar os testes.

4.  **Executar todos os testes em modo headless** (linha de comando):
    ```bash
    npx cypress run
    ```

## 👤 Autor

**Ramon Cajueiro** - *Projeto desenvolvido para a atividade do Módulo 22 do curso EBAC*.

---

Este README fornece uma visão geral do projeto. Consulte os arquivos de código e comentários para detalhes específicos da implementação.
