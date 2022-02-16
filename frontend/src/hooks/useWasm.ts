import { useEffect, useState } from "react";
// @ts-ignore
import * as instance from "../wasm/wasm32-unknown-unknown/release/rust_wasm.wasm";

const useWasm = () => {
  useEffect(() => {
    const fetchWasm = async () => {
      // @ts-ignore
      console.log(instance);
    };
    fetchWasm();
  }, []);
};

export default useWasm;
