// Footer Navigation
// ------------
// Description: The footer navigation data for the website.
export interface Logo {
	src: string
	alt: string
	text: string
}

export interface FooterAbout {
	title: string
	aboutText: string
	logo: Logo
}

export interface SubCategory {
	subCategory: string
	subCategoryLink: string
}

export interface FooterColumn {
	category: string
	subCategories: SubCategory[]
}

export interface SubFooter {
	copywriteText: string
}

export interface FooterData {
	footerAbout: FooterAbout
	footerColumns: FooterColumn[]
	subFooter: SubFooter
}

export async function getFooterNavigationData(lang: string) {
	if (lang === 'es') {
		const { default: data } = await import('../data/json-files/es/footerNavigationData.json')
		return data as FooterData
	} else {
		const { default: data } = await import('../data/json-files/en/footerNavigationData.json')
		return data as FooterData
	}
}
