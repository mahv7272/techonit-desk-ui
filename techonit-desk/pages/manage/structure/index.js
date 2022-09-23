import Image from 'next/image'
import Link from 'next/link'
import SuggestForNew from '../../../components/manage/structure/SuggestForNewStructure';
export default function Index() {
    return (
        <>
            <SuggestForNew />
        </>
    )
}

Index.layout = 'manage';
Index.title = 'My structures overview';