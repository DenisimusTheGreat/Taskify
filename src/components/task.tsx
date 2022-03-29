import { completeTask } from "../redux/actions";
import { useDispatch } from "react-redux";
import { MouseEvent } from "react";
import { todoItem } from "../typescript/interfaces";
import { ListBtns } from "./buttons/listBtns";
import styles from "./task.module.css";

export function Task(props: Partial<todoItem>) {
  return (
    <li className={styles.activeTasks_li} id={props.id}>
      <p className={styles.taskP}>{props.taskText}</p>
      <ListBtns id={props.id} />
    </li>
  );
}
