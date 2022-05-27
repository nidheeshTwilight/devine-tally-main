import React from 'react'

function Footer() {
    return (
        <div>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', paddingTop: '5%' }}>
                <div><a href="#" class="nav-link px-2 text-muted" style={{ padding: '0px 10px' }}>Home</a></div>
                <div><a href="#" class="nav-link px-2 text-muted" style={{ padding: '0px 10px' }}>About Us</a></div>
                <div><a href="calendar" class="nav-link px-2 text-muted" style={{ padding: '0px 10px' }}>Calendar</a></div>
                <div><a href="tracker" class="nav-link px-2 text-muted" style={{ padding: '0px 10px' }}>Expense Tracker</a></div>
                <div><a href="https://rzp.io/l/dHMVZS3" class="nav-link px-2 text-muted" style={{ padding: '0px 10px' }}>Donation</a></div>
            </div>
            <div style={{ paddingTop: '1%' }} >
                <p>© 2021 Devine Tally, Inc</p>
            </div>
        </div>
    )
}

export default Footer