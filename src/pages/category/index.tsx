import { entries } from '../../../config/mock'
import Category from './[category]'

export default Category

export async function getServerSideProps(context) {
  const { category = '0' } = context.params

  const categoryEntries = entries.filter(
    (entry) => entry.categoryId === category
  )

  return {
    props: { entries: categoryEntries }, // will be passed to the page component as props
  }
}
