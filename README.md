# Namma Kumata - Local Business Directory

A Justdial-style local business directory app specifically for Kumata, featuring a clean mobile-first design and easy-to-use interface.

## Features

### User Side
- Browse businesses by categories
- Search functionality
- Detailed business listings with:
  - Contact information
  - Address
  - WhatsApp integration
  - Google Maps integration
  - GST number (optional)

### Admin Side
- Secure login system
- Dashboard to manage business listings
- Add, edit, and delete business information
- Manage categories

## Tech Stack

- Next.js 14
- TypeScript
- Tailwind CSS
- Prisma (for database)
- NextAuth.js (for authentication)

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up environment variables:
   ```bash
   cp .env.example .env.local
   ```
4. Run the development server:
   ```bash
   npm run dev
   ```

## Development

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Project Structure

```
src/
├── app/                    # Next.js app directory
│   ├── admin/             # Admin pages
│   ├── category/          # Category pages
│   ├── shop/              # Shop detail pages
│   └── page.tsx           # Home page
├── components/            # Reusable components
├── lib/                   # Utility functions
└── types/                # TypeScript types
```

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License

This project is licensed under the MIT License. # NammaKumatapro
