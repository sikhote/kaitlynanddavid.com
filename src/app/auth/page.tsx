'use client';

import { Button, Stack, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';
import { useRouter } from 'next/navigation';

export default function Auth() {
  const router = useRouter();
  const form = useForm({
    mode: 'controlled',
    validateInputOnChange: true,
    initialValues: { password: '' },
  });
  const onSubmit = form.onSubmit(async (values) => {
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
  });

  return (
    <form onSubmit={onSubmit}>
      <Stack gap="md" w="100%" miw={200}>
        <TextInput
          label="Password"
          autoFocus
          type="password"
          {...form.getInputProps('password')}
          required
        />
        <Button fullWidth type="submit">
          Submit
        </Button>
      </Stack>
    </form>
  );
}
