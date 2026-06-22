import { hasLength, isEmail } from "@mantine/form";

export const getSearchForm = (): Record<string, any> => ({
  mode: "controlled",
  validateInputOnChange: true,
  initialValues: { name: "" },
});

export const getFinalForm = (): Record<string, any> => ({
  mode: "controlled",
  validateInputOnChange: true,
  initialValues: {
    firstName: "",
    lastName: "",
  },
  validate: {
    firstName: hasLength({ min: 1 }, "Enter your first name"),
    lastName: hasLength({ min: 1 }, "Enter your last name"),
  },
});
