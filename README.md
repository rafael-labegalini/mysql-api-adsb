# Typescript, Express and Mysql Application

### Passo 1: Inicializando o Projeto com TypeScript

1.	Inicialize o projeto:
```bash
mkdir mysql-api-ads
cd mysql-api-ads
npm init -y
```

2.	Instale as dependências:
```bash
npm install express ejs mysql2
```

3.	Instale o TypeScript e as definições de tipo para Express:
```bash
npm install typescript ts-node @types/node @types/express @types/mysql --save-dev
```

4.	Crie o arquivo de configuração do TypeScript:
```bash
npx tsc --init
```

5.	Adicione os seguintes campos ao tsconfig.json para configurar adequadamente o projeto:
```json
{
  "compilerOptions": {
    "target": "ES2023",
    "module": "commonjs",
    "strict": false,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "outDir": "./dist"
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules"]
}
```

### Passo 2: Criando a Estrutura de Pastas

1.	Crie a pasta src e dentro dela, o arquivo index.ts:
```bash
mkdir src
mkdir src/views
touch src/app.ts
```

### Passo 3: Rodando a Aplicação
2.	Criar o script de inicialização da aplicação no `package.json`:
```json
"scripts": {
    "start": "ts-node --transpile-only src/app.ts",
}
```

Para executar a aplicação agora use os seguintes
comandos:
```bash
docker compose up -d
npm start
```