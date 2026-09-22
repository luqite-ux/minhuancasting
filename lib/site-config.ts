// Single replaceable site origin. Update once a production domain is assigned.
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL?.trim().replace(/\/$/, "") || "https://minhuancasting.com"

export const COMPANY = {
  legalNameEn: "Changzhou Minhuan Precision Casting Co., Ltd.",
  shortName: "Minhuan Precision Casting",
  brandName: "MINHUAN JINGZHU",
  foundedYear: 2009,
  monthlyCapacityTons: 40,
  productionLines: 1,
  address: {
    line1: "No. 154, Dongdu West Road",
    line2: "Luoyang Town, Wujin District",
    city: "Changzhou",
    province: "Jiangsu",
    country: "China",
    full: "No. 154, Dongdu West Road, Luoyang Town, Wujin District, Changzhou, Jiangsu, China",
  },
  email: "info@minhuancasting.com",
  phones: ["+86 139 1434 4192", "+86 138 1501 5042"],
  catalogueSize: 282,
} as const

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
  { label: "Capabilities", href: "/capabilities" },
  { label: "About", href: "/about" },
  { label: "News", href: "/news" },
  { label: "Contact", href: "/contact" },
] as const

export function getCurrentYear() {
  return new Date().getFullYear()
}

export function copyrightLine() {
  return `© ${getCurrentYear()} ${COMPANY.legalNameEn.replace(/[.,;:]+$/, "")}. All rights reserved.`
}
