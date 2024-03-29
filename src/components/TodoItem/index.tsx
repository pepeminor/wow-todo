"use client";

import { useAppModalContext } from "@/Context/ModalContext";
import { StatusText, TodoItemCSS } from "@/app/styled";
import { ITodo } from "@/state/todo/todoSlice";

import { BaseSyntheticEvent, memo, useCallback } from "react";
import DeleteTodoModal from "@/components/Modals/DeleteTodoModal";
import EditTodoModal from "@/components/Modals/EditTodoModal";
import InfoTodoModal from "@/components/Modals/InfoTodoModal";
import { SORT_STATUS_TODO } from "@/state/sortBy/sortBySlice";
import useWindowSize from "@/hooks/useWindowSize";

interface IProps {
  todo: ITodo;
}

const TodoItem = ({ todo }: IProps) => {
  const { openModal } = useAppModalContext();
  const { width } = useWindowSize();

  const isMobile = width < 769;

  const isDoneText = todo.isDone
    ? SORT_STATUS_TODO.COMPLETE
    : SORT_STATUS_TODO.PENDING;

  const onOpenModalDeploy = useCallback(() => {
    return (
      openModal &&
      openModal?.({
        title: "Todo Detail",
        style: {
          top: isMobile ? 0 : 150,
          background: "white",
          border: "1px solid #494747",
          color: "black",
        },
        body: <InfoTodoModal todo={todo} />,
      })
    );
  }, [openModal, todo]);

  const openDeleteModal = useCallback(
    (e: BaseSyntheticEvent) => {
      e.stopPropagation();
      return (
        openModal &&
        openModal?.({
          style: {
            top: isMobile ? 0 : 150,
            background: "white",
            border: "1px solid #494747",
            color: "black",
            height: "auto",
          },
          body: <DeleteTodoModal todo={todo} />,
        })
      );
    },
    [openModal, todo, width],
  );

  const openEditTodoModal = useCallback(
    (e: BaseSyntheticEvent) => {
      e.stopPropagation();
      return (
        openModal &&
        openModal?.({
          style: {
            top: isMobile ? 0 : 100,
            background: "white",
            border: "1px solid #494747",
            color: "black",
            height: "auto",
          },
          body: <EditTodoModal todo={todo} />,
        })
      );
    },
    [openModal, todo, width],
  );

  return (
    <TodoItemCSS draggable onClick={onOpenModalDeploy}>
      <div className="group-left">
        {/* <input onClick={(e) => e.stopPropagation()} type="checkbox" /> */}
        <StatusText $isDone={todo.isDone}>{isDoneText}</StatusText>
        <p>{todo.title}</p>
      </div>
      <div className="group-actions">
        <p onClick={openEditTodoModal}>📝</p>
        <p onClick={openDeleteModal}>✖️</p>
      </div>
    </TodoItemCSS>
  );
};

export default memo(TodoItem);
