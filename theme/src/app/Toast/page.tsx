"use client";
import { Toast } from "toastlib";

import Layout from "@/components/Layout";
import Card from "@/components/Card";

import "toastlib/dist/styles.css";

const page = () => {
  const successAlert = () => {
    Toast.success("This is success toast");
  };
  const errorAlert = () => {
    Toast.error("This is error toast");
  };
  const warningAlert = () => {
    Toast.warning("This is warning toast");
  };
  const infoAlert = () => {
    Toast.info("This is info toast");
  };

  return (
    <Layout>
      <div className="w-[85%] ml-[160px]">
        <Card title="Basic">
          <Toast />
          <div className="flex flex-row gap-2.5">
            <Card title="Success">
              <button
                className="border-2 border-[#02B89D] text-[#02B89D] rounded-md w-[100px] h-[50px]"
                type="button"
                onClick={successAlert}
              >
                Click me
              </button>
            </Card>

            <Card title="Error">
              <button
                className="border-2 border-[red] text-[red] rounded-md w-[100px] h-[50px]"
                type="button"
                onClick={errorAlert}
              >
                Click me
              </button>
            </Card>

            <Card title="Warning">
              <button
                className="border-2 border-amber-300 text-amber-300 rounded-md w-[100px] h-[50px]"
                type="button"
                onClick={warningAlert}
              >
                Click me
              </button>
            </Card>

            <Card title="Info">
              <button
                className="border-2 border-[gray] text-[gray] rounded-md w-[100px] h-[50px]"
                type="button"
                onClick={infoAlert}
              >
                Click me
              </button>
            </Card>
          </div>
        </Card>
      </div>
    </Layout>
  );
};

export default page;
