# RPG API - Sistema de Gerenciamento de Personagens e Itens Mágicos

Esta aplicação desenvolvida com **NestJS** permite gerenciar personagens e seus respectivos itens mágicos em um jogo de RPG.

## 🚀 Como rodar o projeto

### 1. Instale as dependências
```bash
npm install
```

### 2. Rode a aplicação
```bash
npm run start:dev
```

### 3. Acesse o Swagger
```
http://localhost:3000/api
```

---

## 📚 Documentação da API (Swagger)

A API conta com documentação automática gerada com Swagger, disponível em:
```
http://localhost:3000/api
```

---

## 📦 Endpoints Principais

### 🔸 Personagens
- `POST /personagem` → Criar personagem
- `GET /personagem` → Listar todos os personagens
- `GET /personagem/:id` → Buscar personagem por ID
- `PATCH /personagem/:id/nome-aventureiro` → Atualizar nome aventureiro
- `DELETE /personagem/:id` → Remover personagem
- `GET /personagem/:id/itens` → Listar itens mágicos do personagem
- `GET /personagem/:id/amuleto` → Buscar amuleto do personagem
- `DELETE /personagem/:id/itens/:nome` → Remover item mágico do personagem

### 🔸 Itens Mágicos
- `POST /magic-items` → Criar item mágico (e associar ao personagem)

---

## 🧠 Regras de Negócio

### Personagem
- A soma de **força + defesa** não pode ultrapassar **10**.
- Classe deve ser uma das: `Guerreiro`, `Mago`, `Arqueiro`, `Ladino`, `Bardo`.

### Item Mágico
- Tipos: `Arma`, `Armadura`, `Amuleto`
- Armas: **defesa obrigatoriamente 0**
- Armaduras: **força obrigatoriamente 0**
- Amuletos: podem ter ambos, **mas só 1 por personagem**
- Nenhum item pode ter **força = 0 e defesa = 0**
- Atributos variam de **0 a 10**

---

## 📁 Estrutura de Pastas
```
src/
├── common/enums         # Enums globais
├── personagem            # Módulo de personagens
│   ├── dto               # DTOs
│   ├── interfaces        # Interfaces
├── item-magico          # Módulo de itens mágicos
│   ├── dto
│   ├── interfaces
```

---

## 💡 Tecnologias
- NestJS
- TypeScript
- Swagger
- Class-validator

---

Feito por:
Nome: João Victor Nascimento Crestani
R.A: 23019052-2