import { entries } from '../../../config/mock'
import Category from '../category'

export default Category

export async function getServerSideProps(context) {
  const categoryEntries = entries.filter((entry) => entry.categoryId === '0')

  return {
    props: { entries: categoryEntries }, // will be passed to the page component as props
  }
}
