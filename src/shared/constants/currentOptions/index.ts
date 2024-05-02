import type { SearchTypes } from "~/shared/ui/search/type";

export const currentOptions: SearchTypes = {
  order_number: {
    title: "Номер заказа",
    placeholder: "Введите номер заказа"
  },
  psid: {
    title: "Номер фотосессии",
    placeholder: "Введите номер фотосессии"
  },
  client_id: {
    title: "Клиент ID",
    placeholder: "Введите ID клиента"
  },
  phone: {
    title: "Телефон",
    placeholder: "Введите номер телефона"
  },
  email: {
    title: "Email",
    placeholder: "Введите email"
  },
  payer: {
    title: "Плательщик, ребенок",
    placeholder: "Введите номер плательщика, ребёнка"
  }
};
