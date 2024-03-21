'use client'

import * as React from 'react'
import type { CheckboxRootProps as ArkCheckboxProps, CheckboxState } from '@ark-ui/react'
import { Checkbox as ArkCheckbox } from '@ark-ui/react'
import { Check } from 'lucide-react'

import { cn } from '../../lib/utils'

const Checkbox = React.forwardRef<
  React.ElementRef<typeof ArkCheckbox.Root>,
  React.ComponentPropsWithoutRef<typeof ArkCheckbox.Root>
>(({ className, ...props }, ref) => {
  const [checked, setChecked] = React.useState<CheckboxState>(false)

  return (
    <ArkCheckbox.Root
      checked={checked}
      onCheckedChange={(e) => setChecked(e.checked)}
      ref={ref}
      className={cn('items-top group flex space-x-2', className)}
      {...props}
    >
      <ArkCheckbox.Control
        className={cn(
          'checkbox-outline flex items-center cursor-pointer peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-2 ring-offset-background has-[:focus]:ring-2 has-[:focus]:ring-blue-500 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground',
        )}
      >
        {checked && <Check className="w-4 h-4" />}
      </ArkCheckbox.Control>
    </ArkCheckbox.Root>
  )
})
Checkbox.displayName = ArkCheckbox.Root.displayName

export { Checkbox }
