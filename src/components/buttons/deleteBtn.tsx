import { todoItem } from "../../typescript/interfaces";
import styles from "./listButtons.module.css";
import { useDispatch } from "react-redux";
import { deleteTask } from "../../redux/actions";
import { MouseEvent } from "react";

export function DeleteBtn(props: Partial<todoItem>) {
  const dispatch = useDispatch();
  function deleteTaskHandler(e: MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    dispatch(deleteTask(e.currentTarget.id));
  }
  return (
    <div className={styles.buttonWrapper}>
      <button
        className={styles.buttonTask}
        onClick={(e) => deleteTaskHandler(e)}
        id={props.id}
      >
        <svg
          version="1.1"
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="25px"
          height="25px"
          viewBox="0 0 458.5 458.5"
        >
          <g>
            <path
              d="M382.078,57.069h-89.78C289.128,25.075,262.064,0,229.249,0S169.37,25.075,166.2,57.069H76.421
				c-26.938,0-48.854,21.916-48.854,48.854c0,26.125,20.613,47.524,46.429,48.793V399.5c0,32.533,26.467,59,59,59h192.508
				c32.533,0,59-26.467,59-59V154.717c25.816-1.269,46.429-22.668,46.429-48.793C430.933,78.985,409.017,57.069,382.078,57.069z
				 M229.249,30c16.244,0,29.807,11.673,32.76,27.069h-65.52C199.442,41.673,213.005,30,229.249,30z M354.503,399.501
				c0,15.991-13.009,29-29,29H132.995c-15.991,0-29-13.009-29-29V154.778c12.244,0,240.932,0,250.508,0V399.501z M382.078,124.778
				c-3.127,0-302.998,0-305.657,0c-10.396,0-18.854-8.458-18.854-18.854S66.025,87.07,76.421,87.07h305.657
				c10.396,0,18.854,8.458,18.854,18.854S392.475,124.778,382.078,124.778z"
            />
            <path
              d="M229.249,392.323c8.284,0,15-6.716,15-15V203.618c0-8.284-6.715-15-15-15c-8.284,0-15,6.716-15,15v173.705
				C214.249,385.607,220.965,392.323,229.249,392.323z"
            />
            <path
              d="M306.671,392.323c8.284,0,15-6.716,15-15V203.618c0-8.284-6.716-15-15-15s-15,6.716-15,15v173.705
				C291.671,385.607,298.387,392.323,306.671,392.323z"
            />
            <path
              d="M151.828,392.323c8.284,0,15-6.716,15-15V203.618c0-8.284-6.716-15-15-15c-8.284,0-15,6.716-15,15v173.705
				C136.828,385.607,143.544,392.323,151.828,392.323z"
            />
          </g>
        </svg>
      </button>
    </div>
  );
}
