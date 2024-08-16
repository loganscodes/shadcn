import { Button } from "@/components/ui/button";
import { EnvelopeOpenIcon, ReloadIcon } from "@radix-ui/react-icons";

export default function NamePage() {
    return (
        <div className="flex flex-wrap gap-5">
            <Button>Button</Button>
            <Button variant='destructive'>Desctructive</Button>

            <Button variant='outline'>
                <EnvelopeOpenIcon className="mr-2 h-4 w-4"/>
                Iniciar Sesión
            </Button>

            <Button>
                <ReloadIcon className="mr-2 h-4 w-4 animate-spin"/>
                Cargando
            </Button>
                
        </div>
    );
}