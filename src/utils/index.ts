import { Column, Task } from "../types";

export const defaultCols: Column[] = [
  {
    id: "todo",
    title: "Todo",
  },
  {
    id: "doing",
    title: "Work in progress",
  },
  {
    id: "done",
    title: "Done",
  },
];

export const defaultTasks: Task[] = [
  {
    id: "1",
    columnId: "todo",
    description: "List admin APIs for dashboard",
  },
  {
    id: "2",
    columnId: "todo",
    description:
      "Develop user registration functionality with OTP delivered on SMS after email confirmation and phone number confirmation",
  },
  {
    id: "3",
    columnId: "doing",
    description: "Conduct security testing",
  },
  {
    id: "4",
    columnId: "doing",
    description: "Analyze competitors",
  },
  {
    id: "5",
    columnId: "done",
    description: "Create UI kit documentation",
  },
  {
    id: "6",
    columnId: "done",
    description: "Dev meeting",
  },
  {
    id: "7",
    columnId: "done",
    description: "Deliver dashboard prototype",
  },
  {
    id: "8",
    columnId: "todo",
    description: "Optimize application performance",
  },
  {
    id: "9",
    columnId: "todo",
    description: "Implement data validation",
  },
  {
    id: "10",
    columnId: "todo",
    description: "Design database schema",
  },
  {
    id: "11",
    columnId: "todo",
    description: "Integrate SSL web certificates into workflow",
  },
  {
    id: "12",
    columnId: "doing",
    description: "Implement error logging and monitoring",
  },
  {
    id: "13",
    columnId: "doing",
    description: "Design and implement responsive UI",
  },
];
