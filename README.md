# sistema-aluno

# API RESTful com Node.js, TypeORM 

Este projeto é uma API desenvolvida com **Node.js**, **Express** e **TypeORM** 

---

## ⚙️ **Configuração do Banco de Dados**  

O projeto usa **PostgreSQL** por padrão, mas pode ser ajustado para outro banco.  

1. **Configure o banco de dados** no arquivo `src/config/data-source.ts`:  

   ```typescript
   export const AppDataSource = new DataSource({
     type: "postgres", // ou "mysql", "sqlite", etc.
     host: "localhost",
     port: 5432,
     username: "seu_usuario",
     password: "sua_senha",
     database: "seu_banco",
     synchronize: true,
     logging: false,
     entities: [User],
     migrations: ["src/migrations/*.ts"],
   });
   ```

---

## **Instalação e Configuração**  

1. **Clone o repositório:**  
   ```bash
   git clone https://github.com/seu-usuario/seu-repositorio.git
   cd seu-repositorio
   ```

2. **Instale as dependências:**  
   ```bash
   npm install
   ```

3. **Configure o ambiente:**  
   Crie um arquivo `.env` e defina as credenciais do banco de dados, se necessário.

4. **Inicialize o banco de dados:**  
   ```bash
   npm run migration:run
   ```

---

##  **Rodando o Projeto**  

### **Modo Desenvolvimento**  
```bash
npm run server
```

### **Executando Migrations**  
```bash
npm run migration:generate --name CreateUsersTable
npm run migration:run
```

## 🐜 **Licença**  

Este projeto está sob a licença **MIT**.

