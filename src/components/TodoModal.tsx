import styles from "../styles/modules/modal.module.scss";
import { MdOutlineClose } from "react-icons/md";
import Button from "./Button";
import { ReactNode, useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../slices/TodoSlice";
import { v4 as uuid } from "uuid";
import toast from "react-hot-toast";
interface Props {
  children?: ReactNode;
  modalOpen?: boolean;
  setModalOpen?: any;
}
function TodoModal({ modalOpen, setModalOpen }: Props) {
  const [title, setTitle] = useState("");
  const [status, setStatus] = useState("incomplete");
  const dispatch = useDispatch();
  function handleSubmit(e: any): void {
    e.preventDefault();
    if (title && status) {
      dispatch(
        addTodo({
          id: uuid(),
          title,
          status,
          //   time: new Date().toLocaleString,
        })
      );
      toast.success("Task added");
      setTitle("");
      setStatus("incomplete");
      setModalOpen(false);
    } else {
      toast.error("Enter a title");
    }
  }

  return (
    modalOpen && (
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <div
            className={styles.closeButton}
            onClick={() => setModalOpen(false)}
            onKeyDown={() => setModalOpen(false)}
            tabIndex={0}
            role="buttons"
          >
            <MdOutlineClose></MdOutlineClose>
          </div>
          <form className={styles.form} onSubmit={(e) => handleSubmit(e)}>
            <h1 className={styles.formTitle}>Add Task</h1>
            <label htmlFor="title">
              Title
              <input
                type="text"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              ></input>
            </label>
            <label htmlFor="status">
              status
              <select
                name="status"
                id="status"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
              >
                <option value="incomplete">Incomplete</option>
                <option value="complete">Complete</option>
              </select>
            </label>

            <div className={styles.buttonContainer}>
              <Button type="submit" variant="primary">
                Add task
              </Button>
              <Button
                type="button"
                variant="secondary"
                onClick={() => setModalOpen(false)}
                onKeyDown={() => setModalOpen(false)}
              >
                cancel
              </Button>
            </div>
          </form>
        </div>
      </div>
    )
  );
}

export default TodoModal;
