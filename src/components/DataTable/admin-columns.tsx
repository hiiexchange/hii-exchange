/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import { type ColumnDef } from "@tanstack/react-table";
import dayjs from "dayjs";
import { ArrowUpDown } from "lucide-react";

import { Button } from "@/components/ui/button";
import ActionButton from "./ActionButton";
// import { Checkbox } from "@/components/ui/checkbox";

export interface Transaction {
  id: number;
  inputToken: string;
  outputToken: string;
  inputAmount: number;
  outputAmount: number;
  createdAt: string;
  address: string;
  isPending: boolean;
}

export const columns: ColumnDef<Transaction>[] = [
  {
    accessorKey: "id",
    header: "Order ID",
  },
  {
    accessorKey: "inputToken",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Input Token
          <ArrowUpDown className="ml-2 h-4 w-4 shrink-0" />
        </Button>
      );
    },
  },
  {
    accessorKey: "outputToken",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Output Token
          <ArrowUpDown className="ml-2 h-4 w-4 shrink-0" />
        </Button>
      );
    },
  },
  {
    accessorKey: "inputAmount",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Input Amount
          <ArrowUpDown className="ml-2 h-4 w-4 shrink-0" />
        </Button>
      );
    },
  },
  {
    accessorKey: "outputAmount",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Output Amount
          <ArrowUpDown className="ml-2 h-4 w-4 shrink-0" />
        </Button>
      );
    },
  },
  {
    accessorKey: "createdAt",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Date
          <ArrowUpDown className="ml-2 h-4 w-4 shrink-0" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const date = row.getValue("createdAt");
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      const formatted = dayjs(date as string)
        .locale("en")
        .format("DD MMM YYYY h:mmA");

      return <div>{formatted}</div>;
    },
  },
  {
    accessorKey: "address",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Address
          <ArrowUpDown className="ml-2 h-4 w-4 shrink-0" />
        </Button>
      );
    },
  },
  {
    accessorKey: "isPending",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Status
          <ArrowUpDown className="ml-2 h-4 w-4 shrink-0" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const isPending = row.getValue("isPending");

      return <div>{isPending ? "PENDING" : "APPROVED"}</div>;
    },
  },
  {
    id: "select",
    header: "Actions",
    cell: ({ row }) => <ActionButton id={row.getValue("id")} />,
    enableSorting: false,
    enableHiding: false,
  },
];
