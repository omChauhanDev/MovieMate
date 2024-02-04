import { Button } from "./components/ui/button";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
function App() {
  return (
    <div className="min-h-screen flex flex-col gap-4 items-center justify-center h-full bg-gray-200 font-bold">
      <h1 className="text-3xl">Hello World</h1>
      <Button variant="outline">Hello ShadCN</Button>
      <div>
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button>Open Dialog</Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
              <AlertDialogDescription asChild>
                <p>
                  This action cannot be undone. This will permanently delete
                  your account and remove your data from our servers.
                </p>
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction>Continue</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    </div>
  );
}

export default App;
