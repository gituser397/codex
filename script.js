const services = [
  {
    nome: "Vitra Jardim Europa",
    construtora: "Goldsztein",
    linha: "Inova, Gold, Soluta e Extrema",
    endereco: "Av. Ferdinand Kisslinger, 200 - Porto Alegre",
    imagem: "https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&w=1000&q=80"
  },
  {
    nome: "Med Plex Norte/Sul",
    construtora: "Cyrela",
    linha: "Gold e Citta Due",
    endereco: "R. Gomes Jardins, 201 - Porto Alegre",
    imagem: "https://images.unsplash.com/photo-1465800872432-2f4d63b0d672?auto=format&fit=crop&w=1000&q=80"
  },
  {
    nome: "Skyline Central",
    construtora: "MRV",
    linha: "Premium",
    endereco: "Av. Independência, 840 - Porto Alegre",
    imagem: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1000&q=80"
  },
  {
    nome: "Parque das Torres",
    construtora: "Even",
    linha: "Urban e Prime",
    endereco: "R. Marquês do Herval, 98 - Porto Alegre",
    imagem: "https://images.unsplash.com/photo-1516156008625-3a9d6067fab5?auto=format&fit=crop&w=1000&q=80"
  },
  {
    nome: "Residencial Alto Bela Vista",
    construtora: "Melnick",
    linha: "Prime",
    endereco: "R. Bela Vista, 1550 - Porto Alegre",
    imagem: "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1000&q=80"
  },
  {
    nome: "Jardins da Serra",
    construtora: "Tenda",
    linha: "Essencial",
    endereco: "R. João Abbott, 78 - Caxias do Sul",
    imagem: "https://images.unsplash.com/photo-1495433324511-bf8e92934d90?auto=format&fit=crop&w=1000&q=80"
  },
  {
    nome: "Vista do Guaíba",
    construtora: "Plano&Plano",
    linha: "Signature",
    endereco: "Av. Diário de Notícias, 1200 - Porto Alegre",
    imagem: "https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?auto=format&fit=crop&w=1000&q=80"
  },
  {
    nome: "Pátio Moinhos",
    construtora: "Zaffari Empreendimentos",
    linha: "Gold",
    endereco: "R. Padre Chagas, 345 - Porto Alegre",
    imagem: "https://images.unsplash.com/photo-1524230572899-a752b3835840?auto=format&fit=crop&w=1000&q=80"
  },
  {
    nome: "Condomínio Bosque Azul",
    construtora: "Rossi",
    linha: "Eco",
    endereco: "R. Guilherme Alves, 931 - Porto Alegre",
    imagem: "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=1000&q=80"
  },
  {
    nome: "Ícone Corporate",
    construtora: "Melnick",
    linha: "Business",
    endereco: "Av. Carlos Gomes, 400 - Porto Alegre",
    imagem: "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1000&q=80"
  },
  {
    nome: "Viva Cidade Nova",
    construtora: "Cyrela",
    linha: "Urban",
    endereco: "R. Felipe Neri, 950 - Porto Alegre",
    imagem: "https://images.unsplash.com/photo-1483366774565-c783b9f70e2c?auto=format&fit=crop&w=1000&q=80"
  },
  {
    nome: "Horizon Park",
    construtora: "Even",
    linha: "Prime",
    endereco: "Av. Nilo Peçanha, 1500 - Porto Alegre",
    imagem: "https://images.unsplash.com/photo-1472220625704-91e1462799b2?auto=format&fit=crop&w=1000&q=80"
  },
  {
    nome: "Domus Garden",
    construtora: "Goldsztein",
    linha: "Soluta",
    endereco: "R. Mostardeiro, 120 - Porto Alegre",
    imagem: "https://images.unsplash.com/photo-1430285561322-7808604715df?auto=format&fit=crop&w=1000&q=80"
  },
  {
    nome: "Edifício Aurora",
    construtora: "Rossi",
    linha: "Plus",
    endereco: "R. 24 de Outubro, 520 - Porto Alegre",
    imagem: "https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?auto=format&fit=crop&w=1000&q=80"
  },
  {
    nome: "Complexo Atlântico",
    construtora: "MRV",
    linha: "Business",
    endereco: "Av. Ipiranga, 6700 - Porto Alegre",
    imagem: "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1000&q=80"
  },
  {
    nome: "Residencial Park View",
    construtora: "Melnick",
    linha: "Signature",
    endereco: "R. Casemiro de Abreu, 300 - Porto Alegre",
    imagem: "https://images.unsplash.com/photo-1459535653751-d571815e906b?auto=format&fit=crop&w=1000&q=80"
  },
  {
    nome: "Green Line Tower",
    construtora: "Tenda",
    linha: "Eco",
    endereco: "R. Cristóvão Colombo, 900 - Porto Alegre",
    imagem: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=1000&q=80"
  },
  {
    nome: "Plaza São Pedro",
    construtora: "Cyrela",
    linha: "Gold",
    endereco: "Av. Plínio Brasil Milano, 250 - Porto Alegre",
    imagem: "https://images.unsplash.com/photo-1511452885600-a3d2c9148a31?auto=format&fit=crop&w=1000&q=80"
  },
  {
    nome: "The Point Offices",
    construtora: "Plano&Plano",
    linha: "Business",
    endereco: "R. Anita Garibaldi, 1280 - Porto Alegre",
    imagem: "https://images.unsplash.com/photo-1478061653917-455ba7f4a541?auto=format&fit=crop&w=1000&q=80"
  },
  {
    nome: "Portal do Sol",
    construtora: "Even",
    linha: "Urban",
    endereco: "R. Silva Jardim, 600 - Porto Alegre",
    imagem: "https://images.unsplash.com/photo-1416331108676-a22ccb276e35?auto=format&fit=crop&w=1000&q=80"
  }
];

const BATCH_SIZE = 5;
const MAX_ITEMS = 20;

const listEl = document.getElementById("services-list");
const loadMoreBtn = document.getElementById("load-more");

let rendered = 0;

function createCard(service) {
  const article = document.createElement("article");
  article.className = "service-card";

  article.innerHTML = `
    <div class="service-info">
      <h3 class="service-title">${service.nome}</h3>
      <p class="service-meta"><strong>Construtora:</strong> ${service.construtora}</p>
      <p class="service-meta"><strong>Linhas:</strong> ${service.linha}</p>
      <p class="service-meta"><strong>Endereço:</strong> ${service.endereco}</p>
    </div>
    <img class="service-image" src="${service.imagem}" alt="Imagem do serviço ${service.nome}" loading="lazy" />
  `;

  return article;
}

function renderNextBatch() {
  const nextLimit = Math.min(rendered + BATCH_SIZE, MAX_ITEMS, services.length);

  for (let index = rendered; index < nextLimit; index += 1) {
    listEl.appendChild(createCard(services[index]));
  }

  rendered = nextLimit;

  if (rendered >= MAX_ITEMS || rendered >= services.length) {
    loadMoreBtn.disabled = true;
    loadMoreBtn.textContent = "Todos os serviços foram carregados";
  }
}

loadMoreBtn.addEventListener("click", renderNextBatch);

renderNextBatch();
