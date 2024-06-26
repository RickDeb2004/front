"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  Card,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem,
  DropdownMenuContent,
  DropdownMenu,
} from "@/components/ui/dropdown-menu";

export default function Component() {
  return (
    <div className="grid min-h-screen w-full grid-cols-1 lg:grid-cols-[280px_1fr]">
      <div className="hidden border-r bg-gray-100/40 lg:block dark:bg-gray-800/40">
        <div className="flex h-full max-h-screen flex-col gap-2">
          <div className="flex h-[60px] items-center border-b px-6">
            <Link className="flex items-center gap-2 font-semibold" href="#">
              <FilmIcon className="h-6 w-6" />
              <span>IndoQuoDB</span>
            </Link>
            <Button className="ml-auto h-8 w-8" size="icon" variant="outline">
              <BellIcon className="h-4 w-4" />
              <span className="sr-only">Toggle notifications</span>
            </Button>
          </div>
          <div className="flex-1 overflow-auto py-2">
            <nav className="grid items-start px-4 text-sm font-medium">
              <Link
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                href="#"
              >
                <HomeIcon className="h-4 w-4" />
                Home
              </Link>
              <Link
                className="flex items-center gap-3 rounded-lg bg-gray-100 px-3 py-2 text-gray-900 transition-all hover:text-gray-900 dark:bg-gray-800 dark:text-gray-50 dark:hover:text-gray-50"
                href="#"
              >
                <SearchIcon className="h-4 w-4" />
                Search Quotes
              </Link>
              <Link
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                href="#"
              >
                <HeartIcon className="h-4 w-4" />
                Favorites
              </Link>
            </nav>
          </div>
          <div className="mt-auto p-4">
            
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <header className="flex h-14 lg:h-[60px] items-center gap-4 border-b bg-gray-100/40 px-6 dark:bg-gray-800/40">
          <Link className="lg:hidden" href="#">
            <FilmIcon className="h-6 w-6" />
            <span className="sr-only">Home</span>
          </Link>
          <div className="w-full flex-1">
            <form>
              <div className="relative">
                <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500 dark:text-gray-400" />
                <Input
                  className="w-full bg-white shadow-none appearance-none pl-8 md:w-2/3 lg:w-1/3 dark:bg-gray-950"
                  placeholder="Search movie quotes..."
                  type="search"
                />
              </div>
            </form>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                className="rounded-full border border-gray-200 w-8 h-8 dark:border-gray-800 dark:border-gray-800"
                size="icon"
                variant="ghost"
              >
                <img
                  alt="Avatar"
                  className="rounded-full"
                  height="32"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "32/32",
                    objectFit: "cover",
                  }}
                  width="32"
                />
                <span className="sr-only">Toggle user menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Support</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </header>
        <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
          <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                    Discover the Best Movie Quotes
                  </h1>
                  <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                    Explore a vast collection of movie quotes in multiple
                    languages. Save your favorites and share them with friends.
                  </p>
                </div>
                <div className="w-full max-w-sm space-y-2">
                  <form className="flex space-x-2">
                    <Input
                      className="max-w-lg flex-1"
                      placeholder="Search movie quotes..."
                      type="search"
                    />
                    <Button type="submit">Search</Button>
                  </form>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    Discover the most iconic movie quotes.
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section className="w-full py-12 md:py-24 lg:py-32">
            <div className="container px-4 md:px-6">
              <div className="flex items-center">
                <h2 className="text-2xl font-bold tracking-tighter md:text-3xl">
                  Top Serached Movies
                </h2>
                <Link className="ml-auto text-sm underline" href="#">
                  View all
                </Link>
              </div>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-6">
                <div className="relative group">
                  <Link className="absolute inset-0 z-10" href="#">
                    <span className="sr-only">View movie</span>
                  </Link>
                  <img
                    alt="Movie poster"
                    className="rounded-lg object-cover w-full aspect-[2/3] group-hover:opacity-50 transition-opacity"
                    height={450}
                    src="/placeholder.svg"
                    width={300}
                  />
                  <div className="flex-1 py-4">
                    <h3 className="font-semibold tracking-tight line-clamp-2">
                      The Shawshank Redemption
                    </h3>
                    <small className="text-sm leading-none text-gray-500 dark:text-gray-400">
                      Drama, 1994
                    </small>
                    <div className="flex items-center gap-0.5 mt-2">
                      <StarIcon className="w-5 h-5 fill-gray-900 dark:fill-gray-50" />
                      <StarIcon className="w-5 h-5 fill-gray-900 dark:fill-gray-50" />
                      <StarIcon className="w-5 h-5 fill-gray-900 dark:fill-gray-50" />
                      <StarIcon className="w-5 h-5 fill-gray-100 stroke-gray-500 dark:fill-gray-800 dark:stroke-gray-400" />
                      <StarIcon className="w-5 h-5 fill-gray-100 stroke-gray-500 dark:fill-gray-800 dark:stroke-gray-400" />
                      <span className="ml-2 text-sm text-gray-500 dark:text-gray-400">
                        9.3
                      </span>
                    </div>
                  </div>
                </div>
                <div className="relative group">
                  <Link className="absolute inset-0 z-10" href="#">
                    <span className="sr-only">View movie</span>
                  </Link>
                  <img
                    alt="Movie poster"
                    className="rounded-lg object-cover w-full aspect-[2/3] group-hover:opacity-50 transition-opacity"
                    height={450}
                    src="/placeholder.svg"
                    width={300}
                  />
                  <div className="flex-1 py-4">
                    <h3 className="font-semibold tracking-tight line-clamp-2">
                      The Godfather
                    </h3>
                    <small className="text-sm leading-none text-gray-500 dark:text-gray-400">
                      Crime, Drama, 1972
                    </small>
                    <div className="flex items-center gap-0.5 mt-2">
                      <StarIcon className="w-5 h-5 fill-gray-900 dark:fill-gray-50" />
                      <StarIcon className="w-5 h-5 fill-gray-900 dark:fill-gray-50" />
                      <StarIcon className="w-5 h-5 fill-gray-900 dark:fill-gray-50" />
                      <StarIcon className="w-5 h-5 fill-gray-900 dark:fill-gray-50" />
                      <StarIcon className="w-5 h-5 fill-gray-100 stroke-gray-500 dark:fill-gray-800 dark:stroke-gray-400" />
                      <span className="ml-2 text-sm text-gray-500 dark:text-gray-400">
                        9.2
                      </span>
                    </div>
                  </div>
                </div>
                <div className="relative group">
                  <Link className="absolute inset-0 z-10" href="#">
                    <span className="sr-only">View movie</span>
                  </Link>
                  <img
                    alt="Movie poster"
                    className="rounded-lg object-cover w-full aspect-[2/3] group-hover:opacity-50 transition-opacity"
                    height={450}
                    src="/placeholder.svg"
                    width={300}
                  />
                  <div className="flex-1 py-4">
                    <h3 className="font-semibold tracking-tight line-clamp-2">
                      The Dark Knight
                    </h3>
                    <small className="text-sm leading-none text-gray-500 dark:text-gray-400">
                      Action, Crime, Drama, 2008
                    </small>
                    <div className="flex items-center gap-0.5 mt-2">
                      <StarIcon className="w-5 h-5 fill-gray-900 dark:fill-gray-50" />
                      <StarIcon className="w-5 h-5 fill-gray-900 dark:fill-gray-50" />
                      <StarIcon className="w-5 h-5 fill-gray-900 dark:fill-gray-50" />
                      <StarIcon className="w-5 h-5 fill-gray-900 dark:fill-gray-50" />
                      <StarIcon className="w-5 h-5 fill-gray-100 stroke-gray-500 dark:fill-gray-800 dark:stroke-gray-400" />
                      <span className="ml-2 text-sm text-gray-500 dark:text-gray-400">
                        9.0
                      </span>
                    </div>
                  </div>
                </div>
                <div className="relative group">
                  <Link className="absolute inset-0 z-10" href="#">
                    <span className="sr-only">View movie</span>
                  </Link>
                  <img
                    alt="Movie poster"
                    className="rounded-lg object-cover w-full aspect-[2/3] group-hover:opacity-50 transition-opacity"
                    height={450}
                    src="/placeholder.svg"
                    width={300}
                  />
                  <div className="flex-1 py-4">
                    <h3 className="font-semibold tracking-tight line-clamp-2">
                      Inception
                    </h3>
                    <small className="text-sm leading-none text-gray-500 dark:text-gray-400">
                      Action, Adventure, Sci-Fi, 2010
                    </small>
                    <div className="flex items-center gap-0.5 mt-2">
                      <StarIcon className="w-5 h-5 fill-gray-900 dark:fill-gray-50" />
                      <StarIcon className="w-5 h-5 fill-gray-900 dark:fill-gray-50" />
                      <StarIcon className="w-5 h-5 fill-gray-900 dark:fill-gray-50" />
                      <StarIcon className="w-5 h-5 fill-gray-900 dark:fill-gray-50" />
                      <StarIcon className="w-5 h-5 fill-gray-100 stroke-gray-500 dark:fill-gray-800 dark:stroke-gray-400" />
                      <span className="ml-2 text-sm text-gray-500 dark:text-gray-400">
                        8.8
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

function BellIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
      <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
    </svg>
  );
}

function FilmIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="18" height="18" x="3" y="3" rx="2" />
      <path d="M7 3v18" />
      <path d="M3 7.5h4" />
      <path d="M3 12h18" />
      <path d="M3 16.5h4" />
      <path d="M17 3v18" />
      <path d="M17 7.5h4" />
      <path d="M17 16.5h4" />
    </svg>
  );
}

function HeartIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  );
}

function HomeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  );
}

function SearchIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}

function StarIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}
