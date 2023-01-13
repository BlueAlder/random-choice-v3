import { useState } from "preact/hooks";

type useRandomSelectionOptions = {
  durationReduction?: number;
  finalDuration?: number;
  multiplier?: number;
}

export function useRandomSelection<Type>({ durationReduction = 50, finalDuration = 1000, multiplier = 1.1 }: useRandomSelectionOptions = {}) {
  const [isSelecting, setIsSelecting] = useState(false);
  const [chosenItem, setChosenItem] = useState<Type>();
  const [selectedItem, setSelectedItem] = useState(-1);
  
  function startPicking(items: any[]) {
    setChosenItem(undefined);
    setSelectedItem(Math.floor((Math.random() * items.length)))
    let intervalLength = durationReduction;
    const pickItem = () => {
      setSelectedItem(item => {
        const newItem = (item + 1) % items.length;
        intervalLength *= multiplier
        if (intervalLength < finalDuration) {
          setTimeout(pickItem, intervalLength)
        } else {
          setIsSelecting(false);
          console.log(newItem)
          setChosenItem(items[newItem]);
        }
        return newItem;
      })
    }
    setIsSelecting(true);
    pickItem();
  }

  return { startPicking, isSelecting, selectedItem, chosenItem };
}