import { Badge } from "@/components/ui/badge";

export default function NamePage() {
    return (
        <div className="flex flex-wrap items-center gap-5">
            <Badge variant="outline">badge Outline</Badge>
            <Badge variant="default">badge Default</Badge>
            <Badge variant="destructive">badge Desctructive</Badge>
            <Badge variant="outline">badge</Badge>
            <Badge capitalize variant="succeds">badge Success</Badge>
            <Badge capitalize variant="info">badge Info</Badge>
        </div>
    );
}