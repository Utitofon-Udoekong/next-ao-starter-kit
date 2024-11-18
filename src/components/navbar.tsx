'use client';

import { WalletConnect } from '@/components/wallet-connect';
import { Github, Terminal } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function Navbar() {
  return (
    <nav className="border-b">
      <div className="flex h-16 items-center px-4 container mx-auto">
        <div className="flex items-center space-x-2">
          <Terminal className="h-6 w-6" />
          <span className="font-bold">Next.js + AO</span>
        </div>
        <div className="ml-auto flex items-center space-x-4">
          <Button variant="ghost" size="icon" asChild>
            <Link href="https://github.com/your-repo" target="_blank">
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
          </Button>
          <WalletConnect />
        </div>
      </div>
    </nav>
  );
}