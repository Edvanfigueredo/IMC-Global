'use strict';

/**
 * IA Saúde - IMC com Geração de Dieta
 * Desenvolvedor/Autor: Edvan Figuerêdo Araujo
 * Observação: Sugestão educacional. Não substitui nutricionista/médico.
 */

/* =========================
   Dados IMC por país
========================= */
const countryIMCData = {
  'Brasil': { avgIMC: 26.8, obesity: 22.1, position: 67 },
  'Estados Unidos': { avgIMC: 28.8, obesity: 36.2, position: 12 },
  'México': { avgIMC: 28.9, obesity: 36.1, position: 11 },
  'Argentina': { avgIMC: 28.3, obesity: 28.3, position: 29 },
  'França': { avgIMC: 25.3, obesity: 17.0, position: 122 },
  'Japão': { avgIMC: 23.3, obesity: 4.3, position: 166 },
  'Irlanda': { avgIMC: 27.5, obesity: 25.0, position: 45},
  'Alemanha': { avgIMC: 26.3, obesity: 25.0, position: 49 },
  'Itália': { avgIMC: 25.3, obesity: 19.9, position: 87 }
};

/* =========================
   Base alimentar por país
   (alimentos comuns para classe média)
========================= */
const countryFoodBase = {
  'Brasil': {
    carbs: ['arroz', 'arroz integral', 'batata-doce', 'mandioca', 'pão integral', 'aveia', 'feijão', 'lentilha'],
    proteinsAnimal: ['frango', 'ovos', 'peixe', 'carne bovina magra'],
    proteinsPlant: ['feijão', 'lentilha', 'grão-de-bico', 'tofu'],
    veggies: ['alface', 'tomate', 'brócolis', 'cenoura', 'couve', 'abobrinha'],
    fruits: ['banana', 'maçã', 'mamão', 'laranja', 'abacate'],
    fats: ['azeite', 'castanhas', 'pasta de amendoim']
  },
  'Estados Unidos': {
    carbs: ['oats', 'brown rice', 'sweet potato', 'whole wheat bread', 'beans', 'quinoa'],
    proteinsAnimal: ['chicken', 'eggs', 'salmon', 'lean beef'],
    proteinsPlant: ['beans', 'lentils', 'chickpeas', 'tofu'],
    veggies: ['lettuce', 'tomato', 'broccoli', 'spinach', 'zucchini'],
    fruits: ['banana', 'apple', 'berries', 'avocado'],
    fats: ['olive oil', 'nuts', 'peanut butter']
  },
  'México': {
    carbs: ['arroz', 'tortilla de milho', 'feijão', 'aveia', 'batata', 'quinoa'],
    proteinsAnimal: ['frango', 'ovos', 'peixe', 'carne magra'],
    proteinsPlant: ['feijão', 'lentilha', 'grão-de-bico', 'tofu'],
    veggies: ['alface', 'tomate', 'abobrinha', 'cenoura', 'pimentão'],
    fruits: ['banana', 'maçã', 'laranja', 'abacate'],
    fats: ['azeite', 'castanhas', 'pasta de amendoim']
  },
  'Argentina': {
    carbs: ['arroz', 'batata', 'pão integral', 'aveia', 'lentilha'],
    proteinsAnimal: ['frango', 'ovos', 'peixe', 'carne bovina magra'],
    proteinsPlant: ['lentilha', 'grão-de-bico', 'feijão', 'tofu'],
    veggies: ['alface', 'tomate', 'brócolis', 'cenoura', 'abobrinha'],
    fruits: ['maçã', 'banana', 'laranja', 'abacate'],
    fats: ['azeite', 'castanhas']
  },
  'França': {
    carbs: ['pain complet', 'riz', 'avoine', 'pommes de terre', 'lentilles'],
    proteinsAnimal: ['poulet', 'oeufs', 'poisson', 'viande maigre'],
    proteinsPlant: ['lentilles', 'pois chiches', 'haricots', 'tofu'],
    veggies: ['salade', 'tomate', 'brocoli', 'carotte', 'courgette'],
    fruits: ['pomme', 'banane', 'fruits rouges', 'avocat'],
    fats: ['huile d’olive', 'noix']
  },
  'Japão': {
    carbs: ['rice', 'sweet potato', 'oats', 'soba (moderado)', 'beans'],
    proteinsAnimal: ['fish', 'eggs', 'chicken'],
    proteinsPlant: ['tofu', 'edamame', 'beans', 'lentils'],
    veggies: ['broccoli', 'spinach', 'cabbage', 'carrot', 'zucchini'],
    fruits: ['apple', 'banana', 'orange'],
    fats: ['olive oil', 'nuts']
  },
  'Alemanha': {
    carbs: ['kartoffeln', 'vollkornbrot', 'hafer', 'reis', 'linsen'],
    proteinsAnimal: ['hähnchen', 'eier', 'fisch', 'mageres fleisch'],
    proteinsPlant: ['linsen', 'kichererbsen', 'bohnen', 'tofu'],
    veggies: ['salat', 'tomate', 'brokkoli', 'karotte', 'zucchini'],
    fruits: ['apfel', 'banane', 'beeren'],
    fats: ['olivenöl', 'nüsse']
  },
    'Irlanda': {
  carbs: ['batata', 'batata-doce', 'aveia', 'pão integral', 'arroz', 'cevada'],
  proteinsAnimal: ['frango', 'ovos', 'salmão', 'peixe branco', 'carne bovina magra'],
  proteinsPlant: ['lentilhas', 'feijão', 'grão-de-bico', 'ervilhas', 'tofu'],
  veggies: ['brócolis', 'cenoura', 'repolho', 'espinafre', 'abobrinha'],
  fruits: ['maçã', 'banana', 'pera', 'frutas vermelhas'],
  fats: ['azeite de oliva', 'manteiga (moderado)', 'castanhas']
},
  'Itália': {
    carbs: ['riso', 'patate', 'pane integrale', 'avena', 'legumi'],
    proteinsAnimal: ['pollo', 'uova', 'pesce', 'carne magra'],
    proteinsPlant: ['ceci', 'lenticchie', 'fagioli', 'tofu'],
    veggies: ['insalata', 'pomodoro', 'broccoli', 'carota', 'zucchina'],
    fruits: ['mela', 'banana', 'arancia', 'avocado'],
    fats: ['olio d’oliva', 'frutta secca']
  }
};

