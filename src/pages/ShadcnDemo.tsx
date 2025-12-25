import { useState } from "react"
import { Link } from "react-router"
import {
    AlertCircle,
    Bold,
    ChevronLeft,
    ChevronRight,
    Github,
    Home,
    Italic,
    Loader2,
    Mail,
    MoreHorizontal,
    Search,
    Settings,
    Terminal,
    Underline,
    User,
    UserPlus
} from "lucide-react"

// UI Components
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb"
import { Button, buttonVariants } from "@/components/ui/button"
import { ButtonGroup } from "@/components/ui/button-group"
import { Calendar as CalendarComponent } from "@/components/ui/calendar"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command"
import { Container } from "@/components/ui/container"
import { DatePicker } from "@/components/ui/date-picker"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Empty, EmptyDescription, EmptyHeader, EmptyTitle } from "@/components/ui/empty"
import { Field, FieldContent, FieldDescription, FieldLabel, FieldError } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { InputGroup, InputGroupAddon, InputGroupInput } from "@/components/ui/input-group"
import { Label } from "@/components/ui/label"
import { NativeSelect } from "@/components/ui/native-select"
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu"
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Skeleton } from "@/components/ui/skeleton"
import { Spinner } from "@/components/ui/spinner"
import { Switch } from "@/components/ui/switch"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Toggle } from "@/components/ui/toggle"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { TypographyH1, TypographyH2, TypographyH3, TypographyH4, TypographyP, TypographyLarge, TypographySmall, TypographyMuted } from "@/components/ui/typography"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger, DropdownMenuCheckboxItem, DropdownMenuRadioGroup, DropdownMenuRadioItem } from "@/components/ui/dropdown-menu"
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card"
import { Kbd } from "@/components/ui/kbd"
import { toast } from "sonner"
import { ThemeToggle } from "@/components/theme-toggle"

