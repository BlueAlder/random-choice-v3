import type { FunctionComponent } from "preact"

type Props = {
  text: string;
  onClick: () => void;
  disabled?: boolean;
}

export default function Button({text, onClick, disabled}: Props) {
  return (
    <div>
      <button disabled={disabled || false} onClick={onClick} class="border transition-colors rounded p-2 shadow bg-white active:bg-orange disabled:active:bg-white disabled:opacity-50">{text}</button>
    </div>
  )
}
