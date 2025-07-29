import { API } from "@/api/api";
import { SignUp } from "@/class/sign";
import { FormSign } from "@/components/forms/forms";

import {
  CEText,
  CETextEmail,
  CETextPassword,
} from "@/components/textFields/ce-text-field";
import { useAuth } from "@/context/authContext";
import { statusExecuted, StatusExecuted } from "@/enum/sistema";
import useFormParser from "@/hooks/useFormParser";
import { OptsModel } from "@/types/opts-model";
import { ResponseModel } from "@/types/response";
import { signUpSchema } from "@/schema/singSchema";
import { useCallback, useEffect, useRef, useState } from "react";
import { CESelect, ISelectItemProps } from "@/components/selected/select";

interface ISignInFormProps {
  isOpen: boolean;
  onExecuted: (status: StatusExecuted) => void;
}

const SignUpForm = (props: ISignInFormProps) => {
  const { isOpen, onExecuted } = props;
  const { values, setValue, formErrors, parseValues } = useFormParser(
    new SignUp(),
    signUpSchema
  );
  const { createUserAccount } = useAuth();
  const [items, setItems] = useState<ISelectItemProps[]>([]);
  const [open, setOpen] = useState(false);

  const hasFetched = useRef(false);

  useEffect(() => {
    setItems([]);
    setOpen(false);
    if (isOpen && !hasFetched.current) {
      API.get<ResponseModel<OptsModel>>("/sign-up-form-get").then(
        (response) => {
          if (!response) {
            return;
          }
          const { status, resp } = response.data;

          if (status) {
            //implementar getStatus
          }

          const tmpsOpts = resp.optsSeguinto || [];

          const opts: ISelectItemProps[] = [];
          tmpsOpts.map((item) => {
            opts.push({ key: item.key, value: item.longDesc });
          });

          setItems(opts);
          setOpen(isOpen);

          parseValues(new SignUp());
        }
      );
    }
  }, [isOpen, parseValues]);

  const handleSubmit = useCallback(() => {
    //cryptografar password antes de salvar
    createUserAccount(values);

    // API.post<SignUp>('/create-user-account', values, {
    //   headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    // })
    //   .then(() => {
    //     if (onExecuted) onExecuted(statusExecuted.continue)
    //     setOpen(false)
    //   })
    //   .catch((error) => {
    //     console.error('SignIn error:', error)
    //     // Handle sign-in error, e.g., show an error message
    //   })
  }, [values]);

  return (
    <FormSign
      isFootterVertical={true}
      isOpen={open}
      isSignIn={false}
      title="Foque no que importa. Cadastre-se agora!"
      onClose={() => {
        onExecuted(statusExecuted.refresh);
      }}
      onSubmit={handleSubmit}
    >
      {items.length > 0 && (
        <>
          <CEText
            errorMessage={formErrors.longDesc}
            label="Nome da empresa"
            placeholder="Digite o nome da empresa"
            value={values.longDesc}
            onSetValue={(v) => setValue({ longDesc: v })}
          />
          <CETextEmail
            errorMessage={formErrors.userName}
            label="E-mail"
            placeholder="Digite seu e-mail"
            value={values.userName}
            onSetValue={(v) => setValue({ userName: v })}
          />
          <CETextPassword
            errorMessage={formErrors.password}
            label="Senha"
            placeholder="Digite sua senha"
            value={values.password}
            onSetValue={(v) => {
              setValue({ password: v });
            }}
          />
          <CESelect
            errorMessage={formErrors.seguimento}
            items={items}
            label="Selecione um seguimento"
            value={values.seguimento}
            onSetValue={(v) => {
              setValue({ seguimento: v });
            }}
          />
        </>
      )}
    </FormSign>
  );
};

export { SignUpForm };
