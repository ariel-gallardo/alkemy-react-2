import '../Styles/App.css'

const Content = ({children}) => <>
    <div className='app'>
    <div className='navigation'/>
      <div className='content'>
        <div className='centerContent'>
          {children}
        </div>
      </div>
      <div className='footer'/>
    </div>
</>

export default Content