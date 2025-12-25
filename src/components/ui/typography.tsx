import { type ReactNode } from 'react';
import { cn } from '@/lib/utils';

export const TypographyH1 = ({ children, className }: { children: ReactNode; className?: string }) => {
    return (
        <h1 className={cn("scroll-m-20 text-center text-4xl font-extrabold tracking-tight text-balance", className)}>
            {children}
        </h1>
    )
}

export const TypographyH2 = ({ children, className }: { children: ReactNode; className?: string }) => {
    return (
        <h2 className={cn("scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0", className)}>
            {children}
        </h2>
    )
}

export const TypographyH3 = ({ children, className }: { children: ReactNode; className?: string }) => {
    return (
        <h3 className={cn("scroll-m-20 text-2xl font-semibold tracking-tight", className)}>
            {children}
        </h3>
    )
}

export const TypographyH4 = ({ children, className }: { children: ReactNode; className?: string }) => {
    return (
        <h4 className={cn("scroll-m-20 text-xl font-semibold tracking-tight", className)}>
            {children}
        </h4>
    )
}

export const TypographyP = ({ children, className }: { children: ReactNode; className?: string }) => {
    return (
        <p className={cn("leading-7 [&:not(:first-child)]:mt-6", className)}>
            {children}
        </p>
    )
}

export const TypographyBlockquote = ({ children, className }: { children: ReactNode; className?: string }) => {
    return (
        <blockquote className={cn("mt-6 border-l-2 pl-6 italic", className)}>
            {children}
        </blockquote>
    )
}

export function TypographyTable({
    header,
    body,
    className,
}: {
    header: string[];
    body: string[][];
    className?: string;
}) {
    return (
        <div className={cn("my-6 w-full overflow-y-auto", className)}>
            <table className={cn("w-full", className)}>
                <thead>
                    <tr className={cn("even:bg-muted m-0 border-t p-0", className)}>
                        {header.map((item, index) => (
                            <th key={index} className="border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right">
                                {item}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    <tr className={cn("even:bg-muted m-0 border-t p-0", className)}>
                        <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                            Empty
                        </td>
                        <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                            Overflowing
                        </td>
                    </tr>
                    <tr className={cn("even:bg-muted m-0 border-t p-0", className)}>
                        <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                            Modest
                        </td>
                        <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                            Satisfied
                        </td>
                    </tr>
                    <tr className={cn("even:bg-muted m-0 border-t p-0", className)}>
                        {body.map((item, index) => (
                            <td key={index} className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                                {item}
                            </td>
                        ))}
                    </tr>
                </tbody>
            </table>
        </div>
    )
}


export const TypographyList = ({ list, className }: { list: string[]; className?: string }) => {
    return (
        <ul className={cn("my-6 ml-6 list-disc [&>li]:mt-2", className)}>
            {list.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
        </ul>
    )
}

export const TypographyInlineCode = ({
    children,
    className,
}: {
    children: string;
    className?: string;
}) => {
    return (
        <code className={cn("bg-muted relative rounded px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold", className)}>
            {children}
        </code>
    )
}

export const TypographyLead = ({
    children,
    className,
}: {
    children: string;
    className?: string;
}) => {
    return (
        <p className={cn("text-muted-foreground text-xl", className)}>
            {children}
        </p>
    )
}

export const TypographyLarge = ({
    children,
    className,
}: {
    children: string;
    className?: string;
}) => {
    return <div className={cn("text-lg font-semibold", className)}>{children}</div>
}

export const TypographySmall = ({ children, className }: { children: string; className?: string }) => {
    return (
        <small className={cn("text-sm leading-none font-medium", className)}>{children}</small>
    )
}

export const TypographyMuted = ({ children, className }: { children: ReactNode; className?: string }) => {
    return (
        <p className={cn("text-muted-foreground text-sm", className)}>{children}</p>
    )
}








