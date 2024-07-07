export function useMDXComponents(components) {
    return {
      h2: ({ children }) => <h2 className="text-[36px] md:text-[48px] min-[1200px]:text-[56px] leading-tight font-medium mt-8 mb-4">{children}</h2>,
      p: ({ children }) => <p className="text-[20px] md:text-[22px] min-[1200px]:text-2xl">{children}</p>,
      ...components
    }
  }