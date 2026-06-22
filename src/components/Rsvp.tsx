"use client";

import {
  Button,
  Checkbox,
  Group,
  TextInput,
  Text,
  Title,
  Paper,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { getSearchForm } from "@/lib/forms";
import { useMemo, useState } from "react";
import MiniSearch from "minisearch";

export default function Rsvp({ data }: { data: string[][] }) {
  const { miniSearch, items } = useMemo(() => {
    const _items = data.map((item, i) => ({
      id: i,
      names: item.filter((t) => !!t),
    }));
    const _miniSearch = new MiniSearch({
      fields: ["names"],
      storeFields: ["names", "id"],
    });
    _miniSearch.addAll(_items);
    return { miniSearch: _miniSearch, items: _items };
  }, [data]);
  const searchForm = useForm(getSearchForm());
  const [results, setResults] = useState<null | any[]>(null);
  const onSearch = searchForm.onSubmit((values) => {
    const results = miniSearch.search(values.name);
    const filtered = results.filter((result) => result.score >= 5);
    setResults(filtered);
  });
  const [record, setRecord] = useState<null | any>(null);
  const onSelect = (id: number) => {
    const found = results?.find((item) => item.id === id);

    if (found) {
      setRecord(record);
    }
  };

  return (
    <div className="flex flex-col gap-10 items-center">
      <form onSubmit={onSearch} className="flex flex-col gap-2.5">
        <p>Please enter your first and last name</p>
        <TextInput
          aria-label="First and Last Name"
          key={searchForm.key("name")}
          autoFocus
          {...searchForm.getInputProps("name")}
          inputContainer={(children) => (
            <>
              {children}
              <Text size="xs" mt={2.5}>
                Ex. Sarah Fortune (not The Fortune Family)
              </Text>
            </>
          )}
        />
        <Button fullWidth type="submit">
          Search
        </Button>
      </form>
      <div>
        {results !== null && results?.length === 0 && (
          <p>No results found, please try again.</p>
        )}
        {results !== null && results?.length > 0 && (
          <ul className="w-2xs [&>*:nth-child(n+2)]:mt-5">
            {results.map((item) => (
              <li
                key={item.id}
                className="flex justify-between items-center border border-gray-300 p-5 rounded-lg"
              >
                <div>
                  {item.names.map((name: string) => (
                    <Text key={name}>{name}</Text>
                  ))}
                </div>
                <Button onClick={() => onSelect(item.id)}>Select</Button>
              </li>
            ))}
          </ul>
        )}
      </div>
      {record && <div>{record.names.join(", ")}</div>}
    </div>
  );
}
