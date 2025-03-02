import React from 'react'
import Layout from '@theme/Layout'
import classnames from 'classnames'

import Tabs from '@theme/Tabs'
import TabItem from '@theme/TabItem'

import ReactMarkdown from 'react-markdown'
import debounce from '../utils/debounce'

import 'react-tabs/style/react-tabs.css'
import styles from './styles.module.css'

const packagesData = [
  {
    label: 'Core',
    value: 'core',
    changelogUrl:
      'https://raw.githubusercontent.com/tauri-apps/tauri/dev/core/tauri/CHANGELOG.md',
  },
  {
    label: 'CLI',
    value: 'cli.rs',
    changelogUrl:
      'https://raw.githubusercontent.com/tauri-apps/tauri/dev/tooling/cli.rs/CHANGELOG.md',
  },
  {
    label: 'Bundler',
    value: 'bundler',
    changelogUrl:
      'https://raw.githubusercontent.com/tauri-apps/tauri/dev/tooling/bundler/CHANGELOG.md',
  },
  {
    label: 'TAO',
    value: 'tao',
    changelogUrl:
      'https://raw.githubusercontent.com/tauri-apps/tao/dev/CHANGELOG.md',
  },
  {
    label: 'WRY',
    value: 'wry',
    changelogUrl:
      'https://raw.githubusercontent.com/tauri-apps/wry/dev/CHANGELOG.md',
  },
  {
    label: 'create-tauri-app',
    value: 'create-tauri-app',
    changelogUrl:
      'https://raw.githubusercontent.com/tauri-apps/tauri/dev/tooling/create-tauri-app/CHANGELOG.md',
  }
]

function fetchChangelog(url) {
  return fetch(url)
    .then((response) => response.text())
    .then((changelog) => {
      const [_, ...versionsChangelog] = changelog.split('## ')
      return versionsChangelog.map((versionChangelog) => {
        const [version, ...contents] = versionChangelog.split('\n')
        return {
          version: version.replace('\\[', '').replace(']', ''),
          notes: contents.filter((line) => !!line).join('\n'),
        }
      }).filter(({ version }) => !version.includes('Not Published'))
    })
}

function Changelog({ changelogs }) {
  const values = changelogs.map(({ version, notes }) => ({
    notes,
    value: version,
    label: version,
  }))

  const [activeValue, setActiveValue] = React.useState(values[0].value)

  return (
    <div className={styles.verticalTabs}>
      <div className={styles.verticalTabsPanes}>
        {values.map(({ value, notes }) => {
          const dynamicStyles =
            value === activeValue
              ? {
                  color: 'var(--ifm-color-primary)',
                  backgroundColor: 'var(--ifm-menu-color-background-active)',
                }
              : {
                  color: '',
                  backgroundColor: '',
                }
          return (
            <div
              key={'pane-' + notes}
              className={styles.verticalTabsPane}
              onClick={() => setActiveValue(value)}
              style={dynamicStyles}
            >
              {value}
            </div>
          )
        })}
      </div>
      {values.map(({ value, notes }) => (
        <div
          key={'content-' + notes}
          value={value}
          className={styles.verticalTabContent}
          style={{ display: value === activeValue ? 'block' : 'none' }}
        >
          <ReactMarkdown source={notes} />
        </div>
      ))}
    </div>
  )
}

function ReleaseNotes() {
  const [packages, setPackages] = React.useState(packagesData)
  const [searchedPackages, setSearchedPackages] = React.useState([
    ...packagesData,
  ])
  const [searchTerm, setSearchTerm] = React.useState('')

  function mutatePackage(packageData, index, mutation) {
    setSearchTerm('')

    const cb = (prevPackages) => {
      const newPackages = [...prevPackages]
      newPackages[index] = {
        ...packageData,
        ...mutation,
      }
      return newPackages
    }

    setPackages(cb)
    setSearchedPackages(cb)
  }

  function loadPackageChangelog(index) {
    const data = packages[index]

    if (data.changelog) {
      return
    }

    fetchChangelog(data.changelogUrl).then((changelog) => {
      mutatePackage(data, index, { changelog })
    })
  }

  React.useEffect(() => {
    packages.forEach((_, index) => loadPackageChangelog(index))
  }, [])

  const onSearch = React.useCallback(
    debounce((value) => {
      if (value) {
        const resultPackages = [...packages]
          .map((data) => {
            return {
              ...data,
              changelog: data.changelog
                ? data.changelog.filter(
                    (changelog) =>
                      changelog.version.includes(value) ||
                      changelog.notes
                        .toLowerCase()
                        .includes(value.toLowerCase())
                  )
                : [],
            }
          })
          .filter((data) => data.changelog.length > 0)
        setSearchedPackages(resultPackages)
      } else {
        setSearchedPackages(packages)
      }
    }, 300),
    [packages]
  )

  function onSearchInput(e) {
    const value = e.target.value
    setSearchTerm(value)
    onSearch(value)
  }

  return (
    <Layout title="Release notes" id="release-notes">
      <div className="container margin-vert--lg">
        <h1 className="text--center margin-bottom--xl">Release notes</h1>
        <div className={styles.changelogSearchContainer}>
          <input
            className={styles.changelogSearchInput}
            placeholder="Filter the results..."
            value={searchTerm}
            onChange={onSearchInput}
          />
        </div>
        {searchedPackages.length ? (
          <Tabs
            values={searchedPackages}
            block
            defaultValue={searchedPackages[0].value}
          >
            {searchedPackages.map(({ value, changelog }) => (
              <TabItem value={value} key={value}>
                <div className={styles.changelog}>
                  {changelog ? (
                    <Changelog changelogs={changelog} />
                  ) : (
                    <div>Loading...</div>
                  )}
                </div>
              </TabItem>
            ))}
          </Tabs>
        ) : (
          <div>Search term didn't match any release notes</div>
        )}
      </div>
    </Layout>
  )
}

export default ReleaseNotes
