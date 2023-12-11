export const typeURL = (pageName: string) => {
  return `/page?tab=${pageName}` as const
}

export type URLProps = ReturnType<typeof typeURL>