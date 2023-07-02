## PostIT

Post whatever you want, whenever you want...

Tutorial by [developedbyed](https://www.youtube.com/watch?v=4xduSsxa5Os).

## Tech Stack

### Front-End
- ReactJS
- TailwindCSS

### Backend
- NextJS
- Prisma
- NextAuthJS
- PostgreSQL (Railway)
- Google Cloud

### Notes

1. Start project with this command. Use <b>Typescript</b> and <b>Tailwind CSS</b>.
```javascript
npx create-next-app@latest
```

2. Remove unnecessary code from sample files.
```javascript
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Get started by editing&nbsp;
          <code className="font-mono font-bold">app/page.tsx</code>
        </p>
        .
        .
        .
        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Deploy{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a>
      </div>
    </main>
  )
}
```

to something like this.
```javascript
export default function Home() {
  return (
    <main className="py-10 px-10 text-9xl">
      <h1>Hello World</h1>
    </main>
  );
}
```

3. Follow this [Prisma Guide](https://www.prisma.io/docs/getting-started/quickstart) to set up Prisma for the NextJS project.

4. Add this to your <b>client.js</b> file in /prisma.

```javascript
import { PrismaClient } from "@prisma/client"

const client = globalThis.prisma || new PrismaClient()
if (process.env.NODE_ENV !== "production") globalThis.prisma = client

export default client
```

5. Migrate to Railway
```console
npx prisma migrate dev
```

6. For <b>NextAuthJS</b>, the following steps can be complicated.
```console
npm install next-auth
npm install @prisma/client @next-auth/prisma-adapter
```

Add this to [pages/api/auth/[...nextauth].js](/pages/api/auth).
```javascript
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const authOptions = {
  // Configure one or more authentication providers
  adapter: PrismaAdapter(prisma),
  secret: process.env.AUTH_SECRET,
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    // ...add more providers here
  ],
}

export default NextAuth(authOptions);
```
