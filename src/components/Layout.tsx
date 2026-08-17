'use client';

import {
  Anchor,
  Box,
  Burger,
  Divider,
  Drawer,
  Flex,
  Text,
  Title,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useMemo } from 'react';
import { sans2Props } from '@/lib/fonts';

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

const nameProps = {
  ...sans2Props,
  lts: 8,
  component: 'span',
  order: 1 as const,
  fz: { base: '5rem' },
};

const andProps = {
  component: 'span',
  order: 1 as const,
  fz: { base: '2rem' },
  style: { fontFamily: 'var(--font-cursive)', position: 'relative' as const },
  top: 1 as const,
  mr: 12 as const,
};

export default function Layout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [opened, { toggle, close }] = useDisclosure(false);
  const items = useMemo(
    () =>
      pages.map(({ href, label }) => (
        <li key={href}>
          <Anchor
            component={Link}
            href={href}
            onClick={close}
            underline={pathname === href ? 'always' : 'hover'}
          >
            <Text component="span" fz="lg" tt="uppercase" lts={4}>
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
    <Flex
      mih="100%"
      align="center"
      pt={{ base: 32, sm: 32, md: 48, lg: 64 }}
      pb={64}
      justify="flex-start"
      direction="column"
    >
      <Flex component="header" w="100%" align="center" direction="column">
        <Flex justify="center" align="center">
          <Flex justify="center" align="center" gap={{ base: 'md' }} mb={-12}>
            <Title {...nameProps}>Kaitlyn</Title>
            <Title {...andProps}>And</Title>
            <Title {...nameProps}>David</Title>
          </Flex>
          <Burger
            opened={opened}
            onClick={toggle}
            hiddenFrom="xs"
            size="sm"
            aria-label="Toggle navigation"
            style={{ top: '5px', position: 'relative' }}
          />
        </Flex>
        <Drawer
          opened={opened}
          onClose={close}
          size="100%"
          padding="md"
          hiddenFrom="xs"
          zIndex={1000000}
        >
          <Flex
            component="ul"
            top={0}
            pt="md"
            style={{ position: 'absolute', zIndex: 1001 }}
            direction="column"
          >
            {items}
          </Flex>
        </Drawer>
        {pathname !== '/auth' && (
          <>
            <Box component="nav" visibleFrom="xs" mt={{ base: 'lg' }}>
              <Flex component="ul" gap={{ base: 'lg' }}>
                {items}
              </Flex>
            </Box>
            <Flex
              align="center"
              w="100%"
              maw={800}
              gap={{ base: 'lg' }}
              mt={{ base: 32 }}
            >
              <Divider style={{ flex: 'auto' }} />
              <Box
                w={{ base: 30 }}
                h={{ base: 45 }}
                style={{ position: 'relative', flex: 'none' }}
              >
                <Image
                  src="/assets/motif.webp"
                  alt="Botanical Motif"
                  fill
                  style={{ objectFit: 'contain' }}
                  sizes="30px"
                />
              </Box>
              <Divider style={{ flex: 'auto' }} />
            </Flex>
          </>
        )}
      </Flex>
      <Flex
        component="main"
        maw={800}
        w="100%"
        align="center"
        px="md"
        pt={32}
        direction="column"
      >
        {page && (
          <Title
            ta="center"
            {...(isHome
              ? { order: 2, pb: { base: 'sm' }, fw: 800 }
              : { order: 1, ...sans2Props })}
          >
            {page.title || page.label}
          </Title>
        )}
        {children}
      </Flex>
    </Flex>
  );
}
