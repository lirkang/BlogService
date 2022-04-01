interface ArticleDto {
  readonly id: number
  readonly create_at: number
  readonly nickname: string
  readonly title: string
  readonly content: string
  readonly comment_count: number
  readonly visit_count: number
  readonly cover: string
  readonly delete: number
  readonly introduce: string
  readonly category: string
}

export { ArticleDto }
