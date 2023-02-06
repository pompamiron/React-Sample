import { FC, ChangeEvent, useState } from "react";
import { format } from "date-fns";
import PropTypes from "prop-types";
import {
	Tooltip,
	Divider,
	Box,
	FormControl,
	InputLabel,
	Checkbox,
	IconButton,
	Table,
	TableBody,
	TableCell,
	TableHead,
	TablePagination,
	TableRow,
	TableContainer,
	Select,
	MenuItem,
	Typography,
	useTheme,
	Grid,
} from "@mui/material";
import EditTwoToneIcon from "@mui/icons-material/EditTwoTone";
import DeleteTwoToneIcon from "@mui/icons-material/DeleteTwoTone";
import { Label } from "src/components";
import { CryptoOrder, CryptoOrderStatus } from "src/models/crypto_order";
import BulkActions from "./BulkActions";
import { useStyles } from "./styles";

interface RecentOrdersTableProps {
	className?: string;
	cryptoOrders: CryptoOrder[];
}

interface Filters {
	status?: CryptoOrderStatus;
}

const getStatusLabel = (cryptoOrderStatus: CryptoOrderStatus): JSX.Element => {
	const map = {
		failed: {
			text: "Failed",
			color: "error",
		},
		completed: {
			text: "Completed",
			color: "success",
		},
		pending: {
			text: "Pending",
			color: "warning",
		},
	};

	const { text, color }: any = map[cryptoOrderStatus];

	return <Label color={color}>{text}</Label>;
};

const applyFilters = (cryptoOrders: CryptoOrder[], filters: Filters): CryptoOrder[] => {
	return cryptoOrders.filter((cryptoOrder) => {
		let matches = true;

		if (filters.status && cryptoOrder.status !== filters.status) {
			matches = false;
		}

		return matches;
	});
};

const applyPagination = (cryptoOrders: CryptoOrder[], page: number, limit: number): CryptoOrder[] => {
	return cryptoOrders.slice(page * limit, page * limit + limit);
};

