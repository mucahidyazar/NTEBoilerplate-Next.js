type social = {
  id: string
  platform: string
  icon: string
  link: string
}

type message = {
  id: string
  entryId: string
  categoryId: string
  title: string
  author: string
  message: string
  date: string
  socials: social[]
}

// CATEGORIES
// 0 => Today
// 1 => News
// 2 => Popular
// 3 => Issues

export interface entry extends message {
  messages: message[]
}

export const entries: entry[] = [
  {
    id: '0',
    entryId: '0',
    categoryId: '0',
    title: 'Lorem, ipsum dolor.',
    author: 'mucahidyazar',
    message:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus hic nostrum officiis fugiat deserunt quidem id obcaecati corporis, vel dignissimos accusantium corrupti cum error illo, praesentium autem ad. Itaque, provident.',
    date: new Date('2020-04-13T00:00:00.000+08:00').toLocaleDateString(),
    socials: [
      {
        id: '0',
        platform: 'facebook',
        icon: 'f',
        link: 'www.facebook.com',
      },
      {
        id: '1',
        platform: 'twitter',
        icon: 't',
        link: 'www.twitter.com',
      },
    ],
    messages: [
      {
        id: '1',
        entryId: '0',
        categoryId: '0',
        title: 'Lorem, ipsum dolor Lorem, ipsum..',
        author: 'yozgatli',
        message:
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus hic nostrum officiis fugiat deserunt quidem id obcaecat.',
        date: new Date('2019-04-13T00:00:00.000+08:00').toLocaleDateString(),
        socials: [
          {
            id: '0',
            platform: 'facebook',
            icon: 'f',
            link: 'www.facebook.com',
          },
          {
            id: '1',
            platform: 'twitter',
            icon: 't',
            link: 'www.twitter.com',
          },
        ],
      },
      {
        id: '3',
        entryId: '0',
        categoryId: '0',
        title: 'Lorem, ipsum dolor.',
        author: 'globaloflike',
        message:
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus hic nostrum officiis fugiat deserunt quidem id obcaecati corporis, vel dignissimos accusantium corrupti cum error illo, praesentium autem ad. Itaque, provident. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi quia explicabo voluptatum esse dolore, voluptates sed nisi minima, nulla veritatis ducimus perferendis quae ut incidunt et excepturi totam velit porro pariatur consectetur tempora libero temporibus placeat! Architecto dolore cum voluptas!',
        date: new Date('2020-04-13T00:00:00.000+08:00').toLocaleDateString(),
        socials: [
          {
            id: '0',
            platform: 'facebook',
            icon: 'f',
            link: 'www.facebook.com',
          },
          {
            id: '1',
            platform: 'twitter',
            icon: 't',
            link: 'www.twitter.com',
          },
        ],
      },
      {
        id: '4',
        entryId: '0',
        categoryId: '0',
        title: 'Lorem, ipsum dolor. Lorem ipsum dolor sit amet consectetur.',
        author: 'mommy',
        message: 'Lorem ipsum provident.',
        date: new Date('2018-04-13T00:00:00.000+08:00').toLocaleDateString(),
        socials: [
          {
            id: '0',
            platform: 'facebook',
            icon: 'f',
            link: 'www.facebook.com',
          },
          {
            id: '1',
            platform: 'twitter',
            icon: 't',
            link: 'www.twitter.com',
          },
        ],
      },
    ],
  },
  {
    id: '5',
    entryId: '1',
    categoryId: '0',
    title: 'Lorem, ipsum dolor Lorem ipsum dolor sit amet..',
    author: 'mucahidyazar',
    message:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus hic nostrum officiis fugiat deserunt quidem id.',
    date: new Date('2020-04-13T00:00:00.000+08:00').toLocaleDateString(),
    socials: [
      {
        id: '0',
        platform: 'facebook',
        icon: 'f',
        link: 'www.facebook.com',
      },
      {
        id: '1',
        platform: 'twitter',
        icon: 't',
        link: 'www.twitter.com',
      },
    ],
    messages: [],
  },
  {
    id: '6',
    entryId: '2',
    categoryId: '1',
    title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    author: 'whoyouare',
    message: 'Lorem Itaque, provident.',
    date: new Date('2020-04-13T00:00:00.000+08:00').toLocaleDateString(),
    socials: [
      {
        id: '0',
        platform: 'facebook',
        icon: 'f',
        link: 'www.facebook.com',
      },
      {
        id: '1',
        platform: 'twitter',
        icon: 't',
        link: 'www.twitter.com',
      },
    ],
    messages: [],
  },
  {
    id: '7',
    entryId: '3',
    categoryId: '2',
    title: 'Lorem ipsum dolor sit.',
    author: 'mucahidyazar',
    message:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus hic nostrum officiis fugiat deserunt quidem id obcaecati corporis.',
    date: new Date('2020-05-13T00:00:00.000+08:00').toLocaleDateString(),
    socials: [
      {
        id: '0',
        platform: 'facebook',
        icon: 'f',
        link: 'www.facebook.com',
      },
      {
        id: '1',
        platform: 'twitter',
        icon: 't',
        link: 'www.twitter.com',
      },
    ],
    messages: [],
  },
  {
    id: '8',
    entryId: '4',
    categoryId: '3',
    title: 'Lorem ipsum dolor sit amet..',
    author: 'testtest',
    message:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus hic nostrum officiis fugiat deserunt quidem id obcaecati corporis, vel dignissimos accusantium corruItaque, provident.',
    date: new Date('2020-02-13T00:00:00.000+08:00').toLocaleDateString(),
    socials: [
      {
        id: '0',
        platform: 'facebook',
        icon: 'f',
        link: 'www.facebook.com',
      },
      {
        id: '1',
        platform: 'twitter',
        icon: 't',
        link: 'www.twitter.com',
      },
    ],
    messages: [],
  },
  {
    id: '9',
    entryId: '5',
    categoryId: '0',
    title: 'Lorem, ipsum dolor.',
    author: 'test123',
    message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    date: new Date('2020-01-13T00:00:00.000+08:00').toLocaleDateString(),
    socials: [
      {
        id: '0',
        platform: 'facebook',
        icon: 'f',
        link: 'www.facebook.com',
      },
      {
        id: '1',
        platform: 'twitter',
        icon: 't',
        link: 'www.twitter.com',
      },
    ],
    messages: [],
  },
]
