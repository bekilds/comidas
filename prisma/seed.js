import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

const comidas = [
  // 1. Pratos Principais, Entradas, Salgados, etc.
  {
    id: 1,
    nome: "Espaguete à Carbonara",
    tipo: "Prato Principal",
    preco: 48.00,
    descricao: "Massa italiana com molho cremoso de gemas, queijo Pecorino, pimenta do reino e guanciale (bochecha de porco curada)."
  },
  {
    id: 2,
    nome: "Bife de Chorizo Grelhado",
    tipo: "Prato Principal",
    preco: 75.00,
    descricao: "Corte nobre argentino (300g) grelhado na parrilla. Acompanha batatas rústicas e chimichurri."
  },
  {
    id: 3,
    nome: "Robalo ao Forno com Ervas",
    tipo: "Prato Principal",
    preco: 72.00,
    descricao: "Lombo de robalo assado lentamente com azeite, alecrim, tomilho e legumes da estação."
  },
  {
    id: 4,
    nome: "Curry de Grão de Bico e Espinafre (Vegano)",
    tipo: "Prato Principal",
    preco: 46.00,
    descricao: "Grão de bico e espinafre cozidos em molho de curry indiano com leite de coco. Acompanha arroz basmati."
  },
  {
    id: 5,
    nome: "Bobó de Camarão",
    tipo: "Prato Principal",
    preco: 69.00,
    descricao: "Camarões refogados no azeite de dendê, misturados com creme de mandioca e leite de coco."
  },
  {
    id: 6,
    nome: "Casquinha de Siri",
    tipo: "Entrada",
    preco: 22.00,
    descricao: "Carne de siri refogada com temperos e leite de coco, gratinada com parmesão."
  },
  {
    id: 7,
    nome: "Provolone à Milanesa",
    tipo: "Entrada",
    preco: 29.00,
    descricao: "Fatia grossa de queijo provolone empanada e frita, servida com melaço de cana."
  },
  {
    id: 8,
    nome: "Cheesecake de Frutas Vermelhas",
    tipo: "Sobremesa",
    preco: 24.00,
    descricao: "Torta de queijo cremosa com base de biscoito e cobertura de geleia artesanal de frutas vermelhas."
  },
  {
    id: 9,
    nome: "Crème Brûlée",
    tipo: "Sobremesa",
    preco: 23.00,
    descricao: "Creme de baunilha clássico francês com uma crosta de açúcar maçaricado."
  },
  {
    id: 10,
    nome: "Sopa de Cebola Gratinada",
    tipo: "Sopa",
    preco: 30.00,
    descricao: "Tradicional sopa francesa de cebolas caramelizadas, caldo de carne e torrada coberta com queijo Gruyère."
  },
  {
    id: 11,
    nome: "Frango Xadrez",
    tipo: "Prato Principal",
    preco: 39.00,
    descricao: "Cubos de frango salteados com pimentões coloridos, cebola, amendoim e molho oriental agridoce."
  },
  {
    id: 12,
    nome: "Bolinho de Bacalhau (6 unidades)",
    tipo: "Salgado",
    preco: 32.00,
    descricao: "Autênticos bolinhos portugueses de bacalhau e batata, fritos e sequinhos."
  },
  {
    id: 13,
    nome: "Canja de Galinha Caseira",
    tipo: "Sopa",
    preco: 24.00,
    descricao: "Sopa reconfortante com arroz, peito de frango desfiado, cenoura e batata."
  },
  {
    id: 14,
    nome: "Beirute de Rosbife",
    tipo: "Lanche",
    preco: 34.00,
    descricao: "Pão sírio recheado com rosbife caseiro, queijo prato, alface, tomate e maionese."
  },
  {
    id: 15,
    nome: "Croquete de Carne (Unidade)",
    tipo: "Salgado",
    preco: 8.50,
    descricao: "Croquete cremoso de carne bovina, empanado e frito na hora."
  },
  {
    id: 16,
    nome: "Hambúrguer de Costela",
    tipo: "Lanche",
    preco: 36.00,
    descricao: "Pão australiano, 180g de costela bovina, queijo provolone defumado, rúcula e maionese de alho."
  },
  {
    id: 17,
    nome: "Nhoque de Batata Doce com Ragu de Cordeiro",
    tipo: "Prato Principal",
    preco: 62.00,
    descricao: "Nhoque artesanal de batata doce ao molho rústico de cordeiro cozido lentamente."
  },
  {
    id: 18,
    nome: "Brownie de Chocolate Meio Amargo com Nozes",
    tipo: "Sobremesa",
    preco: 18.00,
    descricao: "Brownie denso e úmido, servido quente com nozes pecan e calda de chocolate."
  },
  {
    id: 19,
    nome: "Guioza (6 unidades)",
    tipo: "Japonês",
    preco: 26.00,
    descricao: "Pastelzinho japonês recheado com carne suína e legumes, cozido no vapor e grelhado."
  },
  {
    id: 20,
    nome: "Paella Valenciana",
    tipo: "Prato Principal",
    preco: 88.00,
    descricao: "Arroz espanhol com açafrão, frutos do mar (camarão, lula, mexilhão), frango e pimentões."
  },
  {
    id: 21,
    nome: "Empada de Camarão",
    tipo: "Salgado",
    preco: 9.50,
    descricao: "Massa podre que derrete na boca, com recheio cremoso de camarão."
  },
  {
    id: 22,
    nome: "Ossobuco com Risoto Milanês",
    tipo: "Prato Principal",
    preco: 82.00,
    descricao: "Corte de vitela cozido lentamente em molho de vinho e vegetais, servido com risoto de açafrão."
  },
  {
    id: 23,
    nome: "Torta de Limão Merengada",
    tipo: "Sobremesa",
    preco: 19.00,
    descricao: "Massa crocante, recheio cítrico de limão e cobertura de merengue suíço maçaricado."
  },
  {
    id: 24,
    nome: "Salada Grega",
    tipo: "Salada",
    preco: 36.00,
    descricao: "Pepino, tomate, cebola roxa, azeitonas pretas, queijo feta e orégano, regados no azeite."
  },
  {
    id: 25,
    nome: "Vaca Atolada",
    tipo: "Prato Principal",
    preco: 49.00,
    descricao: "Costela bovina cozida lentamente em um creme de mandioca, prato típico mineiro."
  },
  {
    id: 26,
    nome: "Palha Italiana de Pistache",
    tipo: "Doce",
    preco: 12.00,
    descricao: "Doce cremoso de brigadeiro branco com pistache e pedaços de biscoito."
  },
  {
    id: 27,
    nome: "Purê de Batata Baroa (Mandioquinha)",
    tipo: "Acompanhamento",
    preco: 18.00,
    descricao: "Purê aveludado de mandioquinha com um toque de manteiga."
  },
  {
    id: 28,
    nome: "Manjar de Coco com Calda de Ameixa",
    tipo: "Sobremesa",
    preco: 16.00,
    descricao: "Pudim firme de coco, regado com uma generosa calda de ameixas pretas."
  },
  {
    id: 29,
    nome: "Pizza Calabresa (Broto)",
    tipo: "Pizza",
    preco: 34.00,
    descricao: "Molho de tomate, muçarela, rodelas de linguiça calabresa defumada e cebola."
  },
  {
    id: 30,
    nome: "Temaki Filadélfia",
    tipo: "Japonês",
    preco: 28.00,
    descricao: "Cone de alga nori recheado com arroz, salmão fresco, cream cheese e cebolinha."
  },
  {
    id: 31,
    nome: "Sagu de Vinho Tinto com Creme Inglês",
    tipo: "Sobremesa",
    preco: 15.00,
    descricao: "Sobremesa gaúcha de bolinhas de tapioca cozidas no suco de uva e vinho, servido com creme."
  },
  {
    id: 32,
    nome: "Steak Tartare",
    tipo: "Entrada",
    preco: 42.00,
    descricao: "Filé mignon cru picado na ponta da faca, temperado com alcaparras, mostarda e gema. Acompanha torradas."
  },
  {
    id: 33,
    nome: "Falafel (Porção 6 unid)",
    tipo: "Entrada",
    preco: 25.00,
    descricao: "Bolinhos fritos de grão de bico e especiarias. Acompanha molho de tahine."
  },
  {
    id: 34,
    nome: "Brigadeiro Gourmet (Unidade)",
    tipo: "Doce",
    preco: 6.00,
    descricao: "Brigadeiro feito com chocolate belga Callebaut."
  },
  {
    id: 35,
    nome: "Farofa de Ovos com Bacon",
    tipo: "Acompanhamento",
    preco: 19.00,
    descricao: "Farofa de mandioca amanteigada com ovos mexidos e bacon crocante."
  },
  {
    id: 36,
    nome: "Baião de Dois",
    tipo: "Prato Principal",
    preco: 45.00,
    descricao: "Prato nordestino com arroz, feijão-fradinho, carne-seca, queijo coalho e coentro."
  },
  {
    id: 37,
    nome: "Cachorro-Quente Prensado",
    tipo: "Lanche",
    preco: 18.00,
    descricao: "Pão francês, duas salsichas, purê de batata, milho, vinagrete e batata palha, prensado na chapa."
  },
  {
    id: 38,
    nome: "PF de Frango Grelhado",
    tipo: "Prato Principal",
    preco: 30.00,
    descricao: "Prato feito com filé de frango grelhado, arroz branco, feijão carioca e salada de alface e tomate."
  },
  {
    id: 39,
    nome: "Wrap de Frango e Cream Cheese",
    tipo: "Lanche",
    preco: 26.00,
    descricao: "Tortilha de trigo recheada com frango desfiado, cream cheese, rúcula e cenoura ralada."
  },
  {
    id: 40,
    nome: "Arroz de Pato",
    tipo: "Prato Principal",
    preco: 68.00,
    descricao: "Clássico português com arroz cozido no caldo do pato, pato desfiado e rodelas de chouriço."
  },
  {
    id: 41,
    nome: "Kibe Assado Recheado",
    tipo: "Prato Principal",
    preco: 38.00,
    descricao: "Kibe de forno recheado com carne moída temperada, nozes e hortelã. Acompanha coalhada."
  },
  {
    id: 42,
    nome: "Lula à Dorê",
    tipo: "Entrada",
    preco: 45.00,
    descricao: "Anéis de lula empanados em massa leve e fritos até dourar. Acompanha molho tártaro."
  },
  {
    id: 43,
    nome: "Sanduíche de Pernil",
    tipo: "Lanche",
    preco: 25.00,
    descricao: "Pão francês, pernil assado e fatiado, e vinagrete. Típico de estádio."
  },
  {
    id: 44,
    nome: "Fajitas de Carne",
    tipo: "Prato Principal",
    preco: 58.00,
    descricao: "Tiras de carne e pimentões salteados na chapa de ferro. Acompanha tortilhas, guacamole e sour cream."
  },
  {
    id: 45,
    nome: "Alfajor de Doce de Leite",
    tipo: "Sobremesa",
    preco: 10.00,
    descricao: "Doce argentino com duas bolachas amanteigadas e recheio de doce de leite, coberto com chocolate."
  },
  {
    id: 46,
    nome: "Pão de Alho (Unidade)",
    tipo: "Acompanhamento",
    preco: 12.00,
    descricao: "Pão recheado com pasta de alho, queijo e ervas, assado na brasa."
  },
  {
    id: 47,
    nome: "Burrata ao Pesto",
    tipo: "Entrada",
    preco: 55.00,
    descricao: "Queijo burrata cremoso servido com molho pesto genovês, tomates cereja e torradas."
  },
  {
    id: 48,
    nome: "Salada de Quinoa com Legumes",
    tipo: "Salada",
    preco: 34.00,
    descricao: "Quinoa cozida, abobrinha, berinjela, pimentão amarelo grelhados e castanhas."
  },
  {
    id: 49,
    nome: "Taco de Carnitas (Unidade)",
    tipo: "Lanche",
    preco: 16.00,
    descricao: "Tortilha de milho macia com carne de porco cozida lentamente (carnitas), cebola roxa e coentro."
  },
  {
    id: 50,
    nome: "Sorvete de Tapioca com Coco",
    tipo: "Sobremesa",
    preco: 17.00,
    descricao: "Sorvete artesanal cremoso de tapioca granulada com pedaços de coco."
  }
];

async function seed() {
  console.log('Start seeding...');

  await prisma.comidas.deleteMany({});

  console.log('Dados antigos deletados. Inserindo 50 novos registros...');

  const result = await prisma.comidas.createMany({
    data: comidas,
    skipDuplicates: true,
  });

  console.log(`Database seeded com ${result.count} novos registros de comidas!`);
  await prisma.$disconnect();
}

seed().catch(e => {
  console.error(e);
  
  prisma.$disconnect();
  process.exit(1);
});