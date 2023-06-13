"use client";
import { Alert } from "alertlib";

import Layout from "@/components/Layout";
import Card from "@/components/Card";

import "alertlib/dist/styles.css";

const page = () => {
  const successAlert = () => {
    Alert.success("This is success alert");
  };
  const errorAlert = () => {
    Alert.error("This is error alert");
  };
  const warningAlert = () => {
    Alert.warning("This is warning alert");
  };
  const infoAlert = () => {
    Alert.info("This is info alert");
  };

  return (
    <Layout>
      <div className="w-[85%] ml-[160px]">
        <Card title="Basic">
          <Alert />
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
