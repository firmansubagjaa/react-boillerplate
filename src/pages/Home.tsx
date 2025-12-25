import { TypographyBlockquote, TypographyH1, TypographyH2, TypographyH3, TypographyH4, TypographyInlineCode, TypographyLarge, TypographyLead, TypographyList, TypographyMuted, TypographyP, TypographySmall, TypographyTable } from "@/components/ui/typography";

export default function Home() {
    return (
        <div>
            <TypographyH1>Home</TypographyH1>
            <TypographyH2>Home</TypographyH2>
            <TypographyH3>Home</TypographyH3>
            <TypographyH4>Home</TypographyH4>
            <TypographyP>Home</TypographyP>
            <TypographyBlockquote>Home</TypographyBlockquote>
            <TypographyTable header={['Header 1', 'Header 2']} body={[
                ['Row 1', 'Row 2'],
                ['Row 3', 'Row 4'],
            ]} />
            <TypographyList list={['Item 1', 'Item 2', 'Item 3']} />
            <TypographyInlineCode>Home</TypographyInlineCode>
            <TypographyLead>Home</TypographyLead>
            <TypographyLarge>Home</TypographyLarge>
            <TypographySmall>Home</TypographySmall>
            <TypographyMuted>Home</TypographyMuted>
        </div>
    )
}