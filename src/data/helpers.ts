import { useMemo } from "react";

export const useMemoizeValue = (value: any) => {return useMemo(() => value, [value])};
