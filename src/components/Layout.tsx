'use client';

import {
  Anchor,
  Box,
  Burger,
  Divider,
  Drawer,
  Group,
  Stack,
  Text,
  Title,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useMemo } from 'react';

const pages = [
  {
    href: '/',
    label: 'Home',
    title: 'Welcome to our wedding website!',
  },
  {
    href: '/schedule',
    label: 'Schedule',
  },
  {
    href: '/rsvp',
    label: 'RSVP',
  },
  {
    href: '/faq',
    label: 'FAQ',
  },
  {
    href: '/registry',
    label: 'Registry',
  },
];

export default function Nav({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [opened, { toggle, close }] = useDisclosure(false);
  const items = useMemo(
    () =>
      pages.map(({ href, label }) => (
        <li key={href}>
          <Anchor
            c={pathname === href ? 'gray.9' : 'gray.6'}
            component={Link}
            href={href}
            onClick={close}
          >
            <Text component="span" fz="lg">
              {label}
            </Text>
          </Anchor>
        </li>
      )),
    [pathname, close],
  );
  const page = useMemo(
    () => pages.find(({ href }) => href === pathname),
    [pathname],
  );
  const isHome = useMemo(() => page?.href === '/', [page]);

  return (
    <Stack
      mih="100%"
      align="center"
      pt={{ base: 12, sm: 12, md: 48, lg: 48 }}
      pb={{ base: 24, sm: 24, md: 48, lg: 48 }}
      gap={0}
      justify="flex-start"
    >
      <Stack component="header" w="100%" align="center" gap={0}>
        <Group
          justify="center"
          align="center"
          gap="xl"
          pb={{ base: 0, sm: 0, md: 'lg', lg: 'xl' }}
        >
          <Title
            component="div"
            order={1}
            fz={{ base: '1.75rem', sm: '2rem', md: '2.5rem', lg: '3rem' }}
            style={{ fontFamily: 'var(--font-cursive)' }}
          >
            Kaitlyn + David
          </Title>
          <Burger
            opened={opened}
            onClick={toggle}
            hiddenFrom="xs"
            size="sm"
            aria-label="Toggle navigation"
            style={{ top: '5px', position: 'relative' }}
          />
        </Group>
        {pathname !== '/auth' && (
          <>
            <Box visibleFrom="xs" component="nav" pt="md">
              <Group component="ul" gap="xl">
                {items}
              </Group>
            </Box>
            <Divider my="md" w="100%" maw={800} />
          </>
        )}
        <Drawer
          opened={opened}
          onClose={close}
          size="100%"
          padding="md"
          hiddenFrom="xs"
          zIndex={1000000}
        >
          <Stack
            component="ul"
            gap="md"
            top={0}
            pt="md"
            style={{ position: 'absolute', zIndex: 1001 }}
          >
            {items}
          </Stack>
        </Drawer>
      </Stack>
      <Stack component="main" maw={800} w="100%" align="center" pt="lg" px="md">
        {page && (
          <Title
            {...(isHome ? { order: 1, fz: 24, lh: 1.5, fw: '200' } : {})}
            order={1}
            ta="center"
          >
            {page.title || page.label}
          </Title>
        )}
        {children}
      </Stack>
    </Stack>
  );
}
