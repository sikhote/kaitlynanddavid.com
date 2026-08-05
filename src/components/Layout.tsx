'use client';

import { Divider, Group, Stack, Text } from '@mantine/core';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Nav({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  // className="min-h-full flex flex-col items-center py-15"
  return (
    <Stack mih="100%" align="center" py={48} justify="flex-start">
      <div className="pb-10 font-cursive text-5xl">Kaitlyn + David</div>
      {pathname !== '/auth' && (
        <>
          <nav>
            <Group component="ul" gap="xl">
              {[
                {
                  slug: '/',
                  label: 'Home',
                },
                {
                  slug: '/schedule',
                  label: 'Schedule',
                },
                {
                  slug: '/rsvp',
                  label: 'RSVP',
                },
                {
                  slug: '/faq',
                  label: 'FAQ',
                },
                {
                  slug: '/registry',
                  label: 'Registry',
                },
              ].map(({ slug, label }) => (
                <li key={slug}>
                  <Link href={slug}>
                    <Text fz="lg" c={pathname === slug ? 'gray.9' : 'gray.6'}>
                      {label}
                    </Text>
                  </Link>
                </li>
              ))}
            </Group>
          </nav>
          <Divider my="md" w="100%" maw={800} />
        </>
      )}
      <main className="max-w-4xl px-5 w-full flex flex-col items-center">
        {children}
      </main>
    </Stack>
  );
}
