import { PostType } from '@/types/Post';

export const PostsListData: PostType[] = [
  {
    id: '1',
    title: 'Искусственный интеллект в повседневной жизни',
    meta_title: 'ИИ в быту: как технологии меняют нашу жизнь',
    description: 'Обзор современных приложений искусственного интеллекта в домашнем хозяйстве и повседневной жизни.',
    imageUrl: 'https://loremflickr.com/800/600/paris',
    categories: ['school', 'harvest'],
    author: 'auth1',
    tags: ['ИИ', 'умный дом', 'технологии будущего'],
    createdAt: new Date('2024-03-10'),
    updatedAt: new Date('2024-03-10'),
    status: 'published',
    comments: [
      {
        id: 'com1',
        author: 'Мария',
        text: 'Отличная статья! Очень информативно.',
        createdAt: new Date('2024-03-11'),
      }
    ],
    slug: 'ai-in-everyday-life',
    content: 'Содержание статьи об ИИ в повседневной жизни...',
    languageCode: 'uk'
  },
  {
    id: '2',
    title: 'Топ-10 направлений для путешествий в 2024 году',
    meta_title: 'Лучшие места для отдыха в 2024',
    description: 'Подборка самых интересных и популярных туристических направлений на 2024 год.',
    imageUrl: 'https://loremflickr.com/800/600/travel',
    categories: ['forgiveness'],
    author: 'auth2',
    tags: ['путешествия', 'отпуск', 'туризм'],
    createdAt: new Date('2024-04-05'),
    updatedAt: new Date('2024-04-05'),
    status: 'published',
    comments: [],
    slug: 'top-10-travel-destinations-2024',
    content: 'Содержание статьи о топ-10 направлениях для путешествий...',
    languageCode: 'en'
  },
  {
    id: '3',
    title: 'Здоровое питание: мифы и реальность',
    meta_title: 'Разоблачение мифов о здоровом питании',
    description: 'Анализ популярных заблуждений о здоровом питании и научно обоснованные факты.',
    imageUrl: 'https://loremflickr.com/800/600/dog',
    categories: ['school', 'harvest'],
    author: 'auth3',
    tags: ['здоровое питание', 'диета', 'нутрициология'],
    createdAt: new Date('2024-05-15'),
    updatedAt: new Date('2024-05-15'),
    status: 'published',
    comments: [
      {
        id: 'com2',
        author: 'Анна',
        text: 'Спасибо за развенчание мифов! Очень полезная информация.',
        createdAt: new Date('2024-05-16'),
      }
    ],
    slug: 'healthy-eating-myths-and-reality',
    content: 'Содержание статьи о мифах и реальности здорового питания...',
    languageCode: 'ru'
  },
  {
    id: '4',
    title: 'Криптовалюты: инвестировать или нет?',
    meta_title: 'Pros and Cons инвестирования в криптовалюты',
    description: 'Анализ рисков и возможностей инвестирования в криптовалюты в 2024 году.',
    imageUrl: 'https://loremflickr.com/800/600/paris',
    categories: ['praise_thanksgiving'],
    author: 'auth4',
    tags: ['криптовалюты', 'инвестиции', 'биткоин'],
    createdAt: new Date('2024-06-20'),
    updatedAt: new Date('2024-06-20'),
    status: 'published',
    comments: [],
    slug: 'cryptocurrencies-invest-or-not',
    content: 'Содержание статьи о инвестициях в криптовалюты...',
    languageCode: 'ru'
  },
  {
    id: '5',
    title: 'Как начать свой бизнес в 2024 году',
    meta_title: 'Пошаговое руководство по запуску стартапа',
    description: 'Практические советы и стратегии для начинающих предпринимателей в современных реалиях.',
    imageUrl: 'https://loremflickr.com/800/600/cat',
    categories: ['school', 'praise_thanksgiving'],
    author: 'auth1',
    tags: ['стартап', 'бизнес', 'предпринимательство'],
    createdAt: new Date('2024-07-01'),
    updatedAt: new Date('2024-07-01'),
    status: 'published',
    comments: [
      {
        id: 'com3',
        author: 'Игорь',
        text: 'Очень вдохновляющая статья! Спасибо за конкретные шаги.',
        createdAt: new Date('2024-07-02'),
      }
    ],
    slug: 'how-to-start-business-2024',
    content: 'Содержание статьи о запуске бизнеса в 2024 году...',
    languageCode: 'ru'
  },
  {
    id: '6',
    title: 'Экологичный образ жизни: с чего начать',
    meta_title: 'Практические шаги к экологичному образу жизни',
    description: 'Простые способы сделать свою повседневную жизнь более экологичной и снизить углеродный след.',
    imageUrl: 'https://loremflickr.com/800/600/home',
    categories: ['praise_thanksgiving'],
    author: 'auth5',
    tags: ['экология', 'зеленый образ жизни', 'устойчивое развитие'],
    createdAt: new Date('2024-08-10'),
    updatedAt: new Date('2024-08-10'),
    status: 'published',
    comments: [],
    slug: 'eco-friendly-lifestyle-where-to-start',
    content: 'Содержание статьи об экологичном образе жизни...',
    languageCode: 'ru'
  },
  {
    id: '7',
    title: 'Обзор лучших книг 2023 года',
    meta_title: 'Топ книжных новинок: что стоит прочитать',
    description: 'Подборка самых интересных и влиятельных книг, вышедших в 2023 году.',
    imageUrl: 'https://loremflickr.com/800/600/books',
    categories: ['praise_thanksgiving', 'harvest'],
    author: 'auth6',
    tags: ['книги', 'чтение', 'литература'],
    createdAt: new Date('2024-01-05'),
    updatedAt: new Date('2024-01-05'),
    status: 'published',
    comments: [
      {
        id: 'com4',
        author: 'Павел',
        text: 'Отличная подборка! Уже заказал несколько книг из списка.',
        createdAt: new Date('2024-01-06'),
      }
    ],
    slug: 'best-books-2023-review',
    content: 'Содержание обзора лучших книг 2023 года...',
    languageCode: 'ru'
  },
  {
    id: '8',
    title: 'Тренировка для начинающих: руководство',
    meta_title: 'Как начать тренироваться: пошаговая инструкция',
    description: 'Простые техники тренировки для тех, кто хочет начать практику с нуля.',
    imageUrl: 'https://loremflickr.com/800/600/sky',
    categories: ['harvest'],
    author: 'auth8',
    tags: ['тренировка', 'осознанность', 'здоровье'],
    createdAt: new Date('2024-02-15'),
    updatedAt: new Date('2024-02-15'),
    status: 'published',
    comments: [],
    slug: 'train-for-beginners-guide',
    content: 'Содержание руководства по тренировке для начинающих...',
    languageCode: 'ru'
  },
  {
    id: '9',
    title: 'Будущее работы: тренды 2024 года',
    meta_title: 'Как изменится рынок труда в 2024',
    description: 'Анализ основных тенденций на рынке труда и прогнозы экспертов на ближайшее будущее.',
    imageUrl: 'https://loremflickr.com/800/600/work',
    categories: ['forgiveness', 'harvest'],
    author: 'auth9',
    tags: ['работа будущего', 'карьера', 'рынок труда'],
    createdAt: new Date('2024-03-20'),
    updatedAt: new Date('2024-03-20'),
    status: 'published',
    comments: [
      {
        id: 'com5',
        author: 'Елена',
        text: 'Очень интересный прогноз. Заставляет задуматься о своем профессиональном развитии.',
        createdAt: new Date('2024-03-21'),
      }
    ],
    slug: 'future-of-work-trends-2024',
    content: 'Содержание статьи о будущем работы и трендах 2024 года...',
    languageCode: 'ru'
  },
  {
    id: '10',
    title: 'Революция в энергетике: прорыв в технологии солнечных батарей',
    meta_title: 'Новые солнечные батареи: эффективность и доступность',
    description: 'Обзор последних достижений в области солнечной энергетики и их влияние на будущее альтернативных источников энергии.',
    imageUrl: 'https://loremflickr.com/800/600/sun',
    categories: ['school'],
    author: 'auth10',
    tags: ['солнечная энергия', 'зеленые технологии', 'инновации'],
    createdAt: new Date('2024-04-15'),
    updatedAt: new Date('2024-04-15'),
    status: 'published',
    comments: [],
    slug: 'solar-panel-technology-breakthrough',
    content: 'Содержание статьи о прорыве в технологии солнечных батарей...',
    languageCode: 'ru'
  },
  {
    id: '11',
    title: 'Психология цвета в маркетинге: как влиять на решения покупателей',
    meta_title: 'Использование цвета в маркетинговых стратегиях',
    description: 'Анализ влияния различных цветов на поведение потребителей и их применение в маркетинговых кампаниях.',
    imageUrl: 'https://loremflickr.com/800/600/paris',
    categories: ['school', 'forgiveness'],
    author: 'auth11',
    tags: ['маркетинг', 'психология цвета', 'брендинг'],
    createdAt: new Date('2024-05-20'),
    updatedAt: new Date('2024-05-20'),
    status: 'published',
    comments: [
      {
        id: 'com6',
        author: 'Максим',
        text: 'Fascinating! Никогда не думал, что цвет может иметь такое влияние.',
        createdAt: new Date('2024-05-21'),
      }
    ],
    slug: 'color-psychology-in-marketing',
    content: 'Содержание статьи о психологии цвета в маркетинге...',
    languageCode: 'ru'
  },
  {
    id: '12',
    title: 'Как выучить новый язык за 3 месяца: методика погружения',
    meta_title: 'Эффективное изучение языка: метод тотального погружения',
    description: 'Пошаговое руководство по быстрому и эффективному изучению иностранного языка с помощью метода полного погружения.',
    imageUrl: 'https://loremflickr.com/800/600/school',
    categories: ['praise_thanksgiving', 'harvest'],
    author: 'auth12',
    tags: ['изучение языков', 'образование', 'самообразование'],
    createdAt: new Date('2024-06-10'),
    updatedAt: new Date('2024-06-10'),
    status: 'published',
    comments: [],
    slug: 'learn-new-language-in-3-months',
    content: 'Содержание статьи о методике изучения языка...',
    languageCode: 'ru'
  },
  {
    id: '13',
    title: 'Будущее медицины: персонализированная генная терапия',
    meta_title: 'Генная терапия: революция в лечении наследственных заболеваний',
    description: 'Обзор последних достижений в области генной терапии и их потенциальное влияние на лечение ранее неизлечимых болезней.',
    imageUrl: 'https://loremflickr.com/800/600/health',
    categories: ['school', 'harvest'],
    author: 'auth4',
    tags: ['генная терапия', 'медицина будущего', 'биотехнологии'],
    createdAt: new Date('2024-07-05'),
    updatedAt: new Date('2024-07-05'),
    status: 'published',
    comments: [
      {
        id: 'com7',
        author: 'Дмитрий',
        text: 'Невероятные перспективы! Надеюсь, это поможет многим людям.',
        createdAt: new Date('2024-07-06'),
      }
    ],
    slug: 'future-of-medicine-personalized-gene-therapy',
    content: 'Содержание статьи о персонализированной генной терапии...',
    languageCode: 'ru'
  },
  {
    id: '14',
    title: 'Как начать инвестировать в искусство: руководство для начинающих',
    meta_title: 'Инвестиции в искусство: с чего начать',
    description: 'Практические советы по началу инвестирования в предметы искусства для новичков: от выбора направления до оценки рисков.',
    imageUrl: 'https://loremflickr.com/800/600/investment',
    categories: ['school', 'praise_thanksgiving'],
    author: 'auth1',
    tags: ['инвестиции в искусство', 'коллекционирование', 'финансы'],
    createdAt: new Date('2024-08-01'),
    updatedAt: new Date('2024-08-01'),
    status: 'published',
    comments: [],
    slug: 'how-to-start-investing-in-art',
    content: 'Содержание руководства по инвестированию в искусство...',
    languageCode: 'en'
  }
];
