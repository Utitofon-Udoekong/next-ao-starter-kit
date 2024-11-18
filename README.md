# Next + AO Template

A production-ready template for building decentralized applications using Next.js and AO (Arweave Operating System). This template uses the Next.js 14 App Router and provides built-in AO integration patterns.

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Features

- ⚡️ Next.js 14 with App Router
- 🔗 AO integration for decentralized computing
- 🌐 ArConnect wallet connection
- 🔄 Real-time message updates
- 🎨 Tailwind CSS 
- 📱 Responsive and mobile-first
- 🔒 TypeScript for type safety

## Prerequisites

- Node.js 16.x or later
- ArConnect wallet
- Basic understanding of AO concepts and Arweave
- npm, yarn, bun or pnpm

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/Utitofon-Udoekong/next-ao-starter-kit
cd next-ao-starter-kit
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm dev
```

4. Set up the AO Process:
```bash
# Change to the ao directory
cd src/ao

# Start an AO Process
aos <PROCESS_NAME> 
or
aos

# Load the chatroom.lua file
.load chatroom.lua
```


Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js and AO, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [AO Documentation](https://cookbook_ao.arweave.dev/)
- [Arweave Documentation](https://docs.arweave.org/)

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Support

For support, please [open an issue](https://github.com/Utitofon-Udoekong/next-ao-starter-kit/issues) or join the [AO Discord community](https://discord.com/invite/qWgGxJKwNJ).
