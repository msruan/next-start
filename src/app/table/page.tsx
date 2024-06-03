import { Suspense } from "react";

import { columns } from "@/components/table/columns";
import { DataTableDemo } from "@/components/table/data-table";
import { IUser } from "@/models/user";

export default async function TablePage() {
    const response = await fetch("http://localhost:3000/api/users");
    const data: IUser[] = await response.json();
  return(

      <DataTableDemo columns={columns} data={data}></DataTableDemo>
  )
}
