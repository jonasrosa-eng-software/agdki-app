import { useCallback, useEffect, useState } from "react";
import { z } from "zod";

export type FormHookErrors<T> = {
  [key in keyof T]: T[key] extends Record<string, any>
    ? FormHookErrors<T[key]>
    : T[key] extends Array<T[key]>
      ? FormHookErrors<T[key]>
      : string;
};

export interface IFormHookState<T, Z> {
  parseValues: (params: T) => void;
  setValue: (param: Partial<T>) => void;
  values: T;
  modifield: string[];
  formErrors: FormHookErrors<Z>;
  disabled: boolean;
  hasErrors: boolean;
}

const recurObjFields = (newValues: any, oldValues: any, prefix: string) => {
  const m: string[] = [];

  if (oldValues == null) {
    m.push(prefix);
    return m;
  }

  for (const [kf, vf] of Object.entries(newValues ?? {})) {
    if (typeof oldValues[kf] === "object") {
      const f = recurObjFields(vf, oldValues[kf], `${prefix}#${kf}`);
      m.push(...f);
    } else if (oldValues[kf] !== vf) {
      m.push(`${prefix}#${kf}`);
    }
  }

  return m;
};

export default function useFormParser<T, Z>(
  defaultValues: T,
  schema: z.Schema<Z>
): IFormHookState<T, Z> {
  const [formErrors, setFormErrors] = useState<FormHookErrors<Z>>(
    {} as FormHookErrors<Z>
  );
  const [disabled, setDisabled] = useState(true);
  const [modifield, setModifield] = useState<string[]>([]);
  const [values, setValues] = useState<T>(defaultValues);
  const [oldValues, setOldValues] = useState("");
  const [oldMap, setOldMap] = useState(new Map());
  const [mounted, setMounted] = useState(false);
  const [hasErrors, setHasErrors] = useState(false);

  //definir modifield

  useEffect(() => {
    if (!mounted) {
      return;
    }

    const m: string[] = [];

    for (const [k, newValue] of Object.entries(new Object(values))) {
      const oldValue = oldMap.get(k);

      if (typeof newValue === "object") {
        const fields = recurObjFields(newValue, oldValues, k);

        m.push(...fields);
      } else if (oldValue !== null && oldValue !== newValue) {
        m.push(k);
      }
    }
    setModifield(m);
  }, [mounted, oldMap, values]);

  //definir FormErrors
  useEffect(() => {
    const nm: Record<string, any> = {};
    try {
      schema.parse(values);
      setFormErrors(nm as FormHookErrors<Z>);
    } catch (error) {
      if (error instanceof z.ZodError) {
        for (let i = 0; i < error.errors.length; i++) {
          const { path, message } = error.errors[i];

          let current = nm;
          let p = path;

          while (p.length > 1) {
            const [head, ...rest] = p;
            p = rest;

            if (!current[head]) {
              current[head] = typeof rest[0] === "number" ? [] : {};
            }

            current = current[head];
          }
          current[p[0]] = message;
        }
      }
      setFormErrors(nm as FormHookErrors<Z>);
    }
  }, [schema, values]);

  //definindo hasErros e disabled

  useEffect(() => {
    if (!mounted) {
      return;
    }
    const errLength = Object.keys(formErrors).length ?? 0;

    setHasErrors(errLength > 0);

    setDisabled(errLength > 0 || JSON.stringify(values) == oldValues);
  }, [formErrors, mounted, oldValues, values]);

  const setValue = useCallback((param: Partial<T>) => {
    setValues((prevValues) => ({
      ...prevValues,
      ...param,
    }));
  }, []);

  const parseValues = useCallback((param: T) => {
    const tmpMap = new Map();

    for (const [k, v] of Object.entries(new Object(param))) {
      tmpMap.set(k, v);
    }
    setOldMap(tmpMap);

    setOldValues(JSON.stringify(param));
    setValues(param);
    setMounted(true);
  }, []);

  return {
    formErrors,
    disabled,
    modifield,
    values,
    hasErrors,
    setValue,
    parseValues,
  };
}
