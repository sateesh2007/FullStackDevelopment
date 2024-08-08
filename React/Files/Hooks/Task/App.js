import React from 'react'
export default function App() {
  return (<>
    <div className='container'>

      <div className='row'>
        <div className='col-md-8'>
          <div className="a">
            <h1 style={{ color: 'white', paddingTop: '20px' }}>LEARN COMPLETE</h1>
            <h1 style={{ color: 'yellow', paddingTop: '20px' }}>WEB DEVELOPMENT</h1>
            <h1 style={{ color: 'white', paddingTop: '20px' }}>COURSE</h1>
            <p style={{ color: 'white' }}>Born in Ranchi, Dhoni made his first class debut for Bihar in 1999. He made his debut for
              the Indian cricket team on 23 December 2004 in an ODI against Bangladesh and played his first test a year
              later against Sri Lanka. In 2007, he became the captain
              of the ODI side before taking over in all formats by 2008. Dhoni retired from test cricket in 2014.

            </p>
            <button id='b1'>know more</button>
          </div>
        </div>



        <div className='col-md-4'>
          <div className="b">

            <form>
              <table>
                <tr>
                  <td> <br /><button className='aa' >Login Now</button></td></tr>
                <tr>
                  <td> <input type="text" placeholder="Enter Email or UserName" /></td><br /><br /></tr>
                <tr>
                  <td> <input type="password" placeholder="password" /></td><br /><br /></tr>
                <tr><td> <button id='b2'>LOGIN</button></td></tr>
                <tr> <td>
                  <h4 style={{ color: 'aliceblue' }}>Don't have account?<br /><span style={{ color: 'skyblue' }}><b>create new account</b></span> </h4>
                </td></tr>

              </table>

            </form>
          </div>
        </div>
      </div>
    </div>

  </>

  );
}