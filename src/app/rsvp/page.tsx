"use client";

import {
  Button,
  Divider,
  Group,
  Radio,
  Select,
  Stack,
  Text,
  TextInput,
  Title,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import MiniSearch, { type SearchResult } from "minisearch";
import { useEffect, useMemo, useState } from "react";
import { events } from "@/lib/events";
import {
  getFinalForm,
  getFormFieldKey,
  getPartyFields,
  getSearchForm,
} from "@/lib/forms";
import { parties } from "@/lib/parties";

export default function Page() {
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const miniSearch = useMemo(() => {
    const items = parties.map((party, i) => ({ id: i, names: party }));
    const _miniSearch = new MiniSearch({
      fields: ["names"],
      storeFields: ["names", "id"],
    });
    _miniSearch.addAll(items);
    return _miniSearch;
  }, []);
  const searchForm = useForm(getSearchForm());
  const [results, setResults] = useState<null | SearchResult[]>(null);
  const onSearch = searchForm.onSubmit((values) => {
    if (values?.name?.split(" ").length < 2) {
      setResults([]);
      return;
    }

    const results = miniSearch.search(values.name);
    const filtered = results.filter((result) => result.score >= 5);
    setResults(filtered);
  });
  const [record, setRecord] = useState<null | SearchResult>(null);
  const finalForm = useForm(getFinalForm());
  const isLoading = status === "loading";

  const onSelect = (id: number) =>
    setRecord(results?.find((item) => item.id === id) ?? null);
  const onStartOver = () => {
    setRecord(null);
    setResults(null);
    searchForm.setFieldValue("name", "");
    setStatus("idle");
  };
  const onFinalSubmit = finalForm.onSubmit(async (values) => {
    setStatus("loading");

    try {
      const res = await fetch("/api/rsvp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Failed to rsvp.");
      }

      onStartOver();
      setStatus("success");
    } catch (_) {
      setStatus("error");
    }
  });

  useEffect(() => {
    finalForm.setValues({
      party: record?.names ? getPartyFields(record?.names) : {},
    });
    finalForm.clearErrors();
  }, [finalForm, record]);

  return (
    <div className="flex flex-col gap-10 items-center">
      {status === "error" && (
        <div className="flex flex-col items-center">
          <Title order={2} ta="center">
            Sorry, there was an issue!
          </Title>
          <Text maw={300} mt={10}>
            If you are seeing this, please try back later or contact
            david@sinclair.tech and let us know. Thanks!
          </Text>
        </div>
      )}
      {status === "success" && (
        <div className="flex flex-col items-center">
          <Title order={2} ta="center">
            Thank you!
          </Title>
          <Text maw={300} mt={10}>
            We appreciate your response. Feel free to resubmit by September if
            you would like to update any answers.
          </Text>
          <Button onClick={onStartOver} variant="outline" mt={20}>
            Start Over
          </Button>
        </div>
      )}
      {status === "idle" && (
        <>
          {!record && (
            <>
              <Text
                className="max-w-lg w-full"
                textWrap="balance"
                mx="auto"
                ta="center"
              >
                If you're responding for you and a guest (or your family),
                you'll be able to RSVP for your entire group on the next page.
                Please enter the first and last name of one member of your party
                below.
              </Text>
              <form
                onSubmit={onSearch}
                className="max-w-2xs w-full flex flex-col gap-2.5"
              >
                <TextInput
                  aria-label="First and Last Name"
                  key={searchForm.key("name")}
                  autoFocus
                  {...searchForm.getInputProps("name")}
                  inputContainer={(children) => (
                    <>
                      {children}
                      <Text size="xs" mt={2.5}>
                        Ex. Sarah Fortune (not Dr. & Ms. Fortune)
                      </Text>
                    </>
                  )}
                />
                <Button fullWidth type="submit">
                  Search
                </Button>
              </form>
              <div className="max-w-2xs w-full">
                {results !== null && results?.length === 0 && (
                  <p>No results found, please try again.</p>
                )}
                {results !== null && results?.length > 0 && (
                  <ul className="[&>*:nth-child(n+2)]:mt-5">
                    {results.map((item) => (
                      <li
                        key={item.id}
                        className="flex justify-between items-center border border-gray-300 p-5"
                      >
                        <div>
                          {item.names.map((name: string) => (
                            <Text key={name}>{name}</Text>
                          ))}
                        </div>
                        <Button onClick={() => onSelect(item.id)}>
                          Select
                        </Button>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </>
          )}
          {record && (
            <form
              onSubmit={onFinalSubmit}
              className="max-w-sm w-full flex flex-col items-center gap-10"
            >
              <Title order={2} ta="center">
                Please fill out all fields
              </Title>
              <TextInput
                label="Email address"
                key={finalForm.key("email")}
                autoFocus
                {...finalForm.getInputProps("email")}
                maw={300}
                w="100%"
                inputContainer={(children) => (
                  <>
                    {children}
                    <Text size="xs" mt={2.5}>
                      This will be used to contact the party with updates
                    </Text>
                  </>
                )}
              />
              <ul className="flex flex-col text-center gap-10 w-full">
                {[[events[0]], [events[1], events[2]]].map((events) => (
                  <li className="flex flex-col" key={events[0].title}>
                    <Title order={4}>{events[0].date}</Title>
                    <ul className="flex flex-col gap-10 mt-5">
                      {events.map(({ title, time, questions }) => (
                        <li key={title} className="flex flex-col gap-3">
                          <div>
                            <Title order={5}>{title}</Title>
                            <Text>{time}</Text>
                          </div>
                          <ul className="flex flex-col text-left">
                            {record.names.map((name: string, i: number) => (
                              <li key={name}>
                                {i === 0 && <Divider />}
                                <div className="py-5 flex justify-between items-center">
                                  {name}
                                  <ul className="flex flex-col gap-5">
                                    {questions.map(({ type, options }) => {
                                      const key = getFormFieldKey(
                                        name,
                                        title,
                                        type,
                                      );
                                      return (
                                        <li key={key} className="w-[160px]">
                                          {type === "Dinner option" && (
                                            <Select
                                              label="Select a dinner option"
                                              data={options}
                                              key={finalForm.key(key)}
                                              {...finalForm.getInputProps(key)}
                                            />
                                          )}
                                          {type === "Will attend" && (
                                            <Radio.Group
                                              key={finalForm.key(key)}
                                              {...finalForm.getInputProps(key)}
                                            >
                                              <Stack gap={5}>
                                                <Radio
                                                  label="Will attend"
                                                  value="Will attend"
                                                />
                                                <Radio
                                                  label="Will not attend"
                                                  value="Will not attend"
                                                />
                                              </Stack>
                                            </Radio.Group>
                                          )}
                                        </li>
                                      );
                                    })}
                                  </ul>
                                </div>
                                <Divider />
                              </li>
                            ))}
                          </ul>
                        </li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ul>
              <Group justify="center">
                <Button onClick={onStartOver} variant="outline">
                  Start Over
                </Button>
                <Button type="submit" loading={isLoading}>
                  Submit
                </Button>
              </Group>
            </form>
          )}
        </>
      )}
    </div>
  );
}