export default function ShadcnDemo() {
    const [date, setDate] = useState<Date | undefined>(new Date())
    const [commandOpen, setCommandOpen] = useState(false)

    return (
        <>
            <title>Shadcn UI Components Demo | Tivity</title>

            <div className="min-h-screen bg-background">
                {/* Hero Header */}
                <div className="border-b bg-gradient-to-r from-purple-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
                    <Container className="py-12">
                        <TypographyH1 className="mb-4">Shadcn UI Components Demo</TypographyH1>
                        <TypographyP className="text-muted-foreground max-w-3xl">
                            A comprehensive showcase of all 44+ shadcn/ui components available in this boilerplate.
                            Explore variants, interactions, and real-world usage examples.
                        </TypographyP>
                        <div className="mt-6 flex gap-4">
                            <Link to="/">
                                <Button variant="outline">
                                    <Home className="mr-2 h-4 w-4" />
                                    Back to Home
                                </Button>
                            </Link>
                            <ThemeToggle />
                            <Button onClick={() => setCommandOpen(true)}>
                                <Search className="mr-2 h-4 w-4" />
                                Search Components (⌘K)
                            </Button>
                        </div>
                    </Container>
                </div>

                <Container className="py-12">
                    <div className="space-y-16">
                        {/* Table of Contents */}
                        <Card>
                            <CardHeader>
                                <CardTitle>Table of Contents</CardTitle>
                                <CardDescription>Jump to any component section</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                                    {[
                                        "Typography", "Buttons", "Forms", "Data Display",
                                        "Feedback", "Overlays", "Navigation", "Layout", "New Components"
                                    ].map((section) => (
                                        <a
                                            key={section}
                                            href={`#${section.toLowerCase().replace(/ /g, '-')}`}
                                            className="text-primary hover:underline"
                                        >
                                            {section}
                                        </a>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>

                        <Separator className="my-12" />

                        {/* SECTION 1: TYPOGRAPHY */}
                        <section id="typography" className="space-y-8">
                            <div>
                                <TypographyH2>Typography</TypographyH2>
                                <TypographyMuted>Text styles and formatting components</TypographyMuted>
                            </div>

                            <Card>
                                <CardHeader>
                                    <CardTitle>Typography Examples</CardTitle>
                                    <CardDescription>All typography variants</CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div>
                                        <TypographySmall className="text-muted-foreground mb-2">H1</TypographySmall>
                                        <TypographyH1>The quick brown fox jumps over the lazy dog</TypographyH1>
                                    </div>
                                    <Separator />
                                    <div>
                                        <TypographySmall className="text-muted-foreground mb-2">H2</TypographySmall>
                                        <TypographyH2>The quick brown fox jumps over the lazy dog</TypographyH2>
                                    </div>
                                    <Separator />
                                    <div>
                                        <TypographySmall className="text-muted-foreground mb-2">H3</TypographySmall>
                                        <TypographyH3>The quick brown fox jumps over the lazy dog</TypographyH3>
                                    </div>
                                    <Separator />
                                    <div>
                                        <TypographySmall className="text-muted-foreground mb-2">H4</TypographySmall>
                                        <TypographyH4>The quick brown fox jumps over the lazy dog</TypographyH4>
                                    </div>
                                    <Separator />
                                    <div>
                                        <TypographySmall className="text-muted-foreground mb-2">Paragraph</TypographySmall>
                                        <TypographyP>
                                            The quick brown fox jumps over the lazy dog. This is a paragraph example
                                            demonstrating regular text styling in shadcn/ui components.
                                        </TypographyP>
                                    </div>
                                    <Separator />
                                    <div>
                                        <TypographySmall className="text-muted-foreground mb-2">Large</TypographySmall>
                                        <TypographyLarge>The quick brown fox jumps over the lazy dog</TypographyLarge>
                                    </div>
                                    <Separator />
                                    <div>
                                        <TypographySmall className="text-muted-foreground mb-2">Small</TypographySmall>
                                        <TypographySmall>The quick brown fox jumps over the lazy dog</TypographySmall>
                                    </div>
                                    <Separator />
                                    <div>
                                        <TypographySmall className="text-muted-foreground mb-2">Muted</TypographySmall>
                                        <TypographyMuted>The quick brown fox jumps over the lazy dog</TypographyMuted>
                                    </div>
                                </CardContent>
                            </Card>

                            {/* Empty State */}
                            <Card>
                                <CardHeader>
                                    <CardTitle>Empty State</CardTitle>
                                    <CardDescription>Show when no data is available</CardDescription>
                                </CardHeader>
                                <CardContent className="py-12">
                                    <Empty>
                                        <EmptyHeader>
                                            <EmptyTitle>No Data Found</EmptyTitle>
                                            <EmptyDescription>
                                                There are no items to display at the moment.
                                            </EmptyDescription>
                                        </EmptyHeader>
                                    </Empty>
                                </CardContent>
                            </Card>
                        </section>

                        <Separator className="my-12" />

                        {/* SECTION 2: BUTTONS */}
                        <section id="buttons" className="space-y-8">
                            <div>
                                <TypographyH2>Buttons & Actions</TypographyH2>
                                <TypographyMuted>Interactive button components with various styles</TypographyMuted>
                            </div>

                            {/* Button Variants */}
                            <Card>
                                <CardHeader>
                                    <CardTitle>Button Variants</CardTitle>
                                    <CardDescription>All available button styles</CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-6">
                                    <div>
                                        <TypographyH4 className="mb-4">Default Variants</TypographyH4>
                                        <div className="flex flex-wrap gap-4">
                                            <Button>Default</Button>
                                            <Button variant="destructive">Destructive</Button>
                                            <Button variant="outline">Outline</Button>
                                            <Button variant="secondary">Secondary</Button>
                                            <Button variant="ghost">Ghost</Button>
                                            <Button variant="link">Link</Button>
                                        </div>
                                    </div>

                                    <Separator />

                                    <div>
                                        <TypographyH4 className="mb-4">Sizes</TypographyH4>
                                        <div className="flex flex-wrap items-center gap-4">
                                            <Button size="sm">Small</Button>
                                            <Button size="default">Default</Button>
                                            <Button size="lg">Large</Button>
                                            <Button size="icon">
                                                <Settings className="h-4 w-4" />
                                            </Button>
                                        </div>
                                    </div>

                                    <Separator />

                                    <div>
                                        <TypographyH4 className="mb-4">With Icons</TypographyH4>
                                        <div className="flex flex-wrap gap-4">
                                            <Button>
                                                <Mail className="mr-2 h-4 w-4" />
                                                With Left Icon
                                            </Button>
                                            <Button>
                                                Right Icon
                                                <ChevronRight className="ml-2 h-4 w-4" />
                                            </Button>
                                            <Button>
                                                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                                Loading
                                            </Button>
                                        </div>
                                    </div>

                                    <Separator />

                                    <div>
                                        <TypographyH4 className="mb-4">Disabled State</TypographyH4>
                                        <div className="flex flex-wrap gap-4">
                                            <Button disabled>Disabled</Button>
                                            <Button variant="outline" disabled>Disabled Outline</Button>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>

                            {/* Button Group */}
                            <Card>
                                <CardHeader>
                                    <CardTitle>Button Group</CardTitle>
                                    <CardDescription>Group related buttons together</CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-6">
                                    <div>
                                        <TypographySmall className="text-muted-foreground mb-4">Default</TypographySmall>
                                        <ButtonGroup>
                                            <Button variant="outline">Left</Button>
                                            <Button variant="outline">Middle</Button>
                                            <Button variant="outline">Right</Button>
                                        </ButtonGroup>
                                    </div>
                                    <div>
                                        <TypographySmall className="text-muted-foreground mb-4">With Icons</TypographySmall>
                                        <ButtonGroup>
                                            <Button variant="outline">
                                                <ChevronLeft className="h-4 w-4" />
                                            </Button>
                                            <Button variant="outline">
                                                <Home className="h-4 w-4" />
                                            </Button>
                                            <Button variant="outline">
                                                <ChevronRight className="h-4 w-4" />
                                            </Button>
                                        </ButtonGroup>
                                    </div>
                                </CardContent>
                            </Card>

                            {/* Badge */}
                            <Card>
                                <CardHeader>
                                    <CardTitle>Badge</CardTitle>
                                    <CardDescription>Small status descriptors</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <div className="flex flex-wrap gap-4">
                                        <Badge>Default</Badge>
                                        <Badge variant="secondary">Secondary</Badge>
                                        <Badge variant="destructive">Destructive</Badge>
                                        <Badge variant="outline">Outline</Badge>
                                    </div>
                                </CardContent>
                            </Card>
                        </section>

                        <Separator className="my-12" />

                        {/* SECTION 3: FORMS */}
                        <section id="forms" className="space-y-8">
                            <div>
                                <TypographyH2>Form Components</TypographyH2>
                                <TypographyMuted>Input and form controls</TypographyMuted>
                            </div>

                            {/* Inputs */}
                            <Card>
                                <CardHeader>
                                    <CardTitle>Input</CardTitle>
                                    <CardDescription>Text input field</CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div className="grid gap-4 md:grid-cols-2">
                                        <div>
                                            <Label htmlFor="text">Text Input</Label>
                                            <Input id="text" placeholder="Enter text..." />
                                        </div>
                                        <div>
                                            <Label htmlFor="email">Email Input</Label>
                                            <Input id="email" type="email" placeholder="email@example.com" />
                                        </div>
                                        <div>
                                            <Label htmlFor="password">Password Input</Label>
                                            <Input id="password" type="password" placeholder="••••••••" />
                                        </div>
                                        <div>
                                            <Label htmlFor="disabled">Disabled Input</Label>
                                            <Input id="disabled" placeholder="Disabled" disabled />
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>

                            {/* Input Group */}
                            <Card>
                                <CardHeader>
                                    <CardTitle>Input Group</CardTitle>
                                    <CardDescription>Input with addons and elements</CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-6">
                                    <div>
                                        <Label>With Left Addon</Label>
                                        <InputGroup>
                                            <InputGroupAddon align="inline-start">https://</InputGroupAddon>
                                            <InputGroupInput placeholder="www.example.com" />
                                        </InputGroup>
                                    </div>
                                    <div>
                                        <Label>With Right Addon</Label>
                                        <InputGroup>
                                            <InputGroupInput placeholder="Amount" />
                                            <InputGroupAddon align="inline-end">USD</InputGroupAddon>
                                        </InputGroup>
                                    </div>
                                    <div>
                                        <Label>With Icon</Label>
                                        <InputGroup>
                                            <InputGroupAddon align="inline-start">
                                                <Search className="h-4 w-4" />
                                            </InputGroupAddon>
                                            <InputGroupInput placeholder="Search..." />
                                        </InputGroup>
                                    </div>
                                </CardContent>
                            </Card>

                            {/* Textarea */}
                            <Card>
                                <CardHeader>
                                    <CardTitle>Textarea</CardTitle>
                                    <CardDescription>Multi-line text input</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <Textarea placeholder="Type your message here..." rows={4} />
                                </CardContent>
                            </Card>

                            {/* Checkbox */}
                            <Card>
                                <CardHeader>
                                    <CardTitle>Checkbox</CardTitle>
                                    <CardDescription>Binary selection control</CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div className="flex items-center space-x-2">
                                        <Checkbox id="terms" />
                                        <Label htmlFor="terms">Accept terms and conditions</Label>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <Checkbox id="marketing" defaultChecked />
                                        <Label htmlFor="marketing">Send me marketing emails</Label>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <Checkbox id="disabled" disabled />
                                        <Label htmlFor="disabled">Disabled checkbox</Label>
                                    </div>
                                </CardContent>
                            </Card>

                            {/* Radio Group */}
                            <Card>
                                <CardHeader>
                                    <CardTitle>Radio Group</CardTitle>
                                    <CardDescription>Single selection from multiple options</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <RadioGroup defaultValue="option-1">
                                        <div className="flex items-center space-x-2">
                                            <RadioGroupItem value="option-1" id="option-1" />
                                            <Label htmlFor="option-1">Option 1</Label>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <RadioGroupItem value="option-2" id="option-2" />
                                            <Label htmlFor="option-2">Option 2</Label>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <RadioGroupItem value="option-3" id="option-3" disabled />
                                            <Label htmlFor="option-3">Disabled Option</Label>
                                        </div>
                                    </RadioGroup>
                                </CardContent>
                            </Card>

                            {/* Native Select */}
                            <Card>
                                <CardHeader>
                                    <CardTitle>Native Select</CardTitle>
                                    <CardDescription>Dropdown selection</CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div>
                                        <Label htmlFor="select-1">Select an option</Label>
                                        <NativeSelect id="select-1">
                                            <option value="">Choose one...</option>
                                            <option value="1">Option 1</option>
                                            <option value="2">Option 2</option>
                                            <option value="3">Option 3</option>
                                        </NativeSelect>
                                    </div>
                                </CardContent>
                            </Card>

                            {/* Field */}
                            <Card>
                                <CardHeader>
                                    <CardTitle>Field</CardTitle>
                                    <CardDescription>Input field with label, description and validation</CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-6">
                                    <Field>
                                        <FieldLabel>Username</FieldLabel>
                                        <FieldContent>
                                            <Input placeholder="johndoe" />
                                            <FieldDescription>This is your public display name.</FieldDescription>
                                        </FieldContent>
                                    </Field>
                                    <Field>
                                        <FieldLabel>Email (with error)</FieldLabel>
                                        <FieldContent>
                                            <Input placeholder="email@example.com" />
                                            <FieldError>Please enter a valid email address.</FieldError>
                                        </FieldContent>
                                    </Field>
                                </CardContent>
                            </Card>
                        </section>

                        <Separator className="my-12" />

                        {/* SECTION 4: DATA DISPLAY */}
                        <section id="data display" className="space-y-8">
                            <div>
                                <TypographyH2>Data Display</TypographyH2>
                                <TypographyMuted>Components for displaying data and content</TypographyMuted>
                            </div>

                            {/* Card */}
                            <Card>
                                <CardHeader>
                                    <CardTitle>Card</CardTitle>
                                    <CardDescription>Content container with header and footer</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <div className="grid gap-4 md:grid-cols-2">
                                        <Card>
                                            <CardHeader>
                                                <CardTitle>Card Title</CardTitle>
                                                <CardDescription>Card description goes here</CardDescription>
                                            </CardHeader>
                                            <CardContent>
                                                <p>Card content area</p>
                                            </CardContent>
                                            <CardFooter>
                                                <Button>Action</Button>
                                            </CardFooter>
                                        </Card>
                                        <Card>
                                            <CardHeader>
                                                <CardTitle>Another Card</CardTitle>
                                            </CardHeader>
                                            <CardContent>
                                                <p>Simple card without footer</p>
                                            </CardContent>
                                        </Card>
                                    </div>
                                </CardContent>
                            </Card>

                            {/* Avatar */}
                            <Card>
                                <CardHeader>
                                    <CardTitle>Avatar</CardTitle>
                                    <CardDescription>User profile pictures and icons</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <div className="flex flex-wrap gap-4 items-center">
                                        <Avatar>
                                            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                                            <AvatarFallback>CN</AvatarFallback>
                                        </Avatar>
                                        <Avatar>
                                            <AvatarFallback>JD</AvatarFallback>
                                        </Avatar>
                                        <Avatar>
                                            <AvatarFallback><User className="h-4 w-4" /></AvatarFallback>
                                        </Avatar>
                                    </div>
                                </CardContent>
                            </Card>

                            {/* Table */}
                            <Card>
                                <CardHeader>
                                    <CardTitle>Table</CardTitle>
                                    <CardDescription>Structured data display</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <Table>
                                        <TableHeader>
                                            <TableRow>
                                                <TableHead>Name</TableHead>
                                                <TableHead>Email</TableHead>
                                                <TableHead>Role</TableHead>
                                                <TableHead className="text-right">Actions</TableHead>
                                            </TableRow>
                                        </TableHeader>
                                        <TableBody>
                                            <TableRow>
                                                <TableCell>John Doe</TableCell>
                                                <TableCell>john@example.com</TableCell>
                                                <TableCell>Admin</TableCell>
                                                <TableCell className="text-right">
                                                    <Button variant="ghost" size="sm">Edit</Button>
                                                </TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell>Jane Smith</TableCell>
                                                <TableCell>jane@example.com</TableCell>
                                                <TableCell>User</TableCell>
                                                <TableCell className="text-right">
                                                    <Button variant="ghost" size="sm">Edit</Button>
                                                </TableCell>
                                            </TableRow>
                                        </TableBody>
                                    </Table>
                                </CardContent>
                            </Card>

                            {/* Skeleton */}
                            <Card>
                                <CardHeader>
                                    <CardTitle>Skeleton</CardTitle>
                                    <CardDescription>Loading placeholder</CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div className="space-y-2">
                                        <Skeleton className="h-4 w-full" />
                                        <Skeleton className="h-4 w-3/4" />
                                        <Skeleton className="h-4 w-1/2" />
                                    </div>
                                    <div className="flex items-center space-x-4">
                                        <Skeleton className="h-12 w-12 rounded-full" />
                                        <div className="space-y-2">
                                            <Skeleton className="h-4 w-[250px]" />
                                            <Skeleton className="h-4 w-[200px]" />
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>

                            {/* Spinner */}
                            <Card>
                                <CardHeader>
                                    <CardTitle>Spinner</CardTitle>
                                    <CardDescription>Loading indicator</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <div className="flex gap-8 items-center">
                                        <Spinner />
                                        <Spinner className="text-primary" />
                                        <Loader2 className="h-8 w-8 animate-spin text-primary" />
                                    </div>
                                </CardContent>
                            </Card>
                        </section>

                        <Separator className="my-12" />

                        {/* SECTION 5: FEEDBACK */}
                        <section id="feedback" className="space-y-8">
                            <div>
                                <TypographyH2>Feedback</TypographyH2>
                                <TypographyMuted>User feedback and notification components</TypographyMuted>
                            </div>

                            {/* Alert */}
                            <Card>
                                <CardHeader>
                                    <CardTitle>Alert</CardTitle>
                                    <CardDescription>Callout messages for user attention</CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <Alert>
                                        <Terminal className="h-4 w-4" />
                                        <AlertTitle>Heads up!</AlertTitle>
                                        <AlertDescription>
                                            You can add components and dependencies to your app using the cli.
                                        </AlertDescription>
                                    </Alert>
                                    <Alert variant="destructive">
                                        <AlertCircle className="h-4 w-4" />
                                        <AlertTitle>Error</AlertTitle>
                                        <AlertDescription>
                                            Your session has expired. Please log in again.
                                        </AlertDescription>
                                    </Alert>
                                </CardContent>
                            </Card>

                            {/* Dialog */}
                            <Card>
                                <CardHeader>
                                    <CardTitle>Dialog</CardTitle>
                                    <CardDescription>Modal window for important content</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <Dialog>
                                        <DialogTrigger asChild>
                                            <Button>Open Dialog</Button>
                                        </DialogTrigger>
                                        <DialogContent>
                                            <DialogHeader>
                                                <DialogTitle>Are you sure?</DialogTitle>
                                                <DialogDescription>
                                                    This is a dialog description. It provides context about the action.
                                                </DialogDescription>
                                            </DialogHeader>
                                            <div className="py-4">
                                                <p>Dialog content goes here.</p>
                                            </div>
                                            <DialogFooter>
                                                <Button variant="outline">Cancel</Button>
                                                <Button>Confirm</Button>
                                            </DialogFooter>
                                        </DialogContent>
                                    </Dialog>
                                </CardContent>
                            </Card>

                            {/* Alert Dialog */}
                            <Card>
                                <CardHeader>
                                    <CardTitle>Alert Dialog</CardTitle>
                                    <CardDescription>Critical confirmation dialog</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <AlertDialog>
                                        <AlertDialogTrigger asChild>
                                            <Button variant="destructive">Delete Account</Button>
                                        </AlertDialogTrigger>
                                        <AlertDialogContent>
                                            <AlertDialogHeader>
                                                <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                                                <AlertDialogDescription>
                                                    This action cannot be undone. This will permanently delete your
                                                    account and remove your data from our servers.
                                                </AlertDialogDescription>
                                            </AlertDialogHeader>
                                            <AlertDialogFooter>
                                                <AlertDialogCancel>Cancel</AlertDialogCancel>
                                                <AlertDialogAction>Continue</AlertDialogAction>
                                            </AlertDialogFooter>
                                        </AlertDialogContent>
                                    </AlertDialog>
                                </CardContent>
                            </Card>

                            {/* Sheet */}
                            <Card>
                                <CardHeader>
                                    <CardTitle>Sheet</CardTitle>
                                    <CardDescription>Slide-over panel</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <Sheet>
                                        <SheetTrigger asChild>
                                            <Button variant="outline">Open Sheet</Button>
                                        </SheetTrigger>
                                        <SheetContent>
                                            <SheetHeader>
                                                <SheetTitle>Edit Profile</SheetTitle>
                                                <SheetDescription>
                                                    Make changes to your profile here. Click save when you're done.
                                                </SheetDescription>
                                            </SheetHeader>
                                            <div className="grid gap-4 py-4">
                                                <div className="space-y-2">
                                                    <Label htmlFor="name">Name</Label>
                                                    <Input id="name" placeholder="John Doe" />
                                                </div>
                                                <div className="space-y-2">
                                                    <Label htmlFor="email-sheet">Email</Label>
                                                    <Input id="email-sheet" placeholder="email@example.com" />
                                                </div>
                                            </div>
                                            <SheetFooter>
                                                <SheetClose asChild>
                                                    <Button>Save changes</Button>
                                                </SheetClose>
                                            </SheetFooter>
                                        </SheetContent>
                                    </Sheet>
                                </CardContent>
                            </Card>

                            {/* Toast/Sonner */}
                            <Card>
                                <CardHeader>
                                    <CardTitle>Toast Notifications (Sonner)</CardTitle>
                                    <CardDescription>Temporary notification messages</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <div className="flex flex-wrap gap-4">
                                        <Button onClick={() => toast("Default toast message")}>
                                            Default Toast
                                        </Button>
                                        <Button onClick={() => toast.success("Operation completed successfully!")}>
                                            Success Toast
                                        </Button>
                                        <Button onClick={() => toast.error("Something went wrong!")}>
                                            Error Toast
                                        </Button>
                                        <Button onClick={() => toast.info("Here's some information")}>
                                            Info Toast
                                        </Button>
                                        <Button onClick={() => toast.warning("Please be careful!")}>
                                            Warning Toast
                                        </Button>
                                    </div>
                                </CardContent>
                            </Card>
                        </section>

                        <Separator className="my-12" />

                        {/* SECTION 6: OVERLAYS */}
                        <section id="overlays" className="space-y-8">
                            <div>
                                <TypographyH2>Overlays</TypographyH2>
                                <TypographyMuted>Popover and floating UI elements</TypographyMuted>
                            </div>

                            {/* Tooltip */}
                            <Card>
                                <CardHeader>
                                    <CardTitle>Tooltip</CardTitle>
                                    <CardDescription>Contextual information on hover</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <div className="flex gap-4">
                                        <TooltipProvider>
                                            <Tooltip>
                                                <TooltipTrigger asChild>
                                                    <Button variant="outline">Hover me</Button>
                                                </TooltipTrigger>
                                                <TooltipContent>
                                                    <p>This is a tooltip</p>
                                                </TooltipContent>
                                            </Tooltip>
                                        </TooltipProvider>
                                        <TooltipProvider>
                                            <Tooltip>
                                                <TooltipTrigger asChild>
                                                    <Button size="icon" variant="outline">
                                                        <Settings className="h-4 w-4" />
                                                    </Button>
                                                </TooltipTrigger>
                                                <TooltipContent>
                                                    <p>Settings</p>
                                                </TooltipContent>
                                            </Tooltip>
                                        </TooltipProvider>
                                    </div>
                                </CardContent>
                            </Card>

                            {/* Popover */}
                            <Card>
                                <CardHeader>
                                    <CardTitle>Popover</CardTitle>
                                    <CardDescription>Floating content container</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <Popover>
                                        <PopoverTrigger asChild>
                                            <Button variant="outline">Open Popover</Button>
                                        </PopoverTrigger>
                                        <PopoverContent>
                                            <div className="space-y-2">
                                                <h4 className="font-medium">Popover Title</h4>
                                                <p className="text-sm text-muted-foreground">
                                                    This is a popover with custom content. It stays open until closed.
                                                </p>
                                            </div>
                                        </PopoverContent>
                                    </Popover>
                                </CardContent>
                            </Card>

                            {/* Command */}
                            <Card>
                                <CardHeader>
                                    <CardTitle>Command Palette</CardTitle>
                                    <CardDescription>Search and command interface (Try ⌘K)</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <Button onClick={() => setCommandOpen(true)}>
                                        <Search className="mr-2 h-4 w-4" />
                                        Open Command Palette
                                    </Button>
                                </CardContent>
                            </Card>
                        </section>

                        <Separator className="my-12" />

                        {/* SECTION 7: NAVIGATION */}
                        <section id="navigation" className="space-y-8">
                            <div>
                                <TypographyH2>Navigation</TypographyH2>
                                <TypographyMuted>Navigation and breadcrumb components</TypographyMuted>
                            </div>

                            {/* Breadcrumb */}
                            <Card>
                                <CardHeader>
                                    <CardTitle>Breadcrumb</CardTitle>
                                    <CardDescription>Hierarchical navigation</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <Breadcrumb>
                                        <BreadcrumbList>
                                            <BreadcrumbItem>
                                                <BreadcrumbLink href="/">Home</BreadcrumbLink>
                                            </BreadcrumbItem>
                                            <BreadcrumbSeparator />
                                            <BreadcrumbItem>
                                                <BreadcrumbLink href="/components">Components</BreadcrumbLink>
                                            </BreadcrumbItem>
                                            <BreadcrumbSeparator />
                                            <BreadcrumbItem>
                                                <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
                                            </BreadcrumbItem>
                                        </BreadcrumbList>
                                    </Breadcrumb>
                                </CardContent>
                            </Card>

                            {/* Navigation Menu */}
                            <Card>
                                <CardHeader>
                                    <CardTitle>Navigation Menu</CardTitle>
                                    <CardDescription>Complex navigation with dropdowns</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <NavigationMenu>
                                        <NavigationMenuList>
                                            <NavigationMenuItem>
                                                <NavigationMenuLink className={buttonVariants({ variant: "ghost" })}>
                                                    Home
                                                </NavigationMenuLink>
                                            </NavigationMenuItem>
                                            <NavigationMenuItem>
                                                <NavigationMenuTrigger>Components</NavigationMenuTrigger>
                                                <NavigationMenuContent>
                                                    <div className="grid gap-3 p-6 w-[400px]">
                                                        <div className="space-y-2">
                                                            <h4 className="font-medium">UI Components</h4>
                                                            <p className="text-sm text-muted-foreground">
                                                                Beautiful and accessible components
                                                            </p>
                                                        </div>
                                                    </div>
                                                </NavigationMenuContent>
                                            </NavigationMenuItem>
                                            <NavigationMenuItem>
                                                <NavigationMenuLink className={buttonVariants({ variant: "ghost" })}>
                                                    About
                                                </NavigationMenuLink>
                                            </NavigationMenuItem>
                                        </NavigationMenuList>
                                    </NavigationMenu>
                                </CardContent>
                            </Card>

                            {/* Pagination */}
                            <Card>
                                <CardHeader>
                                    <CardTitle>Pagination</CardTitle>
                                    <CardDescription>Page navigation controls</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <Pagination>
                                        <PaginationContent>
                                            <PaginationItem>
                                                <PaginationPrevious href="#" />
                                            </PaginationItem>
                                            <PaginationItem>
                                                <PaginationLink href="#" isActive>1</PaginationLink>
                                            </PaginationItem>
                                            <PaginationItem>
                                                <PaginationLink href="#">2</PaginationLink>
                                            </PaginationItem>
                                            <PaginationItem>
                                                <PaginationLink href="#">3</PaginationLink>
                                            </PaginationItem>
                                            <PaginationItem>
                                                <PaginationNext href="#" />
                                            </PaginationItem>
                                        </PaginationContent>
                                    </Pagination>
                                </CardContent>
                            </Card>

                            {/* Scroll Area */}
                            <Card>
                                <CardHeader>
                                    <CardTitle>Scroll Area</CardTitle>
                                    <CardDescription>Styled scrollable container</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <ScrollArea className="h-[200px] w-full rounded-md border p-4">
                                        {Array.from({ length: 50 }).map((_, i) => (
                                            <div key={i} className="py-2">
                                                Item {i + 1}
                                            </div>
                                        ))}
                                    </ScrollArea>
                                </CardContent>
                            </Card>
                        </section>

                        <Separator className="my-12" />

                        {/* SECTION 8: LAYOUT & DATE */}
                        <section id="layout" className="space-y-8">
                            <div>
                                <TypographyH2>Layout & Date Components</TypographyH2>
                                <TypographyMuted>Container, separator, calendar components</TypographyMuted>
                            </div>

                            {/* Container */}
                            <Card>
                                <CardHeader>
                                    <CardTitle>Container</CardTitle>
                                    <CardDescription>Max-width content wrapper</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <div className="rounded-lg border p-4 bg-muted">
                                        <p className="text-sm text-muted-foreground">
                                            This entire demo page uses Container component to constrain content width.
                                            Container provides consistent spacing and max-width across the application.
                                        </p>
                                    </div>
                                </CardContent>
                            </Card>

                            {/* Separator */}
                            <Card>
                                <CardHeader>
                                    <CardTitle>Separator</CardTitle>
                                    <CardDescription>Visual divider</CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div>
                                        <p className="text-sm">Content above</p>
                                        <Separator className="my-4" />
                                        <p className="text-sm">Content below</p>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <p className="text-sm">Left</p>
                                        <Separator orientation="vertical" className="h-4" />
                                        <p className="text-sm">Right</p>
                                    </div>
                                </CardContent>
                            </Card>

                            {/* Calendar */}
                            <Card>
                                <CardHeader>
                                    <CardTitle>Calendar</CardTitle>
                                    <CardDescription>Date selection component</CardDescription>
                                </CardHeader>
                                <CardContent className="flex justify-center">
                                    <CalendarComponent
                                        mode="single"
                                        selected={date}
                                        onSelect={setDate}
                                    />
                                </CardContent>
                            </Card>

                            {/* Date Picker */}
                            <Card>
                                <CardHeader>
                                    <CardTitle>Date Picker</CardTitle>
                                    <CardDescription>Calendar with popover trigger</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <DatePicker />
                                </CardContent>
                            </Card>
                        </section>

                        <Separator className="my-12" />

                        {/* SECTION 9: NEW COMPONENTS */}
                        <section id="new-components" className="space-y-8">
                            <div>
                                <TypographyH2>New Components</TypographyH2>
                                <TypographyMuted>Recently added components and controls</TypographyMuted>
                            </div>

                            {/* Tabs */}
                            <Card>
                                <CardHeader>
                                    <CardTitle>Tabs</CardTitle>
                                    <CardDescription>Layered sections of content displayed one at a time</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <Tabs defaultValue="account" className="w-full">
                                        <TabsList className="grid w-full grid-cols-3">
                                            <TabsTrigger value="account">Account</TabsTrigger>
                                            <TabsTrigger value="password">Password</TabsTrigger>
                                            <TabsTrigger value="settings">Settings</TabsTrigger>
                                        </TabsList>
                                        <TabsContent value="account" className="space-y-4">
                                            <div className="space-y-2">
                                                <Label>Name</Label>
                                                <Input placeholder="Enter your name" />
                                            </div>
                                            <div className="space-y-2">
                                                <Label>Email</Label>
                                                <Input type="email" placeholder="Enter your email" />
                                            </div>
                                        </TabsContent>
                                        <TabsContent value="password" className="space-y-4">
                                            <div className="space-y-2">
                                                <Label>Current Password</Label>
                                                <Input type="password" />
                                            </div>
                                            <div className="space-y-2">
                                                <Label>New Password</Label>
                                                <Input type="password" />
                                            </div>
                                        </TabsContent>
                                        <TabsContent value="settings" className="space-y-4">
                                            <p className="text-sm text-muted-foreground">
                                                Configure your account settings here.
                                            </p>
                                        </TabsContent>
                                    </Tabs>
                                </CardContent>
                            </Card>

                            {/* Switch */}
                            <Card>
                                <CardHeader>
                                    <CardTitle>Switch</CardTitle>
                                    <CardDescription>Toggle between checked and unchecked states</CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div className="flex items-center space-x-2">
                                        <Switch id="airplane-mode" />
                                        <Label htmlFor="airplane-mode">Airplane Mode</Label>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <Switch id="notifications" defaultChecked />
                                        <Label htmlFor="notifications">Enable Notifications</Label>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <Switch id="disabled-switch" disabled />
                                        <Label htmlFor="disabled-switch">Disabled Switch</Label>
                                    </div>
                                </CardContent>
                            </Card>

                            {/* Toggle & Toggle Group */}
                            <Card>
                                <CardHeader>
                                    <CardTitle>Toggle & Toggle Group</CardTitle>
                                    <CardDescription>Two-state buttons that can be toggled on or off</CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-6">
                                    <div>
                                        <TypographySmall className="text-muted-foreground mb-4">Single Toggle</TypographySmall>
                                        <Toggle aria-label="Toggle italic">
                                            <Italic className="h-4 w-4" />
                                        </Toggle>
                                    </div>
                                    <Separator />
                                    <div>
                                        <TypographySmall className="text-muted-foreground mb-4">Toggle Group (Single)</TypographySmall>
                                        <ToggleGroup type="single">
                                            <ToggleGroupItem value="bold" aria-label="Toggle bold">
                                                <Bold className="h-4 w-4" />
                                            </ToggleGroupItem>
                                            <ToggleGroupItem value="italic" aria-label="Toggle italic">
                                                <Italic className="h-4 w-4" />
                                            </ToggleGroupItem>
                                            <ToggleGroupItem value="underline" aria-label="Toggle underline">
                                                <Underline className="h-4 w-4" />
                                            </ToggleGroupItem>
                                        </ToggleGroup>
                                    </div>
                                    <Separator />
                                    <div>
                                        <TypographySmall className="text-muted-foreground mb-4">Toggle Group (Multiple)</TypographySmall>
                                        <ToggleGroup type="multiple">
                                            <ToggleGroupItem value="bold" aria-label="Toggle bold">
                                                <Bold className="h-4 w-4" />
                                            </ToggleGroupItem>
                                            <ToggleGroupItem value="italic" aria-label="Toggle italic">
                                                <Italic className="h-4 w-4" />
                                            </ToggleGroupItem>
                                            <ToggleGroupItem value="underline" aria-label="Toggle underline">
                                                <Underline className="h-4 w-4" />
                                            </ToggleGroupItem>
                                        </ToggleGroup>
                                    </div>
                                </CardContent>
                            </Card>

                            {/* Dropdown Menu */}
                            <Card>
                                <CardHeader>
                                    <CardTitle>Dropdown Menu</CardTitle>
                                    <CardDescription>Menu triggered by a button with actions and options</CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div className="flex gap-4">
                                        <DropdownMenu>
                                            <DropdownMenuTrigger asChild>
                                                <Button variant="outline">Open Menu</Button>
                                            </DropdownMenuTrigger>
                                            <DropdownMenuContent>
                                                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                                                <DropdownMenuSeparator />
                                                <DropdownMenuItem>
                                                    <User className="mr-2 h-4 w-4" />
                                                    Profile
                                                </DropdownMenuItem>
                                                <DropdownMenuItem>
                                                    <Settings className="mr-2 h-4 w-4" />
                                                    Settings
                                                </DropdownMenuItem>
                                                <DropdownMenuSeparator />
                                                <DropdownMenuItem>Logout</DropdownMenuItem>
                                            </DropdownMenuContent>
                                        </DropdownMenu>

                                        <DropdownMenu>
                                            <DropdownMenuTrigger asChild>
                                                <Button variant="outline">
                                                    <MoreHorizontal className="h-4 w-4" />
                                                </Button>
                                            </DropdownMenuTrigger>
                                            <DropdownMenuContent>
                                                <DropdownMenuLabel>Options</DropdownMenuLabel>
                                                <DropdownMenuSeparator />
                                                <DropdownMenuCheckboxItem checked>
                                                    Show Status Bar
                                                </DropdownMenuCheckboxItem>
                                                <DropdownMenuCheckboxItem>
                                                    Show Activity Bar
                                                </DropdownMenuCheckboxItem>
                                                <DropdownMenuSeparator />
                                                <DropdownMenuRadioGroup value="top">
                                                    <DropdownMenuRadioItem value="top">Top</DropdownMenuRadioItem>
                                                    <DropdownMenuRadioItem value="bottom">Bottom</DropdownMenuRadioItem>
                                                </DropdownMenuRadioGroup>
                                            </DropdownMenuContent>
                                        </DropdownMenu>
                                    </div>
                                </CardContent>
                            </Card>

                            {/* Hover Card */}
                            <Card>
                                <CardHeader>
                                    <CardTitle>Hover Card</CardTitle>
                                    <CardDescription>Preview content on hover</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <HoverCard>
                                        <HoverCardTrigger asChild>
                                            <Button variant="link">@shadcn</Button>
                                        </HoverCardTrigger>
                                        <HoverCardContent className="w-80">
                                            <div className="flex justify-between space-x-4">
                                                <Avatar>
                                                    <AvatarImage src="https://github.com/shadcn.png" />
                                                    <AvatarFallback>SC</AvatarFallback>
                                                </Avatar>
                                                <div className="space-y-1">
                                                    <h4 className="text-sm font-semibold">@shadcn</h4>
                                                    <p className="text-sm text-muted-foreground">
                                                        The React framework – created and maintained by @vercel.
                                                    </p>
                                                    <div className="flex items-center pt-2">
                                                        <Github className="mr-2 h-4 w-4 opacity-70" />
                                                        <span className="text-xs text-muted-foreground">
                                                            Joined December 2021
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </HoverCardContent>
                                    </HoverCard>
                                </CardContent>
                            </Card>

                            {/* Kbd */}
                            <Card>
                                <CardHeader>
                                    <CardTitle>Keyboard Key (Kbd)</CardTitle>
                                    <CardDescription>Display keyboard shortcuts</CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div className="flex items-center gap-2">
                                        <p className="text-sm">Copy:</p>
                                        <Kbd>⌘</Kbd>
                                        <Kbd>C</Kbd>
                                    </div>
                                    <div className="flex flex-wrap items-center gap-2">
                                        <p className="text-sm">Save:</p>
                                        <Kbd>Ctrl</Kbd>
                                        <span>+</span>
                                        <Kbd>S</Kbd>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <p className="text-sm">Search:</p>
                                        <Kbd>⌘</Kbd>
                                        <Kbd>K</Kbd>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <p className="text-sm">Invite User:</p>
                                        <Kbd>
                                            <UserPlus className="h-3 w-3" />
                                        </Kbd>
                                    </div>
                                </CardContent>
                            </Card>
                        </section>

                        <Separator className="my-12" />

                        {/* Command Palette - Modal */}
                        {commandOpen && (
                            <div className="fixed inset-0 z-50 bg-background/80 flex items-start justify-center pt-[20vh]">
                                <Command className="max-w-lg w-full rounded-lg border shadow-lg">
                                    <CommandInput placeholder="Search components..." />
                                    <CommandList>
                                        <CommandEmpty>No results found.</CommandEmpty>
                                        <CommandGroup heading="Components">
                                            <CommandItem onSelect={() => { window.location.hash = "typography"; setCommandOpen(false) }}>
                                                Typography
                                            </CommandItem>
                                            <CommandItem onSelect={() => { window.location.hash = "buttons"; setCommandOpen(false) }}>
                                                Buttons
                                            </CommandItem>
                                            <CommandItem onSelect={() => { window.location.hash = "forms"; setCommandOpen(false) }}>
                                                Forms
                                            </CommandItem>
                                        </CommandGroup>
                                    </CommandList>
                                </Command>
                            </div>
                        )}
                    </div>
                </Container>
            </div>
        </>
    )
}
