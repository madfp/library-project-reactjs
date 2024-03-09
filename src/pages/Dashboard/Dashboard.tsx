import { DataTable } from "@/components/Table/data-table";
import { booksData } from "@/utils/static";
import { columns } from "@/components/Table/columns";
import { BookProps } from "@/models";
import { useState } from "react";

function Dashboard() {
  const [data, setData] = useState<BookProps[]>(booksData);
  return (
    <>
      <DataTable columns={columns} data={data} setData={setData} />
    </>
  );
}
export default Dashboard;
