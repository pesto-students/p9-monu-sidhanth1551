import React from "react";
import "./app.css"

const App =()=> {
    return <>
     
     <div className="firstDiv"> 
      <table>
        <tr>
            <td>
            <img src="https://vif1g.csb.app/src/assets/cattyboard.jpg"/>
            </td>
            <td className="title">
                <h2>CatyBoard Top 100 SingleCharts(11.06.36)</h2>
                <span>unknow artist</span><br></br>
                <span>2016.charts.100songs</span>
            </td>
        </tr>
      </table>
     </div>

     <table class="table table-striped">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1.One Dance</th>
      <td>  crakefit catKid</td>
      <td>2:54</td>
      <td><a href="#">CATTY CLOUD SYNC</a></td>
    </tr>
    <tr>
      <th scope="row">2.Panda</th>
      <td>Cattee</td>
      <td>4:07</td>
      <td><a href="#">CATTY CLOUD SYNC</a></td>
    </tr>
   
  </tbody>
</table>

<div className="footer">
    <table>
        <tr>
            <td>
            <img src="https://vif1g.csb.app/src/assets/cattyboard.jpg"></img>
            </td>
            <td>
            <p>It Ain't Love</p>
            <p>Catson Derula</p>
            </td>
        </tr>
    </table>
</div>
    
    
    </>

}

export default App;