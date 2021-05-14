import Head from 'next/head'
import { entries } from '../../../../config/mock'
import Header from '../../../views/layouts/Header'
import Topics from '../../../views/components/Topics'
import Entries from '../../../views/components/Entries'

interface ICategory {
  catId: string
  entries: any
}

const Category: React.FC<ICategory> = ({ entries, catId }) => {
  return (
    <div className="bg-gray-900 px-12 py-4 w-full min-h-full flex flex-col">
      <Head>
        <title>Category Page</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header catId={catId} />
      <section className="grid grid-cols-4 my-4 gap-4  flex-grow">
        <Topics topics={entries} />
        <Entries entries={entries} />
      </section>
      {/* <Footer /> */}
    </div>
  )
}

export async function getServerSideProps(context) {
  const { category = '0' } = context.params

  const categoryEntries = entries.filter(
    (entry) => entry.categoryId === category
  )

  return {
    props: { entries: categoryEntries, catId: category }, // will be passed to the page component as props
  }
}

export default Category
