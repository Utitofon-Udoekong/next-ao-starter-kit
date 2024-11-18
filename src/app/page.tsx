"use client";

import { result, message, createDataItemSigner } from "@permaweb/aoconnect";
import { Navbar } from "@/components/navbar";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Code2, Cpu, Zap } from "lucide-react";
import { AOActions } from "@/components/ao-actions";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
          <div className="container flex mx-auto max-w-[64rem] flex-col items-center gap-4 text-center">
            <h1 className="font-bold text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
              Build Web3 Apps with{" "}
              <span className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-cyan-500">
                Next.js + AO
              </span>
            </h1>
            <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
              The ultimate boilerplate for building decentralized applications
              with Next.js and AO. Get started in minutes with full-stack Web3
              development.
            </p>
            <div className="space-x-4">
              <Button size="lg" variant="outline" asChild>
                <Link href="https://github.com/Utitofon-Udoekong/next-ao-starter-kit">View on GitHub</Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="container space-y-6 py-8 mx-auto">
          <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
            <div className="relative overflow-hidden rounded-lg border bg-background p-2">
              <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
                <Code2 className="h-12 w-12" />
                <div className="space-y-2">
                  <h3 className="font-bold">Next.js 14</h3>
                  <p className="text-sm text-muted-foreground">
                    Built on the latest Next.js features with App Router and
                    Server Components.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-lg border bg-background p-2">
              <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
                <Cpu className="h-12 w-12" />
                <div className="space-y-2">
                  <h3 className="font-bold">AO Integration</h3>
                  <p className="text-sm text-muted-foreground">
                    Seamless integration with AO for building decentralized
                    applications.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-lg border bg-background p-2">
              <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
                <Zap className="h-12 w-12" />
                <div className="space-y-2">
                  <h3 className="font-bold">Instant Setup</h3>
                  <p className="text-sm text-muted-foreground">
                    Get started in seconds with our pre-configured development
                    environment.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="container py-12 mx-auto">
          <div className="mx-auto max-w-[64rem] text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">
              Ready to Test the Process?
            </h2>
            <p className="mt-4 text-muted-foreground sm:text-lg">
              Click the buttons below to explore and test the functionalities of
              the Register and Broadcast processes.
            </p>
            <AOActions />
          </div>
        </section>
      </main>
    </div>
  );
}