const RecentOrdersTable: FC<RecentOrdersTableProps> = ({ cryptoOrders }) => {
	const classes = useStyles();
	const [selectedCryptoOrders, setSelectedCryptoOrders] = useState<string[]>([]);
	const selectedBulkActions = selectedCryptoOrders.length > 0;
	const [page, setPage] = useState<number>(0);
	const [limit, setLimit] = useState<number>(5);
	const [filters, setFilters] = useState<Filters>({
		status: undefined,
	});

	const statusOptions = [
		{
			id: "all",
			name: "All",
		},
		{
			id: "completed",
			name: "Completed",
		},
		{
			id: "pending",
			name: "Pending",
		},
		{
			id: "failed",
			name: "Failed",
		},
	];

	const handleSelectAllCryptoOrders = (event: ChangeEvent<HTMLInputElement>): void => {
		setSelectedCryptoOrders(event.target.checked ? cryptoOrders.map((cryptoOrder) => cryptoOrder.id) : []);
	};

	const handleSelectOneCryptoOrder = (event: ChangeEvent<HTMLInputElement>, cryptoOrderId: string): void => {
		if (!selectedCryptoOrders.includes(cryptoOrderId)) {
			setSelectedCryptoOrders((prevSelected) => [...prevSelected, cryptoOrderId]);
		} else {
			setSelectedCryptoOrders((prevSelected) => prevSelected.filter((id) => id !== cryptoOrderId));
		}
	};

	const handlePageChange = (event: any, newPage: number): void => {
		setPage(newPage);
	};

	const handleLimitChange = (event: ChangeEvent<HTMLInputElement>): void => {
		setLimit(parseInt(event.target.value));
	};

	const filteredCryptoOrders = applyFilters(cryptoOrders, filters);
	const paginatedCryptoOrders = applyPagination(filteredCryptoOrders, page, limit);
	const selectedSomeCryptoOrders =
		selectedCryptoOrders.length > 0 && selectedCryptoOrders.length < cryptoOrders.length;
	const selectedAllCryptoOrders = selectedCryptoOrders.length === cryptoOrders.length;
	const theme = useTheme();

	return (
		<Grid item container>
			<Grid className={classes.tableHeader} item container>
				{selectedBulkActions ? (
					<Grid item container>
						<BulkActions />
					</Grid>
				) : (
					<Grid item container justifyContent="space-between" alignItems="center">
						<Grid item>
							<Typography variant="body1" fontWeight="bold" color="text.primary" gutterBottom noWrap>
								Recent Orders
							</Typography>
						</Grid>
						<Grid item>
							<Box width={150}>
								<FormControl fullWidth variant="outlined">
									<InputLabel>Status</InputLabel>
									<Select
										value={filters.status || "all"}
										onChange={(e) => {
											let value: CryptoOrderStatus | undefined = undefined;
											if (e.target.value !== "all") {
												value = e.target.value as CryptoOrderStatus;
											}
											setFilters((prevFilters) => ({
												...prevFilters,
												status: value || undefined,
											}));
										}}
										label="Status"
										autoWidth
									>
										{statusOptions.map((statusOption) => (
											<MenuItem key={statusOption.id} value={statusOption.id}>
												{statusOption.name}
											</MenuItem>
										))}
									</Select>
								</FormControl>
							</Box>
						</Grid>
					</Grid>
				)}
			</Grid>
			<Divider />
			<Grid item container>
				<TableContainer>
					<Table>
						<TableHead>
							<TableRow>
								<TableCell padding="checkbox">
									<Checkbox
										color="primary"
										checked={selectedAllCryptoOrders}
										indeterminate={selectedSomeCryptoOrders}
										onChange={handleSelectAllCryptoOrders}
									/>
								</TableCell>
								<TableCell>Order Details</TableCell>
								<TableCell>Order ID</TableCell>
								<TableCell>Source</TableCell>
								<TableCell align="right">Amount</TableCell>
								<TableCell align="right">Status</TableCell>
								<TableCell align="right">Actions</TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							{paginatedCryptoOrders.map((cryptoOrder) => {
								const isCryptoOrderSelected = selectedCryptoOrders.includes(cryptoOrder.id);

								return (
									<TableRow hover key={cryptoOrder.id} selected={isCryptoOrderSelected}>
										<TableCell padding="checkbox">
											<Checkbox
												color="primary"
												checked={isCryptoOrderSelected}
												onChange={(event: ChangeEvent<HTMLInputElement>) =>
													handleSelectOneCryptoOrder(event, cryptoOrder.id)
												}
												value={isCryptoOrderSelected}
											/>
										</TableCell>
										<TableCell>
											<Typography
												variant="body1"
												fontWeight="bold"
												color="text.primary"
												gutterBottom
												noWrap
											>
												{cryptoOrder.orderDetails}
											</Typography>
											<Typography variant="body2" color="text.secondary" noWrap>
												{format(cryptoOrder.orderDate, "MMMM dd yyyy")}
											</Typography>
										</TableCell>
										<TableCell>
											<Typography
												variant="body1"
												fontWeight="bold"
												color="text.primary"
												gutterBottom
												noWrap
											>
												{cryptoOrder.orderID}
											</Typography>
										</TableCell>
										<TableCell>
											<Typography
												variant="body1"
												fontWeight="bold"
												color="text.primary"
												gutterBottom
												noWrap
											>
												{cryptoOrder.sourceName}
											</Typography>
											<Typography variant="body2" color="text.secondary" noWrap>
												{cryptoOrder.sourceDesc}
											</Typography>
										</TableCell>
										<TableCell align="right">
											<Typography
												variant="body1"
												fontWeight="bold"
												color="text.primary"
												gutterBottom
												noWrap
											>
												{cryptoOrder.amountCrypto}
												{cryptoOrder.cryptoCurrency}
											</Typography>
											<Typography variant="body2" color="text.secondary" noWrap>
												{cryptoOrder.amount.toLocaleString("en-us", {
													minimumFractionDigits: 2,
												})}{" "}
												$
											</Typography>
										</TableCell>
										<TableCell align="right">{getStatusLabel(cryptoOrder.status)}</TableCell>
										<TableCell align="right">
											<Tooltip title="Edit Order" arrow>
												<IconButton
													sx={{
														"&:hover": {
															background: theme.colors.primary.lighter,
														},
														color: theme.palette.primary.main,
													}}
													color="inherit"
													size="small"
												>
													<EditTwoToneIcon fontSize="small" />
												</IconButton>
											</Tooltip>
											<Tooltip title="Delete Order" arrow>
												<IconButton
													sx={{
														"&:hover": { background: theme.colors.error.lighter },
														color: theme.palette.error.main,
													}}
													color="inherit"
													size="small"
												>
													<DeleteTwoToneIcon fontSize="small" />
												</IconButton>
											</Tooltip>
										</TableCell>
									</TableRow>
								);
							})}
						</TableBody>
					</Table>
				</TableContainer>
			</Grid>
			<Grid item container>
				<Box p={2}>
					<TablePagination
						component="div"
						count={filteredCryptoOrders.length}
						onPageChange={handlePageChange}
						onRowsPerPageChange={handleLimitChange}
						page={page}
						rowsPerPage={limit}
						rowsPerPageOptions={[5, 10, 25, 30]}
					/>
				</Box>
			</Grid>
		</Grid>
	);
};

RecentOrdersTable.propTypes = {
	cryptoOrders: PropTypes.array.isRequired,
};

RecentOrdersTable.defaultProps = {
	cryptoOrders: [],
};

export default RecentOrdersTable;
