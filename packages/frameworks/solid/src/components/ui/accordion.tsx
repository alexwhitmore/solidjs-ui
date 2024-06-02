import {
  Accordion as ArkAccordion,
  type AccordionItemProps,
  type AccordionItemTriggerProps,
  type AccordionItemContentProps,
} from '@ark-ui/solid'
import { splitProps } from 'solid-js'
import { cn } from '../../lib/utils'
import { ChevronDown } from 'lucide-solid'
import { createSignal, onMount } from 'solid-js'

export interface AccordionContentProps extends AccordionItemContentProps {
  id: string
}

const Accordion = ArkAccordion.Root

const AccordionItem = (props: AccordionItemProps) => {
  const [, rest] = splitProps(props, ['class'])
  return <ArkAccordion.Item class={cn('border-b', props.class)} {...rest} />
}

const AccordionTrigger = (props: AccordionItemTriggerProps) => (
  <div class="flex">
    <ArkAccordion.ItemTrigger
      class={cn(
        'flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180',
        props.class,
      )}
    >
      {props.children}
      <ChevronDown class="h-4 w-4 shrink-0 transition-transform duration-400 rotate-0" />
    </ArkAccordion.ItemTrigger>
  </div>
)

const AccordionContent = (props: AccordionContentProps) => {
  const [rect, setRect] = createSignal({ height: 0, width: 0 })

  let resizeObserver: ResizeObserver

  /**
   * 16 accounts for the padding pixels below the AccordianItem which is
   * required for the dropdown animation to function correctly.
   *
   * TODO: If someone overrides the padding, I need to dynamically pull in
   * that value for the `adjustedHeight`
   */
  const handler = (entries: ResizeObserverEntry[]) => {
    const { height, width } = entries[0].contentRect
    const adjustedHeight = height + 16
    setRect({ height: adjustedHeight, width })
  }
  onMount(() => {
    const targetDiv = document.getElementById(props.id)
    if (targetDiv) {
      resizeObserver = new ResizeObserver(handler)
      resizeObserver.observe(targetDiv)
    }

    return () => {
      if (resizeObserver) resizeObserver.disconnect()
    }
  })

  return (
    <ArkAccordion.ItemContent
      class={cn(
        'animate-accordion-up overflow-hidden text-sm transition-all data-[state=open]:animate-accordion-down',
        props.class,
      )}
      style={{ '--accordion-content-height': `${rect().height}px` }}
    >
      <div id={props.id} class="pb-4 pt-0">
        {props.children}
      </div>
    </ArkAccordion.ItemContent>
  )
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
