# 📮 Projeto Busca CEP

Aplicação web para consulta de endereços brasileiros através do CEP utilizando a API ViaCEP.

## 🚀 Funcionalidades

- ✅ Busca de endereço por CEP
- ✅ Formatação automática do CEP (adiciona hífen após 5 dígitos)
- ✅ Validação de CEP inválido
- ✅ Exibição de mensagens de erro
- ✅ Contador de consultas realizadas
- ✅ Visualização do endereço no Google Maps
- ✅ Interface responsiva e animada

## 🛠️ Tecnologias Utilizadas

- **HTML5** - Estrutura da página
- **CSS3** - Estilização e layout
- **JavaScript (ES6+)** - Lógica e consumo de API
- **API ViaCEP** - Consulta de CEPs brasileiros
- **Google Maps Embed** - Visualização de localização
- **Animate.css** - Animações

## 📋 Pré-requisitos

Apenas um navegador web moderno (Chrome, Firefox, Safari, Edge)

## 🔧 Como Usar

1. Clone este repositório ou baixe os arquivos
2. Abra o arquivo `index.html` no seu navegador
3. Digite um CEP válido (8 dígitos)
4. Clique em "🔍 Buscar Endereço"
5. Veja o resultado com o endereço completo e mapa

## 📂 Estrutura do Projeto

```
projeto-via-cep/
│
├── index.html          # Estrutura HTML da página
├── style.css           # Estilos e layout
├── script.js           # Lógica JavaScript
└── README.md           # Documentação
```

## 💡 Funcionalidades Detalhadas

### Formatação Automática
O CEP é formatado automaticamente enquanto você digita, adicionando o hífen após o 5º dígito (ex: 01310-100)

### Validações
- Verifica se o CEP possui 8 dígitos
- Valida se contém apenas números
- Verifica se o CEP existe na base da ViaCEP

### Contador de Consultas
Mantém um contador de quantas consultas foram realizadas com sucesso durante a sessão

### Visualização no Mapa
Após uma busca bem-sucedida, exibe a localização aproximada do endereço no Google Maps

## 🌐 API Utilizada

**ViaCEP** - API gratuita para consulta de CEPs brasileiros
- URL: `https://viacep.com.br/ws/{cep}/json/`
- Documentação: https://viacep.com.br

## 📝 Exemplos de CEP

- São Paulo/SP: 01310-100
- Rio de Janeiro/RJ: 20040-020
- Brasília/DF: 70040-020
- Belo Horizonte/MG: 30130-100

## 🤝 Contribuições

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou enviar pull requests.

## 📄 Licença

Este projeto é de código aberto e está disponível para uso livre.

## ✨ Autor

Desenvolvido como projeto de estudos sobre consumo de APIs e manipulação do DOM.
