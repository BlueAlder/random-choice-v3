import TextInput from "../TextInputWithButton";
import { useRef, useState } from 'preact/hooks';
import Card from "../Card";
import Button from "../Button";

const bruh = [
  "asdasd",
  "looooooooooong",
  "long but with different words",
  "s",
  "🤚🤚🤚🤚🤚🤚🤚🤚🤚🤚🤚🤚"
];

export default function RandomSelector() {

  const intervalLength = 100;
  const chooseDuration = 3000;

  const [items, setItems] = useState<string[]>(bruh)
  const [isSelecting, setIsSelecting] = useState(false);
  const [selectedItem, setSelectedItem] = useState(-1);
  const selectedItemRef = useRef(selectedItem);
  selectedItemRef.current = selectedItem;
  const [chosenItem, setChosenItem] = useState("");

  function handleStartSelection() {
    setIsSelecting(true);
    const interval = setInterval(() => {
      setSelectedItem(Math.floor(Math.random() * items.length));
    }, intervalLength);

    setTimeout(() => {
      clearInterval(interval);
      setIsSelecting(false);
      setChosenItem(items[selectedItemRef.current]);
      console.log(selectedItemRef.current)
    }, chooseDuration)
  }

  function handleAddNewItem(item: string) {
    setItems([...items, item])
  }

  return (
    <div className="flex flex-col gap-5">
      <div className="container  max-w-xs">
        <TextInput disabled={isSelecting} onSubmit={handleAddNewItem} />

      </div>
      <div className="flex container flex-wrap gap-2  justify-center">
        {items.map((item, idx) => <Card highlight={selectedItem === idx} key={idx} text={item} />)}
      </div>
      <Button disabled={isSelecting} onClick={handleStartSelection} text="Choose for me" />
      <div>
        <p>You should: {chosenItem}</p>
      </div>
    </div>
  )
}
