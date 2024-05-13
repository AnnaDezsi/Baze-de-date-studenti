import { Link } from "react-router-dom"
import { Button, Sheet, SheetContent, SheetTrigger } from "../ui"
import { ThemeToggle } from "./ThemeToggle"

export const Navigation = () => {
  return (
    <header className="flex h-20 w-full mx-auto max-w-7xl shrink-0 items-center px-4 md:px-6">
      <Sheet>
        <SheetTrigger asChild>
          <Button className="lg:hidden" size="icon" variant="outline">
            {/* <MenuIcon className="h-6 w-6" /> */}
            
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <Link className="mr-6 hidden lg:flex" to="/">
            {/* <MountainIcon className="h-6 w-6" /> */}
            
            <span className="">StudConnect</span>
          </Link>
          <div className="grid gap-2 py-6">
            <Link className="flex w-full items-center py-2 text-lg font-semibold" to="/">
              Login
            </Link>
            <Link className="flex w-full items-center py-2 text-lg font-semibold" to="/register">
              Register
            </Link>
            <ThemeToggle />
            
          </div>
        </SheetContent>
      </Sheet>
      <Link className="mr-6 hidden lg:flex" to="#">
        <span className="">StudConnect</span>
      </Link>
      <nav className="ml-auto hidden lg:flex gap-6">
        <Link
          className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
          to="/"
        >
          Login
        </Link>
        <Link
          className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
          to="/register"
        >
          Register
        </Link>        
        <ThemeToggle />
      </nav>
    </header>
  )
}
