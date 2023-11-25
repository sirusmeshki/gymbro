export const accordions = [
  {
    name: "مشخصات فردی",
    options: [
      {
        query: "name",
        title: "نام",
        type: true,
        inputType: "text",
        placeholder: "نام شاگرد را وارد کنید",
      },
      {
        query: "weight",
        title: "وزن",
        type: true,
        inputType: "number",
        placeholder: "وزن شاگرد را وارد کنید",
      },
      {
        query: "height",
        title: "قد",
        type: true,
        inputType: "number",
        placeholder: "قد شاگرد را وارد کنید",
      },
    ],
  },

  {
    name: "جزئیات",
    options: [
      {
        query: "desc",
        title: "توضیحات",
        type: true,
        inputType: "text",
        placeholder: "توضیحات مورد نیاز برنامه را وارد کنید",
      },
      {
        query: "code",
        title: "کد برنامه",
        type: false,
      },
      {
        query: "qr",
        title: "کد QR",
        type: false,
      },
    ],
  },
];