/* =========================
   Preferências: regras rápidas
========================= */
function parsePreference(pref) {
  const p = String(pref || '').toLowerCase();

  return {
    vegetarian: p.includes('vegetariano'),
    lactoseFree: p.includes('lactose'),
    diabetic1: p.includes('diabético tipo 1'),
    diabetic2: p.includes('diabético tipo 2'),
    carnivore: p.includes('carnívoro')
  };
}

function clampNumber(n, min, max) {
  return Math.min(Math.max(n, min), max);
}

function pick(arr) {
  if (!Array.isArray(arr) || arr.length === 0) return '';
  return arr[Math.floor(Math.random() * arr.length)];
}

/* =========================
   IMC + categorias
========================= */
function getIMCCategory(imc) {
  if (imc < 18.5) return { category: 'Abaixo do peso', color: 'text-blue-600', bg: 'bg-blue-100' };
  if (imc < 25) return { category: 'Peso normal', color: 'text-green-600', bg: 'bg-green-100' };
  if (imc < 30) return { category: 'Sobrepeso', color: 'text-yellow-600', bg: 'bg-yellow-100' };
  if (imc < 35) return { category: 'Obesidade grau I', color: 'text-orange-600', bg: 'bg-orange-100' };
  if (imc < 40) return { category: 'Obesidade grau II', color: 'text-red-600', bg: 'bg-red-100' };
  return { category: 'Obesidade grau III', color: 'text-red-800', bg: 'bg-red-200' };
}

