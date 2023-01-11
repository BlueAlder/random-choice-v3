import { Plus } from 'lucide-preact';
import {useRef} from "preact/hooks";

type Props = {
  onSubmit: (str: string) => void
}

export default function TextInput({onSubmit}: Props) {

  const inputRef = useRef<HTMLInputElement | null>(null);
  
  function handleFormSubmit(e: Event) {
    e.preventDefault()
    handleSubmit();
  }

  function handleSubmit() {
    inputRef.current?.focus()
    if(inputRef.current) {
      onSubmit(inputRef.current.value)
      inputRef.current.value = "";
    }
  }
  return (
    <form onSubmit={handleFormSubmit} class="flex border border-yellow bg-slate-100 rounded-lg">
      <input ref={inputRef} type="text" class=" outline-none bg-transparent	  w-full rounded-lg p-2.5"/>
      <span onClick={handleSubmit} class="cursor-pointer"><Plus color="#FE654F" size={48} /></span>
    </form>
  )
}
