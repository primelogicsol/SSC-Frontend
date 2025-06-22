'use client'

import { PortableText, PortableTextComponents } from '@portabletext/react'



// 🔧 Default rendering logic
const defaultComponents: PortableTextComponents = {
  block: {
    h1: ({ children }) => <h1 className="text-4xl  mb-4 ">{children}</h1>,
    h2: ({ children }) => <h2 className="text-3xl  mb-3 ">{children}</h2>,
    h3: ({ children }) => <h3 className="text-2xl  mb-2 ">{children}</h3>,
    h4: ({ children }) => <h4 className="text-xl  mb-2 ">{children}</h4>,
    h5: ({ children }) => <h5 className="text-lg  mb-1 ">{children}</h5>,
    normal: ({ children }) => <p className="text-base leading-7 mb-4">{children}</p>,
  },
  marks: {
    purpleLine: ({ children }) => (
      <span className=" ">{children}</span>
    ),
    purpleText: ({ children }) => <span className=" text-fixnix-lightpurple">{children}</span>,
    lightPurple: ({ children }) => <span className="text-fuchsia-600">{children}</span>,
    strong: ({ children }) => <strong className="font-bold">{children}</strong>,
    em: ({ children }) => <em className="italic">{children}</em>,
    indent: ({ children }) => (
      <p className="ml-6  border-gray-300 pl-4 ">{children}</p>
    ),
    bgGray : ({ children }) => <span className=" bg-gray-50 block pl-4 mx-[-40px] py-2 my-[-30px]">{children}</span>
  },
  types: {
    image: ({ value }) => (
      <img
        src={value?.asset?.url || ''}
        alt={value.alt || 'Image'}
        className="w-full rounded-xl my-4"
      />
    ),
    code: ({ value }) => (
      <pre className="bg-gray-900 text-white p-4 rounded my-4 overflow-auto">
        <code>{value.code}</code>
      </pre>
    ),
  },
}

type Props = {
  value: any
}

 const RichText = ({ value }: Props) => {
  const groups: any[] = []
  let currentBoxBlocks: any[] = []
  let normalBlocks: any[] = []

  value.forEach((block: any) => {
    // Agar block ek custom type hai (image, code, etc.)
    if (block._type !== 'block') {
      groups.push({ type: 'custom', block })
      return
    }

    // Check if purpleLine mark laga hua hai
    const hasPurpleLineMark = block.children?.some((child: any) =>
      child.marks?.includes('purpleLine')
    )

    if (hasPurpleLineMark) {
      currentBoxBlocks.push(block)
    } else {
      normalBlocks.push(block)
    }
  })

  if (currentBoxBlocks.length) {
    groups.push({ type: 'box', blocks: currentBoxBlocks })
  }

  return (
    <div className="space-y-6">
      {/* 🟢 Normal + Headings */}
      {normalBlocks.length > 0 && (
        <PortableText value={normalBlocks} components={defaultComponents} />
      )}

      {/* 🟣 PurpleLine box */}
      {groups.map((item, i) => {
        if (item.type === 'box') {
          return (
            <div
              key={i}
              className="bg-white  rounded-2xl shadow-md p-10 border-l-4 border-fixnix-lightpurple"
            >
              <PortableText value={item.blocks} components={defaultComponents} />
            </div>
          )
        }

        if (item.type === 'custom') {
          return (
            <PortableText key={i} value={[item.block]} components={defaultComponents} />
          )
        }

        return null
      })}
    </div>
  )
}

export default RichText
