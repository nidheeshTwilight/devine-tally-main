import React from 'react'

function Navbar() {
  return (
    <div style={{
      background: "transparent", position: "sticky", top: "0",
      width: "100%"
    }}>  &nbsp;
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <a style={{ color: "#8a8a8a" }} class="navbar-brand" href="#">Devine Tally</a>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div style={{ float: "right" }} class="navbar-nav">
              <a style={{ margin: "15px", color: "#8a8a8a" }} class="nav-link active" aria-current="page" href="#">Home</a>
              <a style={{ margin: "15px", color: "#8a8a8a" }} class="nav-link" href="calendar">Calendar</a>
              <a style={{ margin: "15px", color: "#8a8a8a" }} class="nav-link" href="tracker">Expense Tracker</a>
              <a style={{ margin: "15px", color: "#8a8a8a" }} class="nav-link" href="https://rzp.io/l/dHMVZS3">Donation</a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar