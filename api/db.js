const faker = require('faker');

const TOTAL_PAGES = 5;

const baseProducts = [
    {
        name: 'O Segredo da Floresta',
        author: 'Mariana Alves',
        description: faker.lorem.paragraph(),
        image_url: 'https://images-na.ssl-images-amazon.com/images/I/81WojUxbbFL.jpg',
        category: 'fantasia'
    },
    {
        name: 'Algoritmos Descomplicados',
        author: 'Carlos Mendes',
        description: faker.lorem.paragraph(),
        image_url: 'https://images-na.ssl-images-amazon.com/images/I/41as+WafrFL.jpg',
        category: 'tecnologia'
    },
    {
        name: 'Amor em Paris',
        author: 'Juliana Rocha',
        description: faker.lorem.paragraph(),
        image_url: 'https://images-na.ssl-images-amazon.com/images/I/71aFt4+OTOL.jpg',
        category: 'romance'
    },
    {
        name: 'Mistérios da Mente',
        author: 'Fernando Lima',
        description: faker.lorem.paragraph(),
        image_url: 'https://images-na.ssl-images-amazon.com/images/I/61IBBVJvSDL.jpg',
        category: 'psicologia'
    },
    {
        name: 'Histórias que Inspiram',
        author: 'Ana Souza',
        description: faker.lorem.paragraph(),
        image_url: 'https://images-na.ssl-images-amazon.com/images/I/81eB+7+CkUL.jpg',
        category: 'biografia'
    },
    {
        name: 'O Código do Futuro',
        author: 'Ricardo Martins',
        description: faker.lorem.paragraph(),
        image_url: 'https://images-na.ssl-images-amazon.com/images/I/71KilybDOoL.jpg',
        category: 'ficcao-cientifica'
    },
    {
        name: 'A Arte da Produtividade',
        author: 'Patrícia Fernandes',
        description: faker.lorem.paragraph(),
        image_url: 'https://images-na.ssl-images-amazon.com/images/I/71tbalAHYCL.jpg',
        category: 'desenvolvimento-pessoal'
    },
    {
        name: 'Segredos da História',
        author: 'Lucas Oliveira',
        description: faker.lorem.paragraph(),
        image_url: 'https://images-na.ssl-images-amazon.com/images/I/91bYsX41DVL.jpg',
        category: 'historia'
    },
]

const allProducts = new Array(TOTAL_PAGES).fill(1).reduce((acc) => {
    const products = baseProducts.map(book => ({
        ...book,
        id: faker.datatype.uuid(),
        price_in_cents: faker.datatype.number({
            min: 3000,
            max: 12000,
        }),
        sales: faker.datatype.number(100),
        created_at: faker.date.past(),
        pages: faker.datatype.number({ min: 100, max: 600 }),
        publisher: faker.company.companyName(),
        isbn: faker.datatype.uuid()
    })).sort(() => .5 - Math.random());

    return [...acc, ...products]
}, [])

module.exports = {
    products: allProducts
}
