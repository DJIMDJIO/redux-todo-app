import styles from "../styles/modules/app.module.scss";
import Button, { SelectButton } from "./Button";
import TodoModal from "./TodoModal";
import { useState } from "react";
function AppHeader() {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <div className={styles.appHeader}>
      <Button
        type="button"
        variant="primary"
        onClick={() => setModalOpen(true)}
      >
        Add Task
      </Button>
      <SelectButton>
        <option value="all">All</option>
        <option value="incomplete">Incomplete</option>
        <option value="complete">Complete</option>
      </SelectButton>

      <TodoModal modalOpen={modalOpen} setModalOpen={setModalOpen}></TodoModal>
    </div>
  );
}

export default AppHeader;
