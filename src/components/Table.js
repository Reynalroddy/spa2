import React from "react";
import DataTable from "react-data-table-component";
import { createTheme } from "react-data-table-component";
const columns = [
  {
    name: "Title",
    selector: (row) => row.title,
    sortable: true,
  },
  {
    name: "Year",
    selector: (row) => row.year,
    sortable: true,
  },
  {
    name: "Age",
    selector: (row) => row.age,
  },
  {
    name: "Class",
    selector: (row) => row.class,
  },
  {
    name: "Job",
    selector: (row) => row.job,
    sortable: true,
  },
];

const data = [
  {
    id: 1,
    title: "Beetlejuice",
    year: "1988",
    age: 23,
    class: "js2",
    job: "designer",
  },
  {
    id: 2,
    title: "Ghostbusters",
    year: "1984",
    age: 23,
    class: "js2",
    job: "designer",
  },
  {
    id: 3,
    title: "narcors",
    year: "2009",
    age: 32,
    class: "js7",
    job: "cartel",
  },

  {
    id: 4,
    title: "tally",
    year: "1984",
    age: 21,
    class: "js2",
    job: "tailor",
  },

  {
    id: 5,
    title: "Merlin",
    year: "1904",
    age: 26,
    class: "js2",
    job: "ui/ux",
  },

  {
    id: 6,
    title: "Avatar",
    year: "1994",
    age: 22,
    class: "js3",
    job: "dev",
  },
];

createTheme(
  "dark",
  {
    text: {
      primary: "#fffff",
      secondary: "#2aa198",
    },
    background: {
      default: "transparent",
    },
    context: {
      background: "#cb4b16",
      text: "#FFFFFF",
    },
    divider: {
      default: "grey",
    },
  },
  "solarized"
);
const Table = () => {
  return (
    <DataTable
      columns={columns}
      data={data}
      pagination
      theme="dark"
      selectableRows
    />
  );
};

export default Table;
