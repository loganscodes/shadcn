import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { RocketIcon } from "@radix-ui/react-icons";

type Alerts = {
    title: string;
    variant: 'default' | 'success' | 'destructive'
    alert: string;
}

const alerts: Alerts[] = [
    {
        title: 'Heads Up!',
        variant: 'default',
        alert: 'You can add components to your app using the cli.'
    },
    {
        title: 'Success',
        variant: 'success',
        alert: 'Everithing is good'
    },
    {
        title: 'Error',
        variant: 'destructive',
        alert: 'Error in function'
    }
]


export default function Page() {
    return (
        <>
            {
                alerts.map(({ title, variant, alert }) => (
                    <Alert key={title} variant={variant} className="mb-5">
                        <RocketIcon className="h-4 w-4" />
                        <AlertTitle>{title}</AlertTitle>
                        <AlertDescription>
                            {alert}
                        </AlertDescription>
                    </Alert>
                ))
            }
        </>
    );
}