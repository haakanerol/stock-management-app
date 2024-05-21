import Grid from "@mui/material/Grid";
import { AreaChart } from "@tremor/react";
import { useSelector } from "react-redux";

const dataFormatter = (number) =>
  `€${Intl.NumberFormat("us").format(number).toString()}`;

export default function Charts() {
  const { sales, purchases } = useSelector((state) => state.stock);

  const salesData = sales.map((item) => ({
    date: new Date(item.updatedAt).toLocaleDateString("no-NO"),
    amount: item.amount,
  }));
  const purchasesData = purchases.map((item) => ({
    date: new Date(item.updatedAt).toLocaleDateString("no-NO"),
    amount: item.amount,
  }));

  return (
    <Grid container spacing={2} marginTop={2} justifyContent={"center"}>
      <Grid item md={10} lg={6} minWidth={350}>
        <AreaChart
          className="h-80"
          data={salesData}
          index="date"
          categories={["amount"]}
          colors={["indigo"]}
          valueFormatter={dataFormatter}
          yAxisWidth={60}
          onValueChange={(v) => console.log(v)}
        />
      </Grid>

      <Grid item md={10} lg={6} minWidth={350}>
        <AreaChart
          className="h-80"
          data={purchasesData}
          index="date"
          categories={["amount"]}
          colors={["rose"]}
          valueFormatter={dataFormatter}
          yAxisWidth={60}
          onValueChange={(v) => console.log(v)}
        />
      </Grid>
    </Grid>
  );
}