function getDietGoal(category) {
  const map = {
    'Abaixo do peso': 'ganho de peso saudável',
    'Peso normal': 'manutenção',
    'Sobrepeso': 'perda de peso moderada',
    'Obesidade grau I': 'perda de peso moderada',
    'Obesidade grau II': 'perda de peso moderada',
    'Obesidade grau III': 'perda de peso moderada'
  };
  return map[category] || 'manutenção';
}

/* =========================
   Montagem de refeições por objetivo
========================= */
function buildMealTemplates(goal) {
  // Ajusta o “estilo” do prato por objetivo.
  // A seleção final de alimentos será influenciada pelo país + preferência.
  if (goal === 'ganho de peso saudável') {
    return {
      breakfast: ['vitamina', 'overnight oats', 'pão+ovos'],
      snack1: ['castanhas+fruta', 'iogurte+granola', 'sanduíche leve'],
      lunch: ['prato completo'],
      snack2: ['shake', 'fruta+proteína', 'torrada+patê'],
      dinner: ['prato leve completo'],
      supper: ['leite morno', 'chá+lanche leve']
    };
  }

  if (goal === 'perda de peso moderada') {
    return {
      breakfast: ['omelete leve', 'iogurte leve', 'shake verde'],
      snack1: ['legumes+homus', 'fruta pequena', 'castanhas porção pequena'],
      lunch: ['salada+proteína', 'sopa+proteína'],
      snack2: ['chá+fruta', 'iogurte leve', 'água de coco'],
      dinner: ['proteína+legumes', 'salada+proteína'],
      supper: ['chá']
    };
  }

  // manutenção
  return {
    breakfast: ['iogurte+fruta', 'shake verde', 'pão+ovos'],
    snack1: ['fruta+gordura boa', 'castanhas porção pequena'],
    lunch: ['prato completo'],
    snack2: ['chá+lanche leve', 'iogurte leve'],
    dinner: ['proteína+legumes', 'omelete+salada'],
    supper: ['chá']
  };
}

/* =========================
   Regras por preferência na composição
========================= */
function getProteinPool(countryBase, prefFlags) {
  if (prefFlags.carnivore) return countryBase.proteinsAnimal;
  if (prefFlags.vegetarian) return countryBase.proteinsPlant;
  // padrão: mistura, com leve preferência por animal (mais comum)
  return [...countryBase.proteinsAnimal, ...countryBase.proteinsPlant];
}

function getDairyText(prefFlags) {
  if (prefFlags.lactoseFree) return 'bebida vegetal (sem lactose)';
  return 'leite / iogurte';
}

function adjustForDiabetes(text, prefFlags) {
  // Ajustes textuais simples (sem prometer terapêutica)
  // Remove/evita “mel, açúcar, granola doce, sucos”
  if (!prefFlags.diabetic1 && !prefFlags.diabetic2) return text;

  const replacements = [
    { from: /mel/gi, to: 'canela' },
    { from: /granola/gi, to: 'aveia (sem açúcar)' },
    { from: /suco/gi, to: 'água' },
    { from: /açúcar/gi, to: 'sem açúcar' }
  ];

  let out = text;
  for (const r of replacements) out = out.replace(r.from, r.to);
  return out;
}

