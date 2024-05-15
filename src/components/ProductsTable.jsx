import Box from "@mui/material/Box";
import { DataGrid, GridActionsCellItem, GridToolbar } from "@mui/x-data-grid";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { useSelector } from "react-redux";
import useStockRequest from "../services/useStockRequest";

export default function ProductsTable() {
  const { products } = useSelector((state) => state.stock);
  const { deleteStock } = useStockRequest();

  const getRowId = (row) => row._id;

  const columns = [
    { field: "_id", headerName: "ID", minWidth: 170, flex: 1.3 },
    {
      field: "categoryId",
      headerName: "Categories",
      minWidth: 130,
      flex: 1,
      //   editable: true,
      valueGetter: (value) => value?.name,
    },
    {
      field: "brandId",
      headerName: "Brands",
      minWidth: 120,
      flex: 1,
      //   editable: true,
      valueGetter: (value) => value?.name,
    },
    {
      field: "name",
      headerName: "Name",
      type: "text",
      minWidth: 120,
      //   editable: true,
    },
    {
      field: "quantity",
      headerName: "Stock",
      type: "number",
      minWidth: 120,
      sortable: true,
      headerAlign: "center",
      align: "center",
      //   editable: true,
    },
    {
      field: "actions",
      type: "actions",
      headerName: "Operations",
      getActions: (props) => {
        return [
          <GridActionsCellItem
            icon={<DeleteForeverIcon />}
            label="Delete"
            onClick={() => deleteStock("products", props.id)}
            key={props.id}
          />,
        ];
      },
    },
  ];

  return (
    <Box sx={{ width: "100%", marginTop: 2 }}>
      <DataGrid
        autoHeight
        rows={products}
        columns={columns}
        pageSizeOptions={[5, 25, 50, 100]}
        checkboxSelection
        disableRowSelectionOnClick
        getRowId={getRowId}
        slots={{ toolbar: GridToolbar }}
      />
    </Box>
  );
}
