<p align="center">
  <img src="./1img.jpg" alt="IMC Global - IA Nutricional" width="100%" />
</p>

# 🌍 Analisador de IMC Global com IA Nutricional

Aplicação web interativa que calcula o **Índice de Massa Corporal (IMC)**, realiza **comparação global por país** e gera **planos nutricionais personalizados** utilizando **lógica inteligente baseada em IA**, considerando preferências alimentares e hábitos locais.

🔗 **Demo do Projeto:**  
👉 https://edvanfigueredo.github.io/IMC-Global/

---

## ✨ Funcionalidades

- 📊 **Calculadora de IMC**  
  Cálculo preciso com peso, altura e classificação automática

- 🌍 **Análise Global**  
  Comparação com estatísticas nacionais de múltiplos países

- 🤖 **IA Nutricional**  
  Geração automática de dietas conforme IMC, país e restrições alimentares

- 🥗 **Preferências Alimentares**
  - Carnívoro
  - Vegetariano
  - Intolerante à lactose
  - Diabético tipo 1
  - Diabético tipo 2
  - Combinações (vegetariano + lactose / diabetes)

- 📅 **Planos Nutricionais de 7 Dias**
  - 6 refeições diárias
  - Alimentos comuns da classe média do país selecionado

- 🖨️ **Exportação em PDF**
  Impressão do resultado com nome do sistema e autor

- 📱 **Design Responsivo**
  Interface moderna, acessível e adaptável a qualquer dispositivo

---

## 📸 Screenshots

### Calculadora de IMC
> Interface principal para inserção de dados

### Plano Nutricional Gerado por IA
> Dieta personalizada conforme país e perfil do usuário

---

## 🛠️ Tecnologias Utilizadas

- **HTML5** – Estrutura semântica
- **CSS3 + Tailwind CSS (CDN)** – Estilização moderna
- **JavaScript ES6+ (Vanilla)** – Lógica, cálculos e geração inteligente
- **Git & GitHub** – Versionamento
- **GitHub Pages** – Deploy

---

## 📦 Estrutura do Projeto

```text
IMC-Global/
├── index.html
├── styles.css
├── script.js
├── 1img.jpg
└── README.md
🚀 Como Executar o Projeto
Opção 1 – Online
Acesse diretamente pelo GitHub Pages:
👉 https://edvanfigueredo.github.io/IMC-Global/

Opção 2 – Local
Clone o repositório:

bash
Copiar código
git clone https://github.com/Edvanfigueredo/IMC-Global.git
Acesse a pasta:

bash
Copiar código
cd IMC-Global
Abra o arquivo:

bash
Copiar código
index.html
(Pode abrir direto no navegador)

🌍 Países Suportados
🇧🇷 Brasil

🇺🇸 Estados Unidos

🇲🇽 México

🇦🇷 Argentina

🇫🇷 França

🇯🇵 Japão

🇩🇪 Alemanha

🇮🇹 Itália

🇮🇪 Irlanda

🤖 Como Funciona a IA Nutricional
O sistema analisa:

IMC do usuário

Classificação corporal

País selecionado

Preferência alimentar

Restrições (lactose, diabetes)

Estratégias automáticas:
Abaixo do peso: ganho de peso saudável

Peso normal: manutenção equilibrada

Sobrepeso / Obesidade: perda de peso moderada

Cada plano inclui:

☀️ Café da manhã

🥨 Lanche

🍽️ Almoço

🍎 Lanche da tarde

🌙 Jantar

🌜 Ceia

🔧 Personalização (para desenvolvedores)
Adicionar novo país
js
Copiar código
countryIMCData['Novo País'] = {
  avgIMC: 25.0,
  obesity: 20.0,
  position: 100
};
Adicionar alimentos por país
js
Copiar código
countryFoodBase['Novo País'] = {
  carbs: [],
  proteinsAnimal: [],
  proteinsPlant: [],
  veggies: [],
  fruits: [],
  fats: []
};
📝 Roadmap
 Exportação em PDF

 Preferências alimentares

 Base alimentar por país

 Dashboard analítico (Power BI)

 Login de usuários

 Histórico de resultados

 API externa de nutrição

 PWA (modo offline)

⚠️ Disclaimer
Este projeto tem finalidade educacional e informativa.
As recomendações nutricionais não substituem acompanhamento médico ou nutricional profissional.

👨‍💻 Autor
Edvan Figuerêdo Araujo
🎓 Estudante de Análise e Desenvolvimento de Sistemas

📧 Email: edvanfaraujo@outlook.com
🔗 LinkedIn: https://www.linkedin.com/in/edvan-figuerêdo-araujo-7b8332272
💻 GitHub: https://github.com/Edvanfigueredo

⭐ Se este projeto te ajudou, deixe uma estrela no GitHub!

**Made with ❤️ in Brazil** 🇧🇷