/* =========================
   Gerador de dieta (7 dias)
========================= */
function generate7DayDiet({ goal, country, preference }) {
  const base = countryFoodBase[country] || countryFoodBase['Brasil'];
  const flags = parsePreference(preference);

  // Pool por país
  const proteinPool = getProteinPool(base, flags);

  // Carbs: em diabetes, reduz escolhas “mais densas” e prioriza integrais/leguminosas
  const carbPool = (flags.diabetic1 || flags.diabetic2)
    ? base.carbs.filter(c => !String(c).toLowerCase().includes('pão') || String(c).toLowerCase().includes('integral'))
    : base.carbs;

  const templates = buildMealTemplates(goal);

  const dairy = getDairyText(flags);

  // Funções rápidas de composição
  const makeBreakfast = () => {
    const t = pick(templates.breakfast);
    const fruit = pick(base.fruits);
    const carb = pick(carbPool);
    const fat = pick(base.fats);
    const protein = pick(proteinPool);

    if (t === 'vitamina') {
      let s = `Vitamina de ${fruit} com ${carb} + ${dairy} e ${fat}`;
      return adjustForDiabetes(s, flags);
    }

    if (t === 'overnight oats') {
      let s = `Overnight oats: ${carb} com ${dairy}, ${fruit} e ${fat}`;
      return adjustForDiabetes(s, flags);
    }

    if (t === 'pão+ovos') {
      const bread = flags.diabetic1 || flags.diabetic2 ? 'pão integral' : pick(['pão integral', 'pão']);
      let s = `${bread} com ovos e ${pick(base.veggies)}`;
      return adjustForDiabetes(s, flags);
    }

    if (t === 'omelete leve') {
      let s = `Omelete com ${pick(base.veggies)} + 1 fruta (${fruit})`;
      return adjustForDiabetes(s, flags);
    }

    if (t === 'iogurte leve') {
      let s = `${dairy} com ${fruit} e ${flags.diabetic1 || flags.diabetic2 ? 'chia' : 'granola'}`;
      return adjustForDiabetes(s, flags);
    }

    // shake verde
    let s = `Shake verde com ${pick(['espinafre', 'couve'])}, ${fruit} e ${carb}`;
    return adjustForDiabetes(s, flags);
  };

  const makeSnack = (type) => {
    const t = pick(type === 1 ? templates.snack1 : templates.snack2);
    const fruit = pick(base.fruits);
    const fat = pick(base.fats);

    if (t === 'castanhas+fruta') {
      let s = `Mix de castanhas + ${fruit}`;
      return adjustForDiabetes(s, flags);
    }
    if (t === 'iogurte+granola') {
      let s = `${dairy} com ${flags.diabetic1 || flags.diabetic2 ? 'aveia (sem açúcar)' : 'granola'} e ${fruit}`;
      return adjustForDiabetes(s, flags);
    }
    if (t === 'sanduíche leve') {
      let s = `Sanduíche no pão integral com ${pick(proteinPool)} e salada`;
      return adjustForDiabetes(s, flags);
    }
    if (t === 'legumes+homus') {
      let s = `Pepino/cenoura com homus`;
      return adjustForDiabetes(s, flags);
    }
    if (t === 'fruta pequena') {
      let s = `1 fruta (${fruit})`;
      return adjustForDiabetes(s, flags);
    }
    if (t === 'castanhas porção pequena') {
      let s = `Castanhas (porção pequena) + água`;
      return adjustForDiabetes(s, flags);
    }
    if (t === 'shake') {
      let s = `Shake proteico com ${dairy} + ${fruit} + ${fat}`;
      return adjustForDiabetes(s, flags);
    }
    if (t === 'fruta+proteína') {
      let s = `${fruit} + ${pick(proteinPool)}`;
      return adjustForDiabetes(s, flags);
    }
    if (t === 'torrada+patê') {
      let s = `Torrada integral com patê (atum/frango/tofu)`;
      return adjustForDiabetes(s, flags);
    }
    if (t === 'chá+lanche leve') {
      let s = `Chá + ${fruit} ou castanhas (pequena porção)`;
      return adjustForDiabetes(s, flags);
    }
    if (t === 'iogurte leve') {
      let s = `${dairy} + ${fruit}`;
      return adjustForDiabetes(s, flags);
    }
    if (t === 'água de coco') {
      // Em diabetes, mantém mas sugere moderação (texto neutro)
      let s = `Água de coco (porção moderada)`;
      return adjustForDiabetes(s, flags);
    }

    // fallback
    let s = `${fruit} + ${fat}`;
    return adjustForDiabetes(s, flags);
  };

  const makeLunch = () => {
    const t = pick(templates.lunch);
    const carb = pick(carbPool);
    const protein = pick(proteinPool);
    const veg1 = pick(base.veggies);
    const veg2 = pick(base.veggies);

    if (t === 'prato completo') {
      let s = `${protein} + ${carb} + salada (${veg1}, ${veg2})`;
      return adjustForDiabetes(s, flags);
    }

    if (t === 'salada+proteína') {
      let s = `Salada grande (${veg1}, ${veg2}) + ${protein} + azeite`;
      return adjustForDiabetes(s, flags);
    }

    // sopa+proteína
    let s = `Sopa de legumes (${veg1}, ${veg2}) + ${protein}`;
    return adjustForDiabetes(s, flags);
  };

  const makeDinner = () => {
    const t = pick(templates.dinner);
    const protein = pick(proteinPool);
    const veg1 = pick(base.veggies);
    const veg2 = pick(base.veggies);
    const carb = pick(carbPool);

    if (t === 'prato leve completo') {
      let s = `${protein} + ${pick(['batata-doce', carb])} + legumes (${veg1}, ${veg2})`;
      return adjustForDiabetes(s, flags);
    }

    if (t === 'proteína+legumes') {
      let s = `${protein} + legumes refogados (${veg1}, ${veg2})`;
      return adjustForDiabetes(s, flags);
    }

    // omelete+salada / salada+proteína
    if (t === 'omelete+salada') {
      let s = `Omelete com ${veg1} + salada (${veg2})`;
      return adjustForDiabetes(s, flags);
    }

    let s = `Salada (${veg1}, ${veg2}) + ${protein}`;
    return adjustForDiabetes(s, flags);
  };

  const makeSupper = () => {
    const t = pick(templates.supper);
    if (t === 'leite morno') {
      let s = `${dairy} morno com canela`;
      return adjustForDiabetes(s, flags);
    }
    if (t === 'chá+lanche leve') {
      let s = `Chá + 1 fruta pequena`;
      return adjustForDiabetes(s, flags);
    }
    // chá
    return `Chá de ervas (sem açúcar)`;
  };

  // Monta 7 dias
  const days = [];
  for (let i = 1; i <= 7; i++) {
    days.push({
      day: i,
      meals: {
        'Café da manhã': makeBreakfast(),
        'Lanche': makeSnack(1),
        'Almoço': makeLunch(),
        'Lanche da tarde': makeSnack(2),
        'Janta': makeDinner(),
        'Ceia': makeSupper()
      }
    });
  }

  return { days, flags };
}

