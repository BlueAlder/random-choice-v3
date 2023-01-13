import TextInput from "../TextInputWithButton";
import { useEffect, useRef, useState } from 'preact/hooks';
import Card, { Highlight } from "../Card";
import Button from "../Button";
import { useRandomSelection } from "./useRandomSelection";

const bruh = [
  "asdasd",
  "looooooooooong",
  "long but with different words",
  "s",
  "🤚🤚🤚🤚🤚🤚🤚🤚🤚🤚🤚🤚"
];

export default function RandomSelector() {

  const [items, setItems] = useState<string[]>([])
  const [errorMsg, setErrorMsg] = useState("");
  const {startPicking, isSelecting, selectedItem, chosenItem} = useRandomSelection<string>({finalDuration: 600});

  function handleStartSelection() {
    if (items.length < 2) {
      setErrorMsg("Gotta add at least 2 items!")
    } else {
      startPicking(items);
    }
  }

  function handleDeleteCard(index: number) {
    setItems([
      ...items.slice(0, index),
      ...items.slice(index + 1)
    ])
  }

  function handleAddNewItem(item: string) {
    setErrorMsg("");
    setItems([...items, item])
  }

  function getHighlightStatus(index: number) : Highlight{
    if (selectedItem === index) {
      if (isSelecting) return Highlight.Potential
      return Highlight.Selected
    }
    return Highlight.None
  }

  return (
    <div className="flex flex-col gap-5">
      <div className="container  max-w-xs">
        <TextInput disabled={isSelecting} onSubmit={handleAddNewItem} />

      </div>
      <div className="flex container flex-wrap gap-2  justify-center">
        {items.map((item, idx) => <Card highlight={getHighlightStatus(idx)} onDelete={() => handleDeleteCard(idx)} key={idx} text={item} />)}
      </div>
      <Button disabled={isSelecting} onClick={handleStartSelection} text="Choose for me" />
      <div>
        <p>You should: {chosenItem}</p>
      </div>
      <div>
        <p class="text-red-600">{errorMsg}</p>
      </div>
    </div>
  )
}


