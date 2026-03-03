import 'next-auth'
import 'next-auth/jwt'
import { DefaultSession } from 'next-auth'

declare module 'next-auth' {
  interface User {
    mustChangePassword?: boolean
  }

  interface Session {
    user: {
      mustChangePassword?: boolean
    } & DefaultSession['user']
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    mustChangePassword?: boolean
  }
}