/* =========================
   Render UI
========================= */
function renderResults({ imc, categoryInfo, country, countryData, preference }) {
  const results = document.getElementById('results');
  const resultsContent = document.getElementById('resultsContent');

  results.classList.remove('hidden');

  resultsContent.innerHTML = `
    <div class="space-y-4" id="printArea">
      <div class="p-4 rounded-lg bg-white border border-gray-200">
        <div class="text-center">
          <div class="text-xl font-bold text-gray-800">IA Saúde - IMC com Dieta Programada</div>
          <div class="text-sm text-gray-600">Desenvolvido por Edvan Figuerêdo Araujo</div>
        </div>
      </div>

      <div class="p-6 rounded-lg ${categoryInfo.bg} border-2 border-gray-300">
        <div class="text-4xl font-bold text-gray-800 text-center">
          IMC: ${imc.toFixed(1)}
        </div>
        <div class="text-xl font-semibold ${categoryInfo.color} text-center mt-2">
          ${categoryInfo.category}
        </div>
        <div class="text-sm text-gray-700 text-center mt-3">
          Preferência alimentar: <strong>${escapeHtml(preference)}</strong>
        </div>
      </div>

      <div class="bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-lg border-2 border-gray-300">
        <h3 class="font-bold text-gray-800 mb-4 text-center text-lg">
          Comparação com ${escapeHtml(country)}
        </h3>
        <div class="grid grid-cols-2 gap-4 text-sm">
          <div class="text-center bg-white p-3 rounded-lg">
            <span class="text-gray-600 block mb-1">IMC médio nacional:</span>
            <div class="font-bold text-xl text-green-700">${countryData.avgIMC}</div>
          </div>
          <div class="text-center bg-white p-3 rounded-lg">
            <span class="text-gray-600 block mb-1">Taxa de obesidade:</span>
            <div class="font-bold text-xl text-orange-600">${countryData.obesity}%</div>
          </div>
        </div>
        <div class="mt-4 text-center bg-white p-2 rounded-lg">
          <span class="text-gray-600 text-sm">Ranking mundial: </span>
          <span class="font-bold text-blue-600">${countryData.position}º posição</span>
        </div>
      </div>
    </div>
  `;
}

