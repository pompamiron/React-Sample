import React, { useState } from "react";
import {
	Card,
	List,
	ListItem,
	ListItemText,
	FormControl,
	InputLabel,
	Input,
	Button,
	Grid,
	Typography,
} from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";

interface Todo {
	id: number;
	task: string;
	done: boolean;
}

const useStyles = makeStyles({
	form: {
		display: "flex",
		alignItems: "center",
		marginTop: "1.25rem",
	},
	formControl: {
		marginRight: "0.625rem",
		minWidth: "12.5rem",
	},
	input: {
		width: "100%",
	},
	list: {
		marginTop: "2rem",
	},
	card: {
		width: "30rem",
	},
});

const TodoList: React.FC = () => {
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

	return (
		<Grid item container justifyContent="center">
			<Card className={classes.card}>
				<Grid item container>
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
					<Grid container justifyContent="center">
						<List>
							<Grid item container className={classes.list}>
								{todos.map((todo) => (
									<ListItem key={todo.id}>
										<Grid item container key={todo.id} justifyContent="space-between">
											<Grid item>
												<ListItemText
													primary={todo.task}
													secondary={todo.done ? "done" : "not done"}
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
						</List>
					</Grid>
				</Grid>
			</Card>
		</Grid>
	);
};

export default TodoList;
