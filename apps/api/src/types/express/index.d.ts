export {}

declare global {
  namespace Express {
    export interface Request {
      job?: {
        id: string
        title: string
        description: string
        company: string
        location: string
        salary: number
        created_at: string
        updated_at: string
      }
      user?: {
        _id?: string
        name?: string
        email: string
        password: string
      }
    }
  }
}
