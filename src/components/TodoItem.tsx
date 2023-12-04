import { motion } from "framer-motion";
import toast from "react-hot-toast";
import { useEffect, useState } from "react";
import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import { deleteTodo, updateTodo } from "../slices/TodoSlice";
import styles from "../styles/modules/todoItem.module.scss";
import { getClasses } from "../utils/getClasses";
import CheckButton from "./CheckButton";
import { Todo } from "../model/Todo";
const child = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

interface Props {
  todo?: Todo;
}

function TodoItem({ todo }: Props) {
  const dispatch = useDispatch();
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    if (todo?.status != undefined && todo.status == "complete") {
      setChecked(true);
    } else {
      setChecked(false);
    }
  }, [todo?.status]);

  const handleCheck = () => {
    setChecked(!checked);
    dispatch(
      updateTodo({ ...todo, status: checked ? "incomplete" : "complete" })
    );
  };

  const handleDelete = () => {
    dispatch(deleteTodo(todo?.id));
    toast.success("Todo Deleted Successfully");
  };

  return (
    <>
      <motion.div className={styles.item} variants={child}>
        <div className={styles.todoDetails}>
          <CheckButton checked={checked} handleCheck={handleCheck} />
          <div className={styles.texts}>
            <p className={getClasses([styles.todoText])}>{todo?.title}</p>
          </div>
        </div>
        <div className={styles.todoActions}>
          <div
            className={styles.icon}
            onClick={() => handleDelete()}
            onKeyDown={() => handleDelete()}
            tabIndex={0}
            role="button"
          >
            <MdDelete />
          </div>
        </div>
      </motion.div>
    </>
  );
}

export default TodoItem;
