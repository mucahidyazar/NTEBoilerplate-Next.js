import Head from 'next/head'
import { entries } from '../../../../../config/mock'
import Header from '../../../../views/layouts/Header'
import Topics from '../../../../views/components/Topics'
import Entries from '../../../../views/components/Entries'

interface IEntryID {
  id: any
  catId: any
  entry: any
  entries: any
}

const EntryID: React.FC<IEntryID> = ({ id, catId, entry, entries }) => {
  return (
    <div className="bg-gray-900 px-12 py-4 w-full min-h-full flex flex-col">
      <Head>
        <title>Home Page</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header catId={catId} />
      <section className="grid grid-cols-4 my-4 gap-4  flex-grow">
        <Topics topics={entries} id={id} />
        <Entries entry={entry} entries={entry.messages} id={id} />
      </section>
      {/* <Footer /> */}
    </div>
  )
}

export async function getServerSideProps(context) {
  const { entryId, category } = context.params

  const entry = entries.find((entry) => entry.entryId === entryId)
  const categoryEntries = entries.filter(
    (entry) => entry.categoryId === category
  )

  return {
    props: { id: entryId, catId: category, entry, entries: categoryEntries }, // will be passed to the page component as props
  }
}

export default EntryID
