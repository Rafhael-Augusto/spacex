### Como rodar o projeto com Docker:

- Faca o clone do projeto
```
git clone git@github.com:Rafhael-Augusto/spacex.git
```
- Entre na pasta do projeto (spacex)
```
cd spacex
```
- Dentro da pasta, no terminal, faca o build
```
docker build -t spacex .
```
- Quando terminar, rode o projeto
```
docker run -p 3000:3000 spacex
```
- Entre no localhost:3000 no navegador.
- http://localhost:3000/

### Como rodar o projeto sem Docker:

- Faca o clone do projeto
```
git clone git@github.com:Rafhael-Augusto/spacex.git
```
- Entre na pasta do projeto (spacex)
```
cd spacex
```
- Dentro da pasta, no terminal, escreva
```
npm install
```
- Espere a instalacao das dependencias
- Quando terminar
```
npm run build
npm start
```
- Entre no localhost:3000 no navegador.
- http://localhost:3000/
