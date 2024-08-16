import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

type Content = {
    id: number;
    name: string;
    subtitle: string;
}

const content: Content[] = [
    { id: 1, name: "Is it accessible?", subtitle: "Yes. It adheres to the WAI-ARIA design pattern." },
    { id: 2, name: "Is it styled?", subtitle: "Yes. It comes with default styles that matches the other components&apos; aesthetic." },
    { id: 3, name: "Soy bien vergas", subtitle: "Soy el Rey" }
];

export default function NamePage() {
    return (
            <Accordion type="single" collapsible>
                {
                    content.map(({ name, subtitle }) => (
                        <AccordionItem key={name} value={name}>
                            <AccordionTrigger>{name}</AccordionTrigger>
                            <AccordionContent>
                                {subtitle}
                            </AccordionContent>
                        </AccordionItem>
                    ))
                }
            </Accordion>
    );
}