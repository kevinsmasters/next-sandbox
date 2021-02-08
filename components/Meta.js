import Head from 'next/head'

const Meta = ({title, keywords, description}) => {
    return (
        <Head>
            <meta name='viewport' content='width=device-width, initial-scale=1' />
            <meta name='keywords' content={keywords} />
            <meta name='description' content={description} />
            <title>{title}</title>
        </Head>
    )
}

Meta.defaultProps = {
    title: 'WebNev Dooz',
    keywords: 'snails, pickles, applecores',
    description: 'I was never given a name',
}

export default Meta
