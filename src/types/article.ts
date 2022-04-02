interface ArticleDto {
  readonly id: number
  readonly create_time: string
  readonly update_time: string
  readonly username: string
  readonly nickname: string
  readonly title: string
  readonly comment_count: number
  readonly visit_count: number
  readonly cover: string
  readonly deleted: number
  readonly content: string
  readonly introduce: string
  readonly category: string
}

export { ArticleDto }
