import Link from 'next/link';

export default function Nav(){
    return(
        <>
            <ul>
                <li><Link href={`/all-components`}><a>All Comps</a></Link></li>
                <li><Link href={`/about`}><a>About</a></Link></li>
                <li><Link href={`/agenda`}><a>Agenda</a></Link></li>
                <li><Link href={`/partners`}><a>Partners</a></Link></li>
                <li><Link href={`/faq`}><a>Faq</a></Link></li>
                <li><Link href={`/`}><a>Home</a></Link></li>
            </ul>
        </>
    )
}