import {emit} from "../lib/events/emitter.ts";
import {memo} from "react";
import {Item as ItemInterface} from "../lib/task-list/types";

interface Props {
  item: ItemInterface
}

function _Item({item}: Props) {

    function deleteItem() {
      emit('deleteTask', {
        time: new Date(), item
      })
    }

    function toggleCompletion() {
      emit('completeTask', {
        time: new Date(), item
      })
    }

    return (
      <li className={'flex justify-between items-center hover:bg-slate-800 rounded'}>
        <button onClick={toggleCompletion} className={'space-x-2 hover:underline'}>
          <span>{item.completed ? '☑️' : '❌'}</span>
          <span>{item.name}</span>
          <span className={'text-sm text-slate-500'}>{item.id}</span>
        </button>
        <button onClick={deleteItem}>Delete</button>
      </li>
    )
  }

export const Item = memo(_Item)
