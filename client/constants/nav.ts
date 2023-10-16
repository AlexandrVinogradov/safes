export const nav: NavType[] = [
	{ name: 'Каталог', to: '/catalog', id: 'catalog' },
	{ name: 'О компании', to: '/about-company', id: 'aboutCompany' },
	{ name: 'Статьи', to: '/information', id: 'information' },
	{ name: 'Инструкции', to: '/instruction', id: 'instruction' },
	{ name: 'Производители', to: '/manufacturers', id: 'manufacturers' },
	{ name: 'Доставка и оплата', to: '/dostavka', id: 'delivery' },
	{ name: 'Контакты', to: '/contacts', id: 'contacts' },
]

export const mobileNavLinks = ['aboutCompany', 'information', 'instruction', 'delivery', 'contacts']

export type MobileScreenType = 'menu' | 'catalog' | 'manufacturers'
export type NavType = { name: string; to: string; id: string }
