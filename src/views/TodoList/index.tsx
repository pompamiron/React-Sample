import React, { useState } from "react";
import { Card, ListItem, ListItemText, FormControl, InputLabel, Input, Button, Grid, Typography } from "@mui/material";
import { ProgressBar } from "src/components";
import { useStyles } from "./styles";

interface Todo {
	id: number;
	task: string;
	done: boolean;
}

export const TodoList: React.FC = () => {
	const [todos, setTodos] = useState<Todo[]>([
		{ id: 1, task: "Clean the room", done: false },
		{ id: 2, task: "Buy groceries", done: true },
		{ id: 3, task: "Wash the car", done: false },
	]);
	const [task, setTask] = useState("");
	const classes = useStyles();

	const handleTaskChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setTask(event.target.value);
	};

	const handleAddTodo = (event: React.FormEvent) => {
		event.preventDefault();
		if (!task) {
			return;
		}
		const newTodo: Todo = { id: Date.now(), task, done: false };
		setTodos([...todos, newTodo]);
		setTask("");
	};

	const handleTodoClick = (todoId: number) => {
		setTodos(
			todos.map((todo) => {
				if (todo.id === todoId) {
					return { ...todo, done: !todo.done };
				}
				return todo;
			})
		);
	};

	const handleDeleteTodo = (todoId: number) => {
		setTodos(todos.filter((todo) => todo.id !== todoId));
	};

	const countDone = (tasks: { id: number; task: string; done: boolean }[]) => {
		return tasks.reduce((count, task) => (task.done ? count + 1 : count), 0);
	};

	return (
		<Grid item container justifyContent="center">
			<Card className={classes.card}>
				<Grid item spacing={4} container>
					<Grid item container justifyContent="center">
						<Typography variant="h3">Todo List</Typography>
					</Grid>
					<Grid item container justifyContent="center">
						<form className={classes.form} onSubmit={handleAddTodo}>
							<FormControl className={classes.formControl}>
								<InputLabel htmlFor="task">Task</InputLabel>
								<Input
									className={classes.input}
									id="task"
									name="task"
									onChange={handleTaskChange}
									value={task}
								/>
							</FormControl>
							<Button variant="contained" color="primary" type="submit">
								Add Todo
							</Button>
						</form>
					</Grid>
					<Grid item container justifyContent="center">
						<Grid item container>
							{todos.map((todo) => (
								<ListItem key={todo.id}>
									<Grid item container key={todo.id} justifyContent="space-between">
										<Grid item xs={6}>
											<ListItemText
												primary={
													<Grid
														sx={{
															overflow: "hidden",
															textOverflow: "ellipsis",
															width: "100%",
														}}
													>
														{todo.task}
													</Grid>
												}
												secondary={todo.done ? "done" : "not done"}
												sx={{
													textOverflow: "ellipsis",
													overflow: "hidden",
												}}
												onClick={() => handleTodoClick(todo.id)}
											/>
										</Grid>
										<Grid item>
											<Button
												variant="contained"
												color="secondary"
												onClick={() => handleDeleteTodo(todo.id)}
											>
												Delete
											</Button>
										</Grid>
									</Grid>
								</ListItem>
							))}
						</Grid>
					</Grid>
					<Grid item container>
						<ProgressBar activeStep={countDone(todos)} totalSteps={todos.length + 1} />
					</Grid>
				</Grid>
			</Card>
		</Grid>
	);
};

export default TodoList;
