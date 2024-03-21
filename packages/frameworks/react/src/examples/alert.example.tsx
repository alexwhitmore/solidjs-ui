import { Terminal } from 'lucide-react'
import { Alert, AlertDescription, AlertTitle } from '../components/ui/alert'

export default function Example() {
  return (
    <div className="flex items-center justify-center h-screen max-w-md mx-auto">
      <Alert>
        <Terminal className="w-4 h-4" />
        <AlertTitle>Heads up!</AlertTitle>
        <AlertDescription>You can add components to your app using the cli.</AlertDescription>
      </Alert>
    </div>
  )
}
