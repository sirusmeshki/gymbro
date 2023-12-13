export const accordions = [
    {
        name: 'مشخصات فردی',
        options: [
            {
                query: 'name',
                title: 'نام',
                type: true,
                inputType: 'text',
                placeholder: 'س، م',
            },
            {
                query: 'weight',
                title: 'وزن',
                type: true,
                inputType: 'number',
                placeholder: '80',
            },
            {
                query: 'height',
                title: 'قد',
                type: true,
                inputType: 'number',
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
                type: true,
                inputType: 'text',
                placeholder: 'توضیحات مورد نیاز برنامه',
            },
            {
                query: 'code',
                title: 'کد برنامه',
                type: false,
            },
            {
                query: 'qr',
                title: 'کد QR',
                type: false,
            },
        ],
    },
]
