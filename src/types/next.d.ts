export interface Metadata {
  title: string
  description: string
  keywords?: string
  openGraph?: {
    title: string
    description: string
    type: string
    locale?: string
    siteName?: string
  }
}

export interface PageProps {
  params: { [key: string]: string }
  searchParams: { [key: string]: string | string[] | undefined }
}
