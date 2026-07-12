import type { UseFormInput } from "@mantine/form";
import { isEmail } from "@mantine/form";
import { events } from "@/lib/events";
import type { Event, Party } from "@/lib/types";

export const getSearchForm = (): UseFormInput<{ name: string }> => ({
  mode: "controlled",
  validateInputOnChange: true,
  initialValues: { name: "" },
});

export const getFieldKey = (n: string, e: string, q: string): string =>
  `${n} - ${e} - ${q}`;

export const getFormFieldKey = (n: string, e: string, q: string): string =>
  `party.${n} - ${e} - ${q}`;

export const getPartyFields = (party: Party): Record<string, string> =>
  party.reduce((acc: Record<string, string>, name: string) => {
    events.forEach(({ title, questions }: Event) => {
      questions.forEach((q) => {
        acc[getFieldKey(name, title, q.type)] = "";
      });
    });
    return acc;
  }, {});

export const getFinalForm = (): UseFormInput<{
  email: string;
  party: Record<string, string>;
}> => ({
  mode: "controlled",
  validateInputOnChange: true,
  initialValues: {
    email: "",
    party: {},
  },
  validate: {
    email: isEmail("Enter an email"),
  },
});
