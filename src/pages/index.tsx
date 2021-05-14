import { entries } from '../../config/mock'
import Home from './home'

export default Home

export async function getServerSideProps(context) {
  const categoryEntries = entries.filter((entry) => entry.categoryId === '0')

  return {
    props: { entries: categoryEntries }, // will be passed to the page component as props
  }
}
