import * as React from 'react'
import { Avatar as ArkAvatar, type HTMLArkProps, type AvatarRootProps } from '@ark-ui/react'

import { cn } from '../../lib/utils'

const Avatar = React.forwardRef<
  React.ElementRef<typeof ArkAvatar.Root>,
  React.ComponentPropsWithoutRef<typeof ArkAvatar.Root>
>(({ className, ...props }, ref) => (
  <ArkAvatar.Root
    ref={ref}
    className={cn('relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full', className)}
    {...props}
  />
))
Avatar.displayName = ArkAvatar.Root.displayName

const AvatarImage = React.forwardRef<
  React.ElementRef<typeof ArkAvatar.Image>,
  React.ComponentPropsWithoutRef<typeof ArkAvatar.Image>
>(({ className, ...props }, ref) => (
  <ArkAvatar.Image ref={ref} className={cn('aspect-square h-full w-full', className)} {...props} />
))
AvatarImage.displayName = ArkAvatar.Image.displayName

const AvatarFallback = React.forwardRef<
  React.ElementRef<typeof ArkAvatar.Fallback>,
  React.ComponentPropsWithoutRef<typeof ArkAvatar.Fallback>
>(({ className, ...props }, ref) => (
  <ArkAvatar.Fallback
    ref={ref}
    className={cn(
      'flex h-full w-full items-center justify-center rounded-full bg-muted',
      className,
    )}
    {...props}
  />
))
AvatarFallback.displayName = ArkAvatar.Fallback.displayName

export { Avatar, AvatarImage, AvatarFallback }
