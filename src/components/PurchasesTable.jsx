import Box from "@mui/material/Box";
import { DataGrid, GridActionsCellItem, GridToolbar } from "@mui/x-data-grid";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import EditIcon from "@mui/icons-material/Edit";
import { useSelector } from "react-redux";
import useStockRequest from "../services/useStockRequest";

export default function PurchasesTable({ info, setInfo }) {
  const { purchases } = useSelector((state) => state.stock);
  
  const { deleteStock, putStock } = useStockRequest();

  const handleEdit = (row) => {
    console.log(row);
    
    
  };

  const getRowId = (row) => row._id;

  const columns = [
    { field: "updatedAt", headerName: "Date", minWidth: 150, flex: 1.3 },
    {
      field: "firmId",
      headerName: "Firms",
      minWidth: 130,
      flex: 1,
      //   editable: true,
      //   valueGetter: (value) => value?.name,
      valueGetter: (value, row) => {
        // console.log("ROW:", row, "Value:",value)
        return row.firmId.name;
      },
    },
    {
      field: "brandId",
      headerName: "Brands",
      minWidth: 120,
      flex: 1,
      //   editable: true,
      valueGetter: (row) => row?.name,
    },
    {
      field: "productId",
      headerName: "Products",
      minWidth: 120,
      flex: 1,
      //   editable: true,
      valueGetter: (row) => row?.name,
    },
    {
      field: "quantity",
      headerName: "Quantity",
      type: "number",
      align: "center",
      minWidth: 100,
      flex: 1,
      //   editable: true,
      // valueGetter: (value, row) => row?.quantity,
    },
    {
      field: "price",
      headerName: "Price",
      type: "number",
      minWidth: 100,
      headerAlign: "center",
      align: "center",
      //   editable: true,
    },
    {
      field: "amount",
      headerName: "Amount",
      minWidth: 100,
      flex: 1,
      // valueGetter: (value, row) => {
      //   const price = row.price || 0;
      //   const quantity = row?.quantity || 0;
      //   return price * quantity;
      // },
    },

    {
      field: "actions",
      type: "actions",
      headerName: "Operations",
      getActions: (props) => {
        return [
          <GridActionsCellItem
            icon={<EditIcon />}
            label="Delete"
            onClick={() => handleEdit(props.row)}
            key={props.id}
          />,
          <GridActionsCellItem
            icon={<DeleteForeverIcon />}
            label="Delete"
            onClick={() => deleteStock("purchases", props.id)}
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
        rows={purchases}
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
