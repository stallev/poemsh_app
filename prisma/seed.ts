import { PrismaClient } from '@prisma/client'
import { hash } from 'bcrypt'

const prisma = new PrismaClient()

async function main() {
  // Создание пользователей
  const adminExists = await prisma.user.findUnique({ where: { email: 'admin@example.com' } });
  let admin;
  if (!adminExists) {
    const adminPassword = await hash('admin123', 10)
    admin = await prisma.user.create({
      data: {
        email: 'admin@example.com',
        password: adminPassword,
        name: 'Admin User',
        role: 'ADMINISTRATOR',
        verified: true,
        isApproved: true,
      },
    })
  };

  const authorPassword = await hash('author123', 10)
  const author = await prisma.user.create({
    data: {
      email: 'author@example.com',
      password: authorPassword,
      name: 'Author User',
      role: 'AUTHOR',
      verified: true,
      isApproved: true,
    },
  })

  // Создание категорий с переводами
  const categories = [
    {
      slug: 'school', translations: [
        { name: 'School', languageCode: 'en' },
        { name: 'Школа', languageCode: 'ru' },
        { name: 'Школа', languageCode: 'uk' }
      ]
    },
    {
      slug: 'harvest', translations: [
        { name: 'Harvest', languageCode: 'en' },
        { name: 'Жатва', languageCode: 'ru' },
        { name: 'Жнива', languageCode: 'uk' }
      ]
    },
    {
      slug: 'forgiveness', translations: [
        { name: 'Forgiveness', languageCode: 'en' },
        { name: 'Прощение', languageCode: 'ru' },
        { name: 'Прощення', languageCode: 'uk' }
      ]
    },
    {
      slug: 'praise_thanksgiving', translations: [
        { name: 'Praise and Thanksgiving', languageCode: 'en' },
        { name: 'Хвала и благодарение', languageCode: 'ru' },
        { name: 'Хвала i подяка', languageCode: 'uk' }
      ]
    },
    {
      slug: 'other', translations: [
        { name: 'Other', languageCode: 'en' },
        { name: 'Разное', languageCode: 'ru' },
        { name: 'Різне', languageCode: 'uk' }
      ]
    },
  ]

  await Promise.all(categories.map(category => prisma.category.create({
    data: {
      slug: category.slug,
      translations: {
        create: category.translations
      }
    }
  })));

  // Создание примера поста
  const post = await prisma.post.create({
    data: {
      title: 'First Post',
      content: 'This is the content of the first post.',
      authorId: author.id,
      languageCode: 'en',
      status: 'PUBLISHED',
      categories: {
        create: [
          { category: { connect: { slug: 'school' } } }
        ]
      }
    }
  })

  console.log({ admin, author, categories, post })
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
