# 🧭 Estudo de Caso — Rotas em Aplicações Web e Mobile

## 🎯 Objetivo
Este projeto tem como propósito desenvolver **duas aplicações integradas**, uma **Web** e outra **Mobile**, com foco na **implementação de rotas de navegação** entre telas/páginas.  
A aplicação simula um sistema simples de **listagem e detalhes de produtos**, reforçando conceitos essenciais de desenvolvimento moderno.

---

## 🧩 Tecnologias Utilizadas

### 🌐 Web
- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [React Router DOM](https://reactrouter.com/)

### 📱 Mobile
- [React Native](https://reactnative.dev/)
- [Expo](https://expo.dev/)
- [React Navigation](https://reactnavigation.org/)

---

## 🏗️ Estrutura do Projeto
/meu-estudo-caso

├── web/ → Projeto React com Vite
└── mobile/ → Projeto Expo com React Native


Cada pasta contém um projeto **funcional**, com **rotas implementadas** e **arquivos organizados**.

---

## 🌐 Parte 1 — Aplicação Web (React + Vite)

### 🚀 Passos para criar e executar

```bash
# Criar o projeto
npm create vite@latest web --template react

# Acessar a pasta
cd web

# Instalar dependências
npm install
npm install react-router-dom

# Executar
npm run dev
````

## 🧭 Rotas Implementadas

## -- **/ → Página inicial com lista de produtos**
## -- **/product/:id** → Página de detalhes do produto
###
--------------------
## 📱 Parte 2 — Aplicação Mobile (React Native + Expo)
### 🚀 Passos para criar e executar
```bash
# Criar o projeto
expo init mobile
# Selecione o template "blank"

# Acessar a pasta
cd mobile

# Instalar dependências de navegação
npm install
npm install @react-navigation/native
npx expo install react-native-screens react-native-safe-area-context react-native-gesture-handler react-native-reanimated
npm install @react-navigation/native-stack

# Executar
npx expo start
```
## 🧭 Rotas Implementadas

**Home** → Tela inicial com botões para produtos

**Details** → Tela de detalhes do produto selecionado

## 📚 Aprendizados Esperados

### Estruturação de projetos modernos (Vite e Expo)

### Implementação de rotas com React Router e React Navigation

### Organização e modularização de código

### Publicação e documentação de projetos no GitHub

## 🧑‍💻 Autor

Projeto desenvolvido como atividade prática para consolidar conhecimentos em navegação e rotas em aplicações Web e Mobile com React e React Native.
