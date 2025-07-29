import { useCallback, useEffect, useState } from "react";
import { IsDateValidate } from "@/util/validate";
import { DatePicker } from "@heroui/date-picker";
import { CalendarDate, parseDate } from "@internationalized/date";
import { I18nProvider } from "@react-aria/i18n";

interface IDateProps {
  label: string;
  value: string;
  disabled?: false;
  errorMessage?: string;
  onSetValues: (v: string) => void;
}

const CEDate = (props: IDateProps) => {
  const { disabled, label, value, onSetValues, errorMessage } = props;
  const currentDate = new Date();
  const ano = currentDate.getFullYear();
  const mes = String(currentDate.getMonth() + 1).padStart(2, "0");
  const dia = String(currentDate.getDate()).padStart(2, "0");
  const [isInvalid, setIsInvalid] = useState(false);

  const [date, setDate] = useState<string>(String(`${ano}-${mes}-${dia}`));

  useEffect(() => {
    if (IsDateValidate(value)) {
      setDate(value);
    }
  }, [value]);

  useEffect(() => {
    if (errorMessage && errorMessage.length > 0) {
      setIsInvalid(true);
    } else {
      setIsInvalid(false);
    }
  }, [errorMessage]);

  const handlerDate = useCallback(
    (e: CalendarDate) => {
      const year = e.year;
      const month = String(e.month).padStart(2, "0");
      const day = String(e.day).padStart(2, "0");
      const tmpDate = `${year}-${month}-${day}`;
      setDate(tmpDate);
      onSetValues(tmpDate);
    },
    [onSetValues]
  );

  return (
    <I18nProvider locale="pt-BR">
      <DatePicker
        calendarWidth={340}
        color={isInvalid ? "danger" : "primary"}
        errorMessage={errorMessage}
        isDisabled={disabled}
        isInvalid={isInvalid}
        label={label}
        selectorButtonPlacement="end"
        value={parseDate(date)}
        variant="bordered"
        onChange={(e) => {
          if (e) {
            handlerDate(e);
          }
        }}
      />
    </I18nProvider>
  );
};

export { CEDate };
