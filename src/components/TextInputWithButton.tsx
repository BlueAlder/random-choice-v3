import { Plus } from 'lucide-preact';
import {useRef} from "preact/hooks";

type Props = {
  onSubmit: (str: string) => void;
  disabled?: boolean;
}

export default function TextInput({onSubmit, disabled}: Props) {

  const inputRef = useRef<HTMLInputElement | null>(null);
  
  function handleFormSubmit(e: Event) {
    e.preventDefault()
    handleSubmit();
  }

  function handleSubmit() {
    if (disabled) return;
    inputRef.current?.focus()
    if(inputRef.current && inputRef.current.value != "") {
      onSubmit(inputRef.current.value)
      inputRef.current.value = "";
    }
  }
  return (
    <form onSubmit={handleFormSubmit} class="flex border border-yellow bg-white rounded-lg ">
      <input disabled={disabled || false} ref={inputRef} type="text" class=" outline-none bg-transparent	  w-full rounded-lg p-2.5"/>
      <span onClick={handleSubmit} class="cursor-pointer disabled:cursor-not-allowed flex flex-col justify-center"><Plus color="#FE654F" size={32} /></span>
    </form>
  )
}
