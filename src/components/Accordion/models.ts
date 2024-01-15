export const accordions = [
    {
        name: 'طرح',
        options: [
            {
                query: 'design',
                title: 'مدل',
                type: 'selectbox' as const,
                options: ['1', '2'],
                placeholder: undefined,
            },
            {
                query: 'image',
                title: 'عکس',
                type: 'checkbox' as const,
                options: undefined,
                placeholder: undefined,
            },
            {
                query: 'counter',
                title: 'شمارنده',
                type: 'checkbox' as const,
                options: undefined,
                placeholder: undefined,
            },
        ],
    },
    {
        name: 'مشخصات فردی',
        options: [
            {
                query: 'name',
                title: 'نام',
                type: 'text' as const,
                options: undefined,
                placeholder: 'س، م',
            },
            {
                query: 'weight',
                title: 'وزن',
                type: 'number' as const,
                options: undefined,
                placeholder: '80',
            },
            {
                query: 'height',
                title: 'قد',
                type: 'number' as const,
                options: undefined,
                placeholder: '180',
            },
        ],
    },

    {
        name: 'جزئیات',
        options: [
            {
                query: 'desc',
                title: 'توضیحات',
                type: 'text' as const,
                options: undefined,
                placeholder: 'توضیحات مورد نیاز برنامه',
            },
            {
                query: 'code',
                title: 'کد برنامه',
                options: undefined,
                type: 'checkbox' as const,
                placeholder: undefined,
            },
            {
                query: 'qr',
                title: 'کد QR',
                options: undefined,
                type: 'checkbox' as const,
                placeholder: undefined,
            },
        ],
    },
]
