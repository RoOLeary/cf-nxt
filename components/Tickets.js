import Link from 'next/link';

export default function Ticket( props ){

    const { tickets, heading } = props;

    return(
        <div className="tickets">
            <h1>Get Yizzer Tickets</h1>
            <p>{heading}</p>
            <ul>
            {tickets.map((ticket, i) => {
                return (
                    <li key={i}>
                        <Link href={`${ticket.ticketLink}`}><a>{ticket.title}</a></Link>
                    </li>
                )
            })}
            </ul>
        </div>
    )
}