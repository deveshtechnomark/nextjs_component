"use client"
import { DataTable } from "datatablelib"
import "datatablelib/dist/index.css"
export default function Home() {
  const headers = [ "Id", "Name", "Email", "Number" ]
  const data = [
    {Id:1, Name: 'John Doe', Email:'john.doe@gmail.com', Number:7898589658},
    {Id:1, Name: 'Mark Johnson', Email:'markj.1085@gmail.com', Number:8977586895},
    {Id:1, Name: 'Ricky', Email:'ricky0110@gmail.com', Number:7895869879},
    {Id:1, Name: 'Michel Marko', Email:'marko.michel@gmail.com', Number:7589364586}
  ]
  return (
   <DataTable headers={headers} data={data} />
  )
}
