import { Clipboard as ArkClipboard } from '@ark-ui/solid';
import type { JSX } from 'solid-js';

const Clipboard = ArkClipboard.Root;
const ClipboardControl = ArkClipboard.Control;
const ClipboardIndicator = ArkClipboard.Indicator;
const ClipboardTrigger = ArkClipboard.Trigger;

const ClipboardCopied = (props: { copied: JSX.Element; children: JSX.Element }) => {
  return (
    <ClipboardIndicator copied={props.copied}>
      {props.children}
    </ClipboardIndicator>
  );
};

export {
  Clipboard,
  ClipboardControl,
  ClipboardIndicator,
  ClipboardTrigger,
  ClipboardCopied
};
