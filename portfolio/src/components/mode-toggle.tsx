import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useTheme } from "@/components/theme-provider"
import { SunIcon } from "./ui/sun"
import { MoonIcon } from "./ui/moon"

export function ModeToggle() {
    const { setTheme } = useTheme()

    return (
        <DropdownMenu modal={false}>
            <DropdownMenuTrigger asChild>
            <Button
                variant="outline"
                size="icon"
                className="
                relative
                border border-border
                bg-[color:var(--glass)]
                text-foreground
                shadow-lg shadow-black/10
                backdrop-blur
                hover:bg-accent/40
                hover:text-foreground
                focus-visible:ring-0
            "
            >
            <SunIcon className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
            <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
            <span className="sr-only">Toggle theme</span>
            </Button>
        </DropdownMenuTrigger>

        <DropdownMenuContent
            align="end"
            className="
            mt-2
            min-w-[10rem]
            rounded-2xl
            border border-border
            bg-[color:var(--glass)]
            text-foreground
            shadow-xl shadow-black/15
            backdrop-blur
            p-2
            "
        >
            <DropdownMenuItem
            className="rounded-xl focus:bg-accent/50 focus:text-foreground cursor-pointer"
            onClick={() => setTheme("light")}
            >
            Light
            </DropdownMenuItem>

            <DropdownMenuItem
            className="rounded-xl focus:bg-accent/50 focus:text-foreground cursor-pointer"
            onClick={() => setTheme("dark")}
            >
            Dark
            </DropdownMenuItem>

            <DropdownMenuItem
            className="rounded-xl focus:bg-accent/50 focus:text-foreground cursor-pointer"
            onClick={() => setTheme("system")}
            >
            System
            </DropdownMenuItem>
        </DropdownMenuContent>
        </DropdownMenu>
    )
    }