function renderDiet({ goal, country, preference, diet }) {
  const dietSection = document.getElementById('dietSection');
  const dietType = document.getElementById('dietType');
  const dietMeta = document.getElementById('dietMeta');
  const dietPlan = document.getElementById('dietPlan');

  dietSection.classList.remove('hidden');

  dietType.innerHTML = `<span class="text-orange-800 font-semibold text-lg">Plano focado em: ${escapeHtml(goal)}</span>`;
  dietMeta.innerHTML = `
    <div><strong>País:</strong> ${escapeHtml(country)} | <strong>Preferência:</strong> ${escapeHtml(preference)}</div>
    <div class="text-xs text-gray-600 mt-1">Sugestões com alimentos comuns para classe média no país selecionado (adaptação educativa).</div>
  `;

  let html = '';
  for (const d of diet.days) {
    html += `
      <div class="border-2 border-gray-300 rounded-lg p-4 bg-white shadow-md hover:shadow-lg transition">
        <h3 class="font-bold text-gray-800 mb-3 text-center bg-gradient-to-r from-green-100 to-blue-100 py-2 rounded">
          Dia ${d.day}
        </h3>
        <div class="space-y-2 text-sm">
          ${Object.entries(d.meals).map(([meal, food]) => `
            <div class="border-l-4 border-green-400 pl-3 py-1">
              <div class="font-semibold text-green-800">${escapeHtml(meal)}</div>
              <div class="text-gray-600 text-xs mt-1">${escapeHtml(food)}</div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }

  dietPlan.innerHTML = html;
}

/* =========================
   Segurança básica (escape)
========================= */
function escapeHtml(str) {
  return String(str ?? '')
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}

/* =========================
   Ações
========================= */
function calculateIMC() {
  const weight = Number.parseFloat(document.getElementById('weight').value);
  const height = Number.parseFloat(document.getElementById('height').value);
  const country = document.getElementById('country').value;
  const preference = document.getElementById('preference').value;

  if (!Number.isFinite(weight) || !Number.isFinite(height) || weight <= 0 || height <= 0) {
    alert('Por favor, preencha peso e altura corretamente!');
    return;
  }

  // evita valores absurdos
  const safeWeight = clampNumber(weight, 20, 400);
  const safeHeight = clampNumber(height, 80, 250);

  const heightInMeters = safeHeight / 100;
  const imc = safeWeight / (heightInMeters * heightInMeters);

  const categoryInfo = getIMCCategory(imc);
  const goal = getDietGoal(categoryInfo.category);
  const countryData = countryIMCData[country] || countryIMCData['Brasil'];

  // Render resultados
  renderResults({ imc, categoryInfo, country, countryData, preference });

  // Gera dieta com base em país + preferência + objetivo
  const diet = generate7DayDiet({ goal, country, preference });
  renderDiet({ goal, country, preference, diet });

  // Scroll suave
  document.getElementById('results').scrollIntoView({ behavior: 'smooth', block: 'center' });
}

function printToPDF() {
  // A impressão do navegador permite “Salvar como PDF”
  window.print();
}

/* =========================
   Init
========================= */
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('btnCalculate').addEventListener('click', calculateIMC);
  document.getElementById('btnPrint').addEventListener('click', printToPDF);
});
