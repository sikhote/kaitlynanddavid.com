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
  const miniSearch = useMemo(() => {
    const items = data.map((item, i) => ({
      id: i,
      names: item.filter((t) => !!t),
    }));
    const _miniSearch = new MiniSearch({
      fields: ["names"],
      storeFields: ["names", "id"],
    });
    _miniSearch.addAll(items);
    return _miniSearch;
  }, [data]);
  const searchForm = useForm(getSearchForm());
  const [results, setResults] = useState<null | any[]>(null);
  const onSearch = searchForm.onSubmit((values) => {
    const results = miniSearch.search(values.name);
    const filtered = results.filter((result) => result.score >= 5);
    setResults(filtered);
  });
  const onSelect = (id: number) => {
    console.log({ id });
  };

  return (
    <div className="flex flex-col gap-10 items-center">
      <form onSubmit={onSearch} className="flex flex-col gap-2.5">
        <p>Please enter your first and last name.</p>
        <TextInput
          aria-label="First and Last Name"
          key={searchForm.key("name")}
          autoFocus
          {...searchForm.getInputProps("name")}
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
          <ul className="w-2xs [&>*:nth-child(n+2)]:pt-5">
            {results.map((item) => (
              <li key={item.id}>
                <Paper shadow="sm" p="lg">
                  <div className="flex justify-between items-center">
                    <div>
                      {item.names.map((name: string) => (
                        <Text key={name}>{name}</Text>
                      ))}
                    </div>
                    <Button onClick={() => onSelect(item.id)}>Select</Button>
                  </div>
                </Paper>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
