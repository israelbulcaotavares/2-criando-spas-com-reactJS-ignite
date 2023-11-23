import { Play } from "phosphor-react";

 
export function Home() {
  return (
    <div>
      <form action="">
        <label htmlFor="">Vou trabalhar em</label>
        <input id="task" />

        <label htmlFor="minutesAmount">durante</label>
        <input type="number" id="minutesAmount" />

        <span>minutos.</span>

        <button type="submit"></button>
      </form>

      <div>
        <span>0</span>
        <span>1</span>
        <span>:</span>
        <span>0</span>
        <span>0</span>
      </div>

      <button type="submit">
        <Play size={24}/>
        Começar
      </button>
    </div>
  )
}
