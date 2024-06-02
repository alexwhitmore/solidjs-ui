import {
  Clipboard,
  ClipboardControl,
  ClipboardTrigger,
  ClipboardCopied
} from '~/components/ui/clipboard'
import { Label } from '~/components/ui/label'
import { Input } from '~/components/ui/input'
import { Button } from '~/components/ui/button';

import { CheckIcon, ClipboardCopy } from 'lucide-solid'

export default function Example() {
  const clipboardValue = 'https://ark-ui.com'
  return (
    <Clipboard value={clipboardValue}>
      <Label>Copy this link</Label>
      <ClipboardControl>
        <div class='flex gap-2'>
          <Input value={clipboardValue} readonly />
          <ClipboardTrigger>
            <Button size='icon' variant='outline'>
              <ClipboardCopied copied={<CheckIcon class='w-4 h-4' />}>
                <ClipboardCopy class='w-4 h-4' />
              </ClipboardCopied>
            </Button>
          </ClipboardTrigger>
        </div>
      </ClipboardControl>
    </Clipboard>
  )
}