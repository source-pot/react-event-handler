import {memo} from "react";
import {Item as ItemInterface} from "../lib/task-list/types";
import {deleteItem} from "../lib/task-list/deleteItem.ts";
import {toggleCompletion} from "../lib/task-list/toggleCompletion.ts";

interface Props {
  item: ItemInterface
}

/**
 * This component renders a single item in the list and includes links to toggle completion and delete the item.
 */
function _Item({item}: Props) {
    return (
      <li className={'flex justify-between items-center hover:bg-slate-800 rounded'}>
        <button onClick={() => toggleCompletion(item)} className={'space-x-2 hover:underline'}>
          <span>{item.completed ? '☑️' : '❌'}</span>
          <span>{item.name}</span>
          <span className={'text-sm text-slate-500'}>{item.id}</span>
        </button>
        <button onClick={() => deleteItem(item)}>Delete</button>
      </li>
    )
  }

/**
 * By memoising the component, it will only re-render when its own props change, not when the parent re-renders.
 */
export const Item = memo(_Item)
