import type { FunctionComponent } from "preact"

type Props = {
  text: string
  onClick: () => void
}

export default function Button({text, onClick}: Props) {
  return (
    <div>
      <button onClick={onClick} class="border transition-colors rounded p-2 shadow bg-white active:bg-orange">{text}</button>
    </div>
  )
}
