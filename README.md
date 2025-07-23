# 🌍 Analisador de IMC Global com IA Nutricional

Um aplicativo web interativo que calcula o Índice de Massa Corporal (IMC), compara com dados globais por país e gera planos nutricionais personalizados usando inteligência artificial.

![Demo do Projeto](https://via.placeholder.com/800x400/4F46E5/FFFFFF?text=Analisador+de+IMC+Global)

## ✨ Funcionalidades

- 📊 **Calculadora de IMC** - Cálculo preciso com peso, altura e país
- 🌍 **Análise Global** - Comparação com estatísticas de 8 países
- 🤖 **IA Nutricional** - Geração automática de dietas personalizadas
- 📅 **Planos de 7 dias** - Cardápios completos com 6 refeições diárias
- 📱 **Design Responsivo** - Interface moderna e adaptável
- 🎨 **Visualizações Interativas** - Gráficos e indicadores visuais

## 🚀 Demo Online

[Ver Demo](https://seu-usuario.github.io/imc-analyzer) *(substitua pela sua URL)*

## 📸 Screenshots

### Calculadora Principal
![Screenshot 1](https://via.placeholder.com/600x300/10B981/FFFFFF?text=Calculadora+de+IMC)

### Plano Nutricional IA
![Screenshot 2](https://via.placeholder.com/600x300/F59E0B/FFFFFF?text=Plano+Nutricional+7+Dias)

## 🛠️ Tecnologias Utilizadas

- **React 18** - Framework principal
- **Tailwind CSS** - Estilização moderna
- **Lucide React** - Ícones elegantes
- **JavaScript ES6+** - Lógica da aplicação

## 📋 Pré-requisitos

- Node.js 16+ 
- npm ou yarn
- Navegador moderno

## ⚡ Instalação e Execução

### 1. Clone o repositório
```bash
git clone https://github.com/seu-usuario/imc-analyzer.git
cd imc-analyzer
```

### 2. Instale as dependências
```bash
npm install
# ou
yarn install
```

### 3. Execute o projeto
```bash
npm start
# ou
yarn start
```

### 4. Abra no navegador
Acesse `http://localhost:3000`

## 📦 Estrutura do Projeto

```
imc-analyzer/
├── public/
│   ├── index.html
│   └── favicon.ico
├── src/
│   ├── components/
│   │   └── IMCAnalyzer.js
│   ├── data/
│   │   └── countryData.js
│   ├── utils/
│   │   └── calculations.js
│   ├── App.js
│   └── index.js
├── package.json
└── README.md
```

## 🎯 Como Usar

1. **Digite seus dados**: Peso (kg), altura (cm) e selecione seu país
2. **Clique em "Calcular IMC"**: O sistema processará seus dados
3. **Veja os resultados**: IMC, categoria e comparação com seu país
4. **Receba sua dieta**: Plano nutricional personalizado de 7 dias

## 🌍 Países Suportados

- 🇧🇷 Brasil
- 🇺🇸 Estados Unidos  
- 🇲🇽 México
- 🇦🇷 Argentina
- 🇫🇷 França
- 🇯🇵 Japão
- 🇩🇪 Alemanha
- 🇮🇹 Itália

## 🤖 Como Funciona a IA Nutricional

O sistema analisa seu IMC e categoria para gerar planos nutricionais específicos:

- **Abaixo do peso**: Dietas para ganho de peso saudável
- **Peso normal**: Planos de manutenção equilibrada
- **Sobrepeso**: Estratégias de perda de peso moderada
- **Obesidade**: Planos intensivos supervisionados

Cada plano inclui:
- ☀️ Café da manhã
- 🥨 Lanche da manhã
- 🍽️ Almoço
- 🍎 Lanche da tarde
- 🌙 Janta
- 🌜 Ceia

## 🔧 Personalização

### Adicionar novos países
```javascript
// Em src/data/countryData.js
const countryIMCData = {
  'Novo País': { 
    avgIMC: 25.0, 
    obesity: 20.0, 
    position: 100 
  }
};
```

### Criar novos planos alimentares
```javascript
// Em src/utils/calculations.js
const customDietPlan = {
  'Day 1': {
    'Café da manhã': 'Sua receita aqui',
    // ... outras refeições
  }
};
```

## 🤝 Contribuição

Contribuições são bem-vindas! Para contribuir:

1. Fork o projeto
2. Crie uma branch (`git checkout -b feature/NovaFuncionalidade`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova funcionalidade'`)
4. Push para a branch (`git push origin feature/NovaFuncionalidade`)
5. Abra um Pull Request

## 📝 Roadmap

- [ ] Integração com APIs reais de nutrição
- [ ] Sistema de usuários e histórico
- [ ] Mais países e dados atualizados
- [ ] Modo offline (PWA)
- [ ] Exportação de dietas em PDF
- [ ] Integração com wearables
- [ ] Calculadora de calorias
- [ ] Receitas detalhadas

## ⚠️ Disclaimer

Este projeto é apenas para fins educacionais e informativos. As sugestões nutricionais são baseadas em padrões gerais e não substituem orientação médica profissional. Sempre consulte um nutricionista ou médico antes de fazer mudanças significativas na sua dieta.

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 🎉 Agradecimentos

- Dados de IMC baseados em estatísticas da OMS
- Ícones fornecidos por [Lucide](https://lucide.dev/)
- Inspiração em apps de saúde modernos

## 📞 Contato

- **Autor**: Edvan Figueredo Araujo
- **Email**: edvanfaraujo@outlook.com
- **LinkedIn**:  linkedin.com/in/edvan-figuerêdo-araujo-7b8332272
- **GitHub**:  github.com/Edvanfigueredo

---

⭐ Se este projeto te ajudou, deixe uma estrela no GitHub!

**Made with ❤️ in Brazil** 🇧🇷
