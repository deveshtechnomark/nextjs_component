"use client";
import Pagination from "pagination-lib";

import Card from "@/components/Card";
import Layout from "@/components/Layout";

import "pagination-lib/dist/styles.css";
import { useState } from "react";

const page = () => {
  const [page, setPage] = useState("");

  return (
    <Layout>
      <Card title="Basic">
        <div className="flex flex-row gap-2.5">
          <Card title="Arrow">
            <Pagination totalPages={10} onChangePage={(p: any) => setPage(p)} />
          </Card>
          <Card title="Button">
            <Pagination
              totalPages={10}
              variant="buttons"
              onChangePage={(p: any) => setPage(p)}
            />
          </Card>
        </div>
      </Card>

      <Card title="With Space">
        <div className="flex flex-row gap-2.5">
          <Card title="Arrow">
            <Pagination
              totalPages={10}
              space
              onChangePage={(p: any) => setPage(p)}
            />
          </Card>
          <Card title="Button">
            <Pagination
              totalPages={10}
              variant="buttons"
              space
              onChangePage={(p: any) => setPage(p)}
            />
          </Card>
        </div>
      </Card>
    </Layout>
  );
};

export default page;
