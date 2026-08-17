'use client';

import {
  Box,
  Button,
  Divider,
  Flex,
  Paper,
  Radio,
  Select,
  Text,
  TextInput,
  Title,
} from '@mantine/core';
import { useForm } from '@mantine/form';
import MiniSearch, { type SearchResult } from 'minisearch';
import { useEffect, useMemo, useState } from 'react';
import { events } from '@/lib/events';
import { h2Props, h4Props } from '@/lib/fonts';
import {
  getFinalForm,
  getFormFieldKey,
  getPartyFields,
  getSearchForm,
} from '@/lib/forms';
import { parties } from '@/lib/parties';

export default function Page() {
  const [status, setStatus] = useState<
    'idle' | 'loading' | 'success' | 'error'
  >('idle');
  const miniSearch = useMemo(() => {
    const items = parties.map((party, i) => ({ id: i, names: party }));
    const _miniSearch = new MiniSearch({
      fields: ['names'],
      storeFields: ['names', 'id'],
    });
    _miniSearch.addAll(items);
    return _miniSearch;
  }, []);
  const searchForm = useForm(getSearchForm());
  const [results, setResults] = useState<null | SearchResult[]>(null);
  const onSearch = searchForm.onSubmit((values) => {
    if (values?.name?.split(' ').length < 2) {
      setResults([]);
      return;
    }

    const results = miniSearch.search(values.name);
    const filtered = results.filter((result) => result.score >= 5);
    setResults(filtered);
  });
  const [record, setRecord] = useState<null | SearchResult>(null);
  const finalForm = useForm(getFinalForm());
  const isLoading = status === 'loading';

  const onSelect = (id: number) =>
    setRecord(results?.find((item) => item.id === id) ?? null);
  const onStartOver = () => {
    setRecord(null);
    setResults(null);
    searchForm.setFieldValue('name', '');
    setStatus('idle');
  };
  const onFinalSubmit = finalForm.onSubmit(async (values) => {
    setStatus('loading');

    try {
      const res = await fetch('/api/rsvp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || 'Failed to rsvp.');
      }

      onStartOver();
      setStatus('success');
    } catch (_) {
      setStatus('error');
    }
  });

  useEffect(() => {
    finalForm.setValues({
      party: record?.names ? getPartyFields(record?.names) : {},
    });
    finalForm.clearErrors();
  }, [finalForm.setValues, finalForm.clearErrors, record]);

  // useEffect(() => {
  //   searchForm.setFieldValue('name', 'David Sinclair');
  //   onSearch();
  // }, []);
  // useEffect(() => {
  //   if (results) {
  //     setRecord(results[0]);
  //   }
  // }, [results]);

  return (
    <Flex direction="column" ta="center" align="center" w="100%">
      {status === 'error' && (
        <>
          <Title
            pt={{ base: '64' }}
            order={3}
            style={{ fontFamily: 'var(--font-cursive)' }}
          >
            Sorry!
          </Title>
          <Text maw={600} textWrap="balance" mt={{ base: 'lg' }}>
            If you are seeing this message, please email david@sinclair.tech or
            text (858) 480-1781.
          </Text>
        </>
      )}
      {status === 'success' && (
        <>
          <Title
            pt={{ base: '64' }}
            order={3}
            style={{ fontFamily: 'var(--font-cursive)' }}
          >
            Thank you!
          </Title>
          <Text maw={600} textWrap="balance" mt={{ base: 'lg' }}>
            We appreciate your response. Feel free to resubmit by October 1st if
            you would like to update any answers.
          </Text>
          <Button onClick={onStartOver} mt="lg">
            Start Over
          </Button>
        </>
      )}
      {['idle', 'loading'].includes(status) && (
        <>
          {!record && (
            <>
              <Text textWrap="balance" maw={600} w="100%">
                If you're responding for you and a guest (or your family),
                you'll be able to RSVP for your entire group. Please enter the
                first and last name of one member of your party below.
              </Text>
              <form onSubmit={onSearch} style={{ width: '100%' }}>
                <Flex
                  direction="column"
                  maw={400}
                  w="100%"
                  gap={{ base: 'md' }}
                  align="stretch"
                  mx="auto"
                  mt={{ base: 'xl' }}
                >
                  <TextInput
                    w="100%"
                    aria-label="First and Last Name"
                    key={searchForm.key('name')}
                    autoFocus
                    {...searchForm.getInputProps('name')}
                    inputContainer={(children) => (
                      <>
                        {children}
                        <Text size="xs" mt={2.5} ta="left">
                          Ex. Sarah Fortune (not Dr. & Ms. Fortune)
                        </Text>
                      </>
                    )}
                  />
                  <Button fullWidth type="submit">
                    Search
                  </Button>
                </Flex>
              </form>
              <Box maw={400} w="100%" mt={{ base: 'xl' }}>
                {results !== null && results?.length === 0 && (
                  <Text>No results found, please try again.</Text>
                )}
                {results !== null && results?.length > 0 && (
                  <Flex component="ul" direction="column" gap={{ base: 'md' }}>
                    {results.map((item) => (
                      <Paper
                        component="li"
                        key={item.id}
                        withBorder
                        p={{ base: 'md' }}
                      >
                        <Flex align="center" justify="space-between">
                          <Text ta="left">
                            {item.names.map((name: string) => (
                              <span key={name}>
                                {name}
                                <br />
                              </span>
                            ))}
                          </Text>
                          <Button onClick={() => onSelect(item.id)}>
                            Select
                          </Button>
                        </Flex>
                      </Paper>
                    ))}
                  </Flex>
                )}
              </Box>
            </>
          )}
          {record && (
            <form onSubmit={onFinalSubmit} style={{ width: '100%' }}>
              <Flex direction="column" gap={{ base: 'lg' }} mx="auto">
                <Title {...h2Props}>{events[0].date}</Title>
                <Title {...h4Props}>Please fill out all fields</Title>
                <Flex
                  direction="column"
                  component="ul"
                  gap={{ base: '64' }}
                  pt={{ base: 'lg' }}
                >
                  {events.map(({ title, times, questions }) => (
                    <Flex direction="column" key={title} component="li">
                      <Title
                        order={3}
                        style={{ fontFamily: 'var(--font-cursive)' }}
                      >
                        {title}
                      </Title>
                      <Text mt={{ base: 'md' }}>
                        {times.map((time) => (
                          <span key={time}>
                            {time}
                            <br />
                          </span>
                        ))}
                      </Text>
                      <Flex
                        component="ul"
                        direction="column"
                        pt={{ base: 'md' }}
                      >
                        {record.names.map((name: string, i: number) => (
                          <Flex component="li" direction="column" key={name}>
                            {i === 0 && (
                              <Divider
                                style={{ alignSelf: 'center' }}
                                maw={400}
                                w="100%"
                              />
                            )}
                            <Flex
                              py={{ base: 'sm' }}
                              justify="space-between"
                              style={{ alignSelf: 'center' }}
                              maw={400}
                              w="100%"
                              align="center"
                            >
                              {name}
                              <Flex
                                component="ul"
                                direction="column"
                                className="flex flex-col gap-5"
                              >
                                {questions.map(({ type, options }) => {
                                  const key = getFormFieldKey(
                                    name,
                                    title,
                                    type,
                                  );
                                  return (
                                    <li key={key} className="w-[160px]">
                                      {type === 'Dinner option' && (
                                        <Select
                                          label="Select a dinner option"
                                          data={options}
                                          key={finalForm.key(key)}
                                          {...finalForm.getInputProps(key)}
                                        />
                                      )}
                                      {type === 'Will attend' && (
                                        <Radio.Group
                                          key={finalForm.key(key)}
                                          {...finalForm.getInputProps(key)}
                                        >
                                          <Flex
                                            direction="column"
                                            gap={{ base: 'xxs' }}
                                          >
                                            <Radio
                                              label="Will attend"
                                              value="Will attend"
                                            />
                                            <Radio
                                              label="Will not attend"
                                              value="Will not attend"
                                            />
                                          </Flex>
                                        </Radio.Group>
                                      )}
                                    </li>
                                  );
                                })}
                              </Flex>
                            </Flex>
                            <Divider
                              style={{ alignSelf: 'center' }}
                              maw={400}
                              w="100%"
                            />
                          </Flex>
                        ))}
                      </Flex>
                    </Flex>
                  ))}
                </Flex>
                <TextInput
                  ta="left"
                  label="Email address"
                  key={finalForm.key('email')}
                  {...finalForm.getInputProps('email')}
                  maw={400}
                  w="100%"
                  style={{ alignSelf: 'center' }}
                  inputContainer={(children) => (
                    <>
                      {children}
                      <Text size="xs" mt={2.5}>
                        This will be used to contact the party with updates
                      </Text>
                    </>
                  )}
                />
                <Flex
                  gap={{ base: 'md' }}
                  justify="center"
                  maw={400}
                  w="100%"
                  style={{ alignSelf: 'center' }}
                >
                  <Button onClick={onStartOver} variant="outline" flex="auto">
                    Start Over
                  </Button>
                  <Button type="submit" loading={isLoading} flex="auto">
                    Submit
                  </Button>
                </Flex>
              </Flex>
            </form>
          )}
        </>
      )}
    </Flex>
  );
}
