import Head from 'next/head'
import Header from '../../views/layouts/Header'

interface IRegister {
  entries: any
}

const Register: React.FC<IRegister> = ({ entries }) => {
  return (
    <div className="bg-gray-900 px-12 py-4 w-full min-h-full flex flex-col">
      <Head>
        <title>Category Page</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header />
      <section className="flex items-center justify-center h-full">
        <aside className="border border-gray-100 rounded mt-16 w-80 bg-gray-700">
          <div className="flex items-center border-b border-gray-200">
            <div className="w-1/2 text-center text-gray-100 font-semibold p-4">
              Register
            </div>
            <div className="w-1/2 text-center text-gray-100 font-semibold p-4">
              Login
            </div>
          </div>
          <form className="p-4 flex flex-col">
            <input type="text" />
            <input type="text" />
            <button>Login/Register</button>
          </form>
        </aside>
      </section>
      {/* <Footer /> */}
    </div>
  )
}

export async function getServerSideProps(context) {
  return {
    props: {}, // will be passed to the page component as props
  }
}

export default Register
