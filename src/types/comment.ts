interface CommentDto {
  readonly id: number
  readonly nickname: string
  readonly username: string
  readonly deleted: number
  readonly content: string
  readonly create_time: string
  readonly article_id: number
  readonly avatar: string
  readonly anonymous: number
  readonly update_time: string
}

export { CommentDto }
