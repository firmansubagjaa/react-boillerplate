import { Container } from "@/components/ui/container";
import { Empty, EmptyDescription, EmptyHeader, EmptyMedia, EmptyTitle } from "@/components/ui/empty";
import { TypographyH1, TypographyP } from "@/components/ui/typography";
import { CircleX } from "lucide-react";

const Error404 = () => {
    return (
        <Container className="flex items-center justify-center h-screen">
            <Empty >
                <EmptyHeader>
                    <EmptyTitle>
                        <TypographyH1>404</TypographyH1>
                    </EmptyTitle>
                    <EmptyDescription>
                        <TypographyP>Page Not Found</TypographyP>
                    </EmptyDescription>
                </EmptyHeader>
            </Empty>
        </Container>
    )
}

export default Error404
