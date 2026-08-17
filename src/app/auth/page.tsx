'use client';

import { Box, Button, Flex, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function Auth() {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const form = useForm({
    mode: 'controlled',
    validateInputOnChange: true,
    initialValues: { password: '' },
  });
  const onSubmit = form.onSubmit(async (values) => {
    setIsLoading(true);

    const res = await fetch('/api/auth', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(values),
    });

    if (res.ok) {
      router.push('/');
      router.refresh();
    } else {
      form.setErrors({ password: 'Invalid password' });
    }

    setIsLoading(false);
  });

  return (
    <Box component="form" onSubmit={onSubmit} maw={200} w="100%">
      <Flex direction="column" gap={{ base: 'md' }}>
        <TextInput
          label="Password"
          autoFocus
          type="password"
          {...form.getInputProps('password')}
          required
        />
        <Button fullWidth type="submit" loading={isLoading}>
          Submit
        </Button>
      </Flex>
    </Box>
  );
}
