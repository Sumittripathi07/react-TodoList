import './App.css';
import Part1 from './Components/Part1'

function App() {
  return (
    <>
    <section className="vh-100 newCard" >
  <div className="container py-5 h-100" >
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col col-xl-10">

        <div className="card " style={{borderRadius: "15px"}}>
          <div className="newCard2 card-body p-5 " >

            <Part1/>

          </div>
        </div>

      </div>
    </div>
  </div>
</section>    
    </>
  );
}

export default App;
