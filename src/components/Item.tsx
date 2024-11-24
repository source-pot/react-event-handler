import {emit} from "../lib/events/emitter.ts";
import {memo} from "react";

interface Props {
  name: string,
  completed: boolean
}

function _Item({name, completed}: Props) {

    function deleteItem() {
      emit('deleteTask', {
        time: new Date(), item: {
          name,
          completed,
        }
      })
    }

    function toggleCompletion() {
      emit('completeTask', {
        time: new Date(), item: {
          name,
          completed
        }
      })
    }

    return (
      <li className={'flex justify-between items-center hover:bg-slate-800 rounded'}>
        <button onClick={toggleCompletion} className={'space-x-2 hover:underline'}>
          <span>{completed ? '☑️' : '❌'}</span>
          <span>{name}</span>
        </button>
        <button onClick={deleteItem}>Delete</button>
      </li>
    )
  }

export const Item = memo(_Item)
