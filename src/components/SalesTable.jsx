import Box from "@mui/material/Box";
import { DataGrid, GridActionsCellItem, GridToolbar } from "@mui/x-data-grid";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import EditIcon from "@mui/icons-material/Edit";
import { useSelector } from "react-redux";
import useStockRequest from "../services/useStockRequest";

export default function SalesTable({ info, setInfo, handleOpen }) {
  const { sales } = useSelector((state) => state.stock);

  const { deleteStock } = useStockRequest();

  const handleEdit = (row) => {
    console.log(row);
    const { _id, brandId, productId, price, quantity } = row;
    setInfo({
      ...info,
      _id,
      brandId: brandId._id,
      productId: productId._id,
      price,
      quantity,
    });
    handleOpen();
  };
  //  console.log(info);
  const getRowId = (row) => row._id;

  const columns = [
    { field: "updatedAt", headerName: "Date", minWidth: 150, flex: 1.3 },

    {
      field: "brandId",
      headerName: "Brand",
      minWidth: 120,
      flex: 1,
      //   editable: true,
      valueGetter: (row) => row?.name,
    },
    {
      field: "productId",
      headerName: "Product",
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
            onClick={() => deleteStock("sales", props.id)}
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
        rows={sales}
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
