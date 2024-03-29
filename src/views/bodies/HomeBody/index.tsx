import React from 'react'
import Icon from '../../ui/Icon'
import Link from 'next/link'
import styles from './styles.module.scss'
import { useRouter } from 'next/router'
import { i18n, useTranslation } from 'next-i18next'
import { getRouteSource } from '../../../utilities/getRouteSource'

interface IHomeBody {
  title?: string
}

const HomeBody: React.FC<IHomeBody> = () => {
  const router = useRouter()
  const { t } = useTranslation('common')

  const changeLanguage = (language) => {
    console.log(i18n)
    i18n?.changeLanguage(language, () => {
      router.push(
        {
          pathname: getRouteSource(router.pathname, language),
          query: router.query,
        },
        null,
        { locale: language }
      )
    })
  }

  return (
    <div className={styles.body}>
      <div>
        <h1>{t('hi')} / Home Page</h1>
        <p>Current locale: {router.locale}</p>
        <p>Default locale: {router.defaultLocale}</p>
        <p>Configured locales: {JSON.stringify(router.locales)}</p>
        <br />
        <br />
        <Link href="/about" locale="tr">
          <button>tr</button>
        </Link>
        <Link href="/about" locale="en">
          <button>en</button>
        </Link>
        <Link href="/about" locale="de">
          <button>de</button>
        </Link>
        <Link href="/about" locale="ne">
          <button>ne</button>
        </Link>
      </div>
      <Icon icon="arrow-left" />
    </div>
  )
}

export default HomeBody
